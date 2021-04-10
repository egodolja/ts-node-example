declare module "types/Address" {
    export interface Address {
        city: String;
        state: String;
    }
}
declare module "types/Person" {
    import { Address, Employer, Hobby } from "types/index";
    export interface Person {
        name: String;
        age: number;
        location: Address;
        hairColor: HairColor;
        height: number;
        pronouns: String;
        employer?: Employer;
        hobbies?: Hobby[];
    }
    export enum HairColor {
        BROWN = "brown",
        BLACK = "black",
        BLONDE = "blonde",
        NONE = "none"
    }
}
declare module "types/Employer" {
    import { Address } from "types/index";
    export interface Employer {
        name: String;
        location: Address;
    }
}
declare module "types/Hobby" {
    export interface Hobby {
        name: String;
        preferenceLevel: number;
    }
}
declare module "types/index" {
    export * from "types/Address";
    export * from "types/Person";
    export * from "types/Employer";
    export * from "types/Hobby";
}
declare module "index" { }
