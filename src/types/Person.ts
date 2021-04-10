import { Address, Employer, Hobby } from '.';
export interface Person {
    name: String,
    age: number,
    location: Address,
    hairColor: HairColor,
    height: number,
    pronouns: String,
    employer?: Employer;
    hobbies?: Hobby[]
}

export enum HairColor {
    BROWN = "brown",
    BLACK = "black",
    BLONDE = "blonde",
    NONE = "none"
}