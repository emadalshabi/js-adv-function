// function checkAge(age) {
//     if (age > 18) {
//       return true;
//     } else {
//       return confirm('Do you have your parents permission to access this page?');
//     }
//   }
//   checkAge(18)


//   Rewrite it, to perform the same, but without if...else, and use the arrow function.


  const checkAge = age => age > 18 ? true : confirm('Do you have your parents permission to access this page?');
  checkAge(18)



// 2


const pow = (x, n) => n === 1 ? x : x * pow(x, n - 1);
console.log(pow(3, 2));


// 3

const ask = (question, yes, no) => confirm(question) ? yes() : no();

ask(
  "Do you agree?",
  () => alert("You agreed."),
  () => alert("You canceled the execution.")
);


// 4


let calculator = {
    read() {
      this.a = +prompt('Enter the first value:', 0);
      this.b = +prompt('Enter the second value:', 0);
    },
    sum() {
      return this.a + this.b;
    },
    mul() {
      return this.a * this.b;
    }
  };
  
  calculator.read();
  alert( calculator.sum() );
  alert( calculator.mul() );



  
// 5

const min = (a, b) => (a < b) ? a : b;
console.log(1,2);