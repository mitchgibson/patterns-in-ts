export type UserDtoInput = {
    firstName: string;
    lastName: string;
    email: string;
};

export type DtoInputValidator = (value: any) => boolean;

export class UserDto {
    private readonly _inputData: UserDtoInput;
    private readonly _validators: Record<keyof UserDtoInput, DtoInputValidator> = {
        firstName: (value: string) => !!value && value.length > 0,
        lastName: (value: string) => !!value && value.length > 0,
        email: (value: string) => !!value && value.length > 0 && /\S+@\S+\.\S+/.test(value),
    };

    constructor(inputData: UserDtoInput) {
        if(!inputData) throw new Error("Input data is required");
        this._inputData = Object.freeze({ ...inputData });
        this.validate();
    }

    private validate(): boolean {
        Object.keys(this._inputData).forEach((key: string) => {
            if(!this._validators[key as keyof UserDtoInput](this._inputData[key as keyof UserDtoInput])) {
                throw new Error(`Invalid or missing value for ${key}`);
            }
        });

        return true;
    }
}
