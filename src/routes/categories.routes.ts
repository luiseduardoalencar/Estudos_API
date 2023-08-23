//as rotas devem chamar os repositorios, e os repositorios devovlem os dados para as rotas
import { Router } from "express"; //utilizado para possibilitar a criação de rotas
import { createCategoryController } from "../modules/PS/UseCases/createCategory";
import { listcategoriescontroller } from "../modules/PS/UseCases/listCategories";
import { importCategoryController} from "../modules/PS/UseCases/importCategory"
import multer from "multer";

const upload = multer({
    dest: "./tmp",
})

const categoriesRoutes = Router();

//a rota é criada para recer a requisição,e retornar uma resposta, não deve ter processamento de dados
categoriesRoutes.post("/",(request, response) =>{
    return createCategoryController.handle(request,response)
})

categoriesRoutes.get("/", (request,response) => {
   return listcategoriescontroller.handle(request,response)
})

categoriesRoutes.post("/import", upload.single("file"), (request,response)=>{
    return importCategoryController.handle(request,response)
})

export { categoriesRoutes }