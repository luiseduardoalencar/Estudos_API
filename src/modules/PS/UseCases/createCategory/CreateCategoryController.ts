import { Request, Response } from "express";
import { CreateCategoryUseCase } from "./CreateCategoryUseCase";

class CreateCategoryController{

    constructor(private createCategoryUseCase: CreateCategoryUseCase){}

//função handle serve para receber a requisição e enviar a resposta
    handle(request: Request, response: Response): Response{
    const { name, description } = request.body;
    this.createCategoryUseCase.execute({name, description})
    return response.status(201).send();
    }

}

export {CreateCategoryController}