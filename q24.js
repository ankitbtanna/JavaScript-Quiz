const user = {
  name: 'Bob',
  age: 25
};

console.log(
  Object.fromEntries(
    Object.entries(user)
  )
);


