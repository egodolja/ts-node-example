import { Person } from './types/Person';
import { Address } from './types/Address';

const main = () => {
    const name = 'Steve Jobs';
    const age = 35;
    const location: Address = {
        street: 'Fenwick St',
        city: 'Arlington',
        state: 'VA',
        zip: '22201'
    };
    const hairColor = 'brown';

    const steve: Person ={
        name,
        age,
        location,
        hairColor
    };

    console.log(`${steve.name} is ${steve.age} years old. He lives at ${steve.location.street} in ${steve.location.city}, ${steve.location.state}.`);
}

main();