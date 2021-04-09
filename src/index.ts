import { Person } from './types/Person';

const main = () => {
    const name = 'Steve Jobs';
    const age = 35;
    const location = 'Palo Alto';

    const steve: Person ={
        name,
        age,
        location
    };

    console.log(`${steve.name} from ${steve.location} is ${steve.age} years old.`);
}

main();