
import { Router } from 'express';
import { createSpecificationController } from '../modules/PS/UseCases/createSpecification';

const specificationsRoutes = Router();

//o arquivo de rota deve somente receber a requisição e devolver a resposta, não deve ter processamento de dados
specificationsRoutes.post("/", (request,response) => {
    return createSpecificationController.handle(request,response);
})


export {specificationsRoutes};