import { Person, Address, HairColor} from './types';

const main = () => {
    const name = 'Steve Jobs';
    const age = 35;
    const hairColor = HairColor.BROWN;
    const location: Address = {
        city: 'Arlington',
        state: 'VA'
    }
    const height = 78;
    const pronouns = 'He'

    const steve: Person ={
        name,
        age,
        location,
        hairColor,
        height,
        pronouns
    };

    console.log(`${steve.name} is ${steve.age} years old. ${steve.pronouns} lives in ${steve.location.state}`);
}

main();