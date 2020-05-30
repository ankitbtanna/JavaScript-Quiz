let printAllNumbers = () => {
    console.log(arguments);
  };
  
  function printAllNumbersNew() {
    console.log(arguments);
  };
  
  printAllNumbers(1, 2, 3);
  printAllNumbersNew(1, 2, 3);


  