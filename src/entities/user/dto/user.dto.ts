import { UserFactory } from "../factory/user.factory";
import { Dto } from "../../entity/dto/entity.dto";

export type UserDtoInput = {
    firstName: string;
    lastName: string;
    email: string;
};

export type DtoInputValidator = (value: any) => boolean;

export class UserDto extends Dto<UserDtoInput> {

    protected readonly _data: UserDtoInput;

    protected readonly _dataAdapter = (data: UserDtoInput) => ({
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
    });

    protected readonly _validators: Record<keyof UserDtoInput, DtoInputValidator> = {
        firstName: (value: string) => !!value && value.length > 0,
        lastName: (value: string) => !!value && value.length > 0,
        email: (value: string) => !!value && value.length > 0 && /\S+@\S+\.\S+/.test(value),
    };

    protected readonly _entityFactory: UserFactory = new UserFactory();
}
