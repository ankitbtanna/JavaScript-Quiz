function Dog(name) {
    this.name = name;
    this.speak = function() {
        console.log('woof');
    }
}

Dog.prototype.speak = function() {
    console.log('arf');
};

const dog = new Dog('Pogo');

dog.speak();


