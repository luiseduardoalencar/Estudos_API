import {v4 as uuidV4} from "uuid";

class Specification {
    id?:string; //definida como string, mas será atribuida uma uuid
    name: string;
    description: string;
    created_at: Date;

    constructor(){
        if(!this.id){
            this.id = uuidV4();
        }
    }
}
export {Specification}