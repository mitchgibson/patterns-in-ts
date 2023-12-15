import { EntityFactory } from "../../entity/factory/entity.factory";
import { User } from "../user.class";

export class UserFactory extends EntityFactory {
    
    public create(): User {
        return new User();
    }
}