import { describe, it, expect } from "vitest";
import { UserDto, UserDtoInput } from "../user.dto";
import { User } from "../../user.class";

describe("User DTO", () => {
    it("should create a valid DTO", () => {
        const data: UserDtoInput = {
            firstName: "John",
            lastName: "Doe",
            email: "john.doe@email.com"
        };

        const userDto = new UserDto(data);
        expect(userDto.validate()).toBe(true);
    });

    it("should throw an error if data is missing", () => {
        const data = {
            "firstName": "John",
            "email": "john.doe@email.com"
        } as UserDtoInput;
        const dto = new UserDto(data);
        expect(() => dto.validate()).toThrowError("Invalid or missing value for 'lastName'");
    });

    it("should throw an error if data is invalid", () => {
        const data = {
            "firstName": "John",
            "lastName": "Doe",
            "email": "invalid-email"
        } as UserDtoInput;
        const dto = new UserDto(data);
        expect(() => dto.validate()).toThrowError("Invalid or missing value for 'email'");
    });

    it("should convert DTO to Entity", () => {
        const data: UserDtoInput = {
            firstName: "John",
            lastName: "Doe",
            email: "john.doe@email.com"
        };
        const userDto = new UserDto(data);
        const user: User = userDto.toEntity();
        expect(user).toBeDefined();
        expect(user.firstName).toBe(data.firstName);
        expect(user.lastName).toBe(data.lastName);
        expect(user.email).toBe(data.email);
    });
});