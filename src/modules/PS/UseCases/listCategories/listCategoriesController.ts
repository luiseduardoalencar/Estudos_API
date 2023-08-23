import { Request, Response } from "express";
import { listCategoriesUseCase } from "./listCategoriesUseCase";

class ListCategoriesController {
    constructor(private listcategoriesusecase: listCategoriesUseCase){}
    
    handle(request: Request, response: Response): Response{
        const all = this.listcategoriesusecase.execute();
        return response.json(all);
    }
}
export {ListCategoriesController}