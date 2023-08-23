import { ICategoriesRepository } from "../../repositories/ICategoriesRepository";
import { Category } from "../../model/Category";

class listCategoriesUseCase {

    constructor(private categoriesRepository: ICategoriesRepository){}

execute(): Category[]{
    const categories = this.categoriesRepository.list();
    return categories;
}
}
export {listCategoriesUseCase}