const dog = {
  name: 'Buzo',
  speak: function() {
    console.log(this.name);
  }
}

const foo = dog.speak;
foo();
dog.speak();

