declare module "types/Address" {
    export interface Address {
        city: String;
        state: String;
    }
}
declare module "types/Person" {
    import { Address, Employer } from "types/index";
    export interface Person {
        name: String;
        age: number;
        location: Address;
        hairColor: String;
        height: number;
        pronouns: String;
        employer?: Employer;
    }
}
declare module "types/Employer" {
    export interface Employer {
        name: String;
    }
}
declare module "types/index" {
    export * from "types/Address";
    export * from "types/Person";
    export * from "types/Employer";
}
declare module "index" { }
