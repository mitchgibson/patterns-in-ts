import { describe, it, expect } from "vitest";
import { UserDto, UserDtoInput } from "./user.dto";

describe("User DTO", () => {

    describe("Validation", () => {

        it("should return true if the user is valid", () => {
            const input:UserDtoInput = {
                firstName: "John",
                lastName: "Doe",
                email: "john.doe@email.com"
            };

            expect(new UserDto(input)).toBeTruthy();
        });

        it("should throw an error if the user is invalid", () => {
            const input:UserDtoInput = {
                firstName: "",
                lastName: "",
                email: ""
            };

            expect(() => new UserDto(input)).toThrowError();
        });

        it("should throw an error if firstName is missing", () => {
            const input:UserDtoInput = {
                firstName: "",
                lastName: "Doe",
                email: "john.doe@email.com"
            };

            expect(() => new UserDto(input)).toThrowError("Invalid or missing value for firstName");
        });

        it("should throw an error if lastName is missing", () => {
            const input:UserDtoInput = {
                firstName: "John",
                lastName: "",
                email: "john.doe@email.com"
            };

            expect(() => new UserDto(input)).toThrowError("Invalid or missing value for lastName");
        });

        it("should throw an error if email is missing", () => {
            const input:UserDtoInput = {
                firstName: "John",
                lastName: "Doe",
                email: ""
            };

            expect(() => new UserDto(input)).toThrowError("Invalid or missing value for email");
        });

        it("should throw an error if email is invalid", () => {
            const input:UserDtoInput = {
                firstName: "John",
                lastName: "Doe",
                email: "invalid email@"
            };

            expect(() => new UserDto(input)).toThrowError("Invalid or missing value for email");
        });
    });
});