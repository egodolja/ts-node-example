import { Person } from './types/Person';

const main = () => {
    const name = 'Steve Jobs';
    const age = 35;
    const hairColor = 'brown';

    const steve: Person ={
        name,
        age,
        hairColor
    };

    console.log(`${steve.name} is ${steve.age} years old.`);
}

main();