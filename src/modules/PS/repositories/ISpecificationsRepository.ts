import {Specification} from "../model/Specification";

interface iCreateSpecificationDTO {
    name: string;
    description: string;
}

interface ISpecificationsRepository {
    create({name, description}: iCreateSpecificationDTO): void;
    findByName(name: string): Specification;
}

export { ISpecificationsRepository, iCreateSpecificationDTO}

