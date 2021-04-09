import { Person, Address } from './types';

const main = () => {
    const name = 'Steve Jobs';
    const age = 35;
    const hairColor = 'brown';
    const location: Address = {
        city: 'Arlington',
        state: 'VA'
    }
    const height = 78;
    const pronouns = 'he/him'

    const steve: Person ={
        name,
        age,
        location,
        hairColor,
        height,
        pronouns
    };

    console.log(`${steve.name} is ${steve.age} years old.`);
}

main();