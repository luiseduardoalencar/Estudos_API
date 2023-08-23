import { CategoriesRepository } from "../../repositories/implementations/CategoriesRepository";
import { ListCategoriesController } from "./listCategoriesController";
import { listCategoriesUseCase } from "./listCategoriesUseCase";


const categoriesrepository = CategoriesRepository.getInstance();
const listcategoryusecase = new listCategoriesUseCase(categoriesrepository);
const listcategoriescontroller = new ListCategoriesController(listcategoryusecase);

export {listcategoriescontroller}