
//repositorios possuem a responsabilidade de manipular os dados, ou seja, criar, ler, atualizar e deletar
import {Category} from "../../model/Category";
import { ICategoriesRepository, ICreateCategoryDTO } from "../ICategoriesRepository";
//DTO - Data Transfer Object, CRIAR UM OBJETO QUE VAI SER RESPONSAVEL POR TRANSFERIR OS DADOS DE UMA CAMADA PARA OUTRA


//singleton é um padrão de projeto que garante que uma classe tenha apenas uma instancia e fornece um ponto global de acesso a ela
class CategoriesRepository implements ICategoriesRepository {
    
    private categories: Category[];

    private static INSTANCE: CategoriesRepository;


    //somente a instancia da classe pode chamar o construtor
    private constructor(){
        this.categories = [];
    }

    public static getInstance(): CategoriesRepository{ //cria uma instancia da classe
        if(!CategoriesRepository.INSTANCE){
            CategoriesRepository.INSTANCE = new CategoriesRepository();
        }
        return CategoriesRepository.INSTANCE;
    }
    //responsavel por criar a categoria dentro da nossa "tabela"
    create({description, name} : ICreateCategoryDTO): void {
        const category= new Category();
    
    Object.assign(category, { //Object assign é utilizado para atribuir valores a um objeto
        name,
        description,
        created_at: new Date()
    });

    this.categories.push(category);
    
    }

    //função que valida a existencia de uma categoria
    findByName(name: string): Category{
        const category = this.categories.find(category  => category.name === name);
        return category;
    }

    //lista as categorias
    list():Category[] {
        return this.categories;
    }
}

export { CategoriesRepository };