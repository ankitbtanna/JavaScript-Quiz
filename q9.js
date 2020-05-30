let person = {
    name: "Leonardo"
  };

Object.freeze(person);
person.name = 'Lima';
console.log(person.name);

