const somePerson = { username: 'Davey154' };

const personValidator = person => {
  person.valid = person.username.length > 5;
  return person.valid;
};

personValidator(somePerson);

console.log(somePerson.valid);


