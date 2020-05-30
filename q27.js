function printSomething() {
	console.log( something );
}

function invokePrintSomething() {
	var something = 3;
	printSomething();
}

var something = 2;

invokePrintSomething();


