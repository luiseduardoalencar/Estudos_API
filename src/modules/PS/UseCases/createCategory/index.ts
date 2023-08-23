//arquivo que serve para instanciar classes para serem usadas nas rotas

import { CategoriesRepository } from "../../repositories/implementations/CategoriesRepository";
import { CreateCategoryUseCase } from "./CreateCategoryUseCase";
import { CreateCategoryController } from "./CreateCategoryController";

const categoryRepository =  CategoriesRepository.getInstance();
const createCategryUseCase = new CreateCategoryUseCase(categoryRepository);
const createCategoryController = new CreateCategoryController(createCategryUseCase);

//com esse controller que está sendo exportado,é passo para as rotas o que deve ser feito
export {createCategoryController};