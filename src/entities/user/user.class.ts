import { Entity } from "../entity/entity.class";
import { UserData } from "./user.data";

export class User extends Entity<UserData> {

    public get firstName(): string {
        return this._data.firstName;
    }

    public get lastName(): string {
        return this._data.lastName;
    }

    public get email(): string {
        return this._data.email;
    }
}