declare module "types/Address" {
    export interface Address {
        street: String;
        city: String;
        state: String;
        zip: String;
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
declare module "index" { }
