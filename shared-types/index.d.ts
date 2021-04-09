declare module "types/Address" {
    export interface Address {
        city: String;
        state: String;
    }
}
declare module "types/Person" {
    import { Address } from "types/Address";
    export interface Person {
        name: String;
        age: number;
        location: Address;
        hairColor: String;
        height?: number;
    }
}
declare module "types/index" {
    export * from "types/Address";
    export * from "types/Person";
}
declare module "index" { }
