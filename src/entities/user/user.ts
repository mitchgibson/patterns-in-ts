export class User {

    private _firstName: string;
    private _lastName: string;
    private _email: string;

    constructor(firstName: string, lastName: string, email: string) {
        this._firstName = firstName;
        this._lastName = lastName;
        this._email = email;
    }

    get firstName(): string {
        return this._firstName;
    }

    set firstName(value: string) {
        throw new Error("Cannot change first name");
    }

    get lastName(): string {
        return this._lastName;
    }

    get email(): string {
        return this._email;
    }
}