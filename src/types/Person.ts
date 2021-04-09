import { Address, Employer } from '.';
export interface Person {
    name: String,
    age: number,
    location: Address,
    hairColor: String,
    height: number,
    pronouns: String,
    employer?: Employer;
}