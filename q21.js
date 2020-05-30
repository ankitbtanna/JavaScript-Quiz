const user = {
    name: 'Bob',
    age: 25,
    pet: {
        name: 'Buzo',
        type: 'Dog'
    }
};

Object.freeze(user);

user.name = 'Joe';
user.pet.name = 'Max';

console.log(user.name, user.pet.name);


