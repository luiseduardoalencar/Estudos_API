import fs from 'fs';
import  {parse}  from 'csv-parse';
import { ICategoriesRepository } from '../../repositories/ICategoriesRepository';

class IImportCategory{
    name: string;
    description: string;
}

class ImportCategoryUseCase{

    constructor(private categoriesRepository: ICategoriesRepository){}

    loadCategories(file: Express.Multer.File){
        
        return new Promise((resolve, reject) =>{
            
            //essa função permite que o arquivo seja lido em partes, e não de uma vez só
            const stream = fs.createReadStream(file.path)
            const categories: IImportCategory[] = []

            //essa função permite a leitura dos arquivos cvs por partes, utilizando como delimitador a virgula
            const parseFile = parse({delimiter: ","})

            //responsavel por receber os dados do arquivo
            stream.pipe(parseFile)


            parseFile.on("data", async (line) => {
                console.log(line)
                //cada posição do array line, é um elemento do arquivo csv
                const [name, description] = line
                categories.push({
                    name,
                    description
                })
            })

        .on("end",() => {
            fs.promises.unlink(file.path)
            resolve (categories)
            })
        .on("error", (err) => {
            reject(err)
            })
        })
    }

   /**Na função  abaixo, o compilador acusava o erro de que a função map não reconhecia a variável categories
    * como um vetor, dessa forma, foi preciso criar uma verificação abixo
    
    
     async execute(file: Express.Multer.File): Promise<void>{
        
         const categories = await this.loadCategories(file)
        
         categories.map(async (category) =>{

             const { name, description } = category

             const existCategory = this.categoriesRepository.findByName(name)
            
             if(!existCategory){
                 this.categoriesRepository.create({
                     name,
                     description,
                 })
             }
         })
     }

    Nesse exemplo, usamos a verificação Array.isArray(categories) para garantir que categories 
     * é de fato um array antes de usá-lo com o método map. Dessa forma, o TypeScript entenderá 
     * corretamente o tipo do valor e permitirá o uso do map. */

    async execute(file: Express.Multer.File): Promise<void> {
        const categories = await this.loadCategories(file);
    
        if (Array.isArray(categories)) {
            const promises = categories.map(async (category) => {
                const { name, description } = category;
                const existCategory = await this.categoriesRepository.findByName(name);
    
                if (!existCategory) {
                    await this.categoriesRepository.create({ name, description });
                }
            });
    
            await Promise.all(promises);
        }
    }

}
export{ImportCategoryUseCase}