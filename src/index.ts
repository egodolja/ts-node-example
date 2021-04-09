import { Person } from './types/Person';

const main = () => {
    const name = 'Steve Jobs';
    const age = 35;
    const hairColor = 'brown';
    const location = "Palo Alto"

    const steve: Person ={
        name,
        age,
        location,
        hairColor
    };

    console.log(`${steve.name} is ${steve.age} years old.`);
}

main();