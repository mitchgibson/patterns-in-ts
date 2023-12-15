import { EntityData } from "../entity/entity.data";

export interface UserData extends EntityData {
    firstName: string;
    lastName: string;
    email: string;
};