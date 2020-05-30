const promise1 = new Promise((resolve, reject) => {
    setTimeout(resolve, 100, 'foo1');
  });
const promise2 = new Promise((resolve, reject) => {
  setTimeout(reject, 200, 'foo2');
});

Promise.all([promise1, promise2]).then(
    (values) => {
        console.log(values);
    }, 
    (error) => {
        console.log(error);
    }
);




