import { Person } from './types/Person';

const main = () => {
    const name = 'Steve Jobs';
    const age = 35;
    const location = 'Palo Alto';
    const hairColor = 'brown';

    const steve: Person ={
        name,
        age,
        location,
        hairColor
    };

    console.log(`${steve.name} from ${steve.location} is ${steve.age} years old and has ${steve.hairColor} hair.`);
}

main();