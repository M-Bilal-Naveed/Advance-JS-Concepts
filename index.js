const person = {
  name: "Ali",
  age: 22
};

const name = person.name;
const age = person.age;

console.log(name);
console.log(age);

// closures
function createCounter() {
  let count = 0;

  return function () {
    count++;
    return count;
  };
}

const counter = createCounter();

console.log(counter());
console.log(counter());
console.log(counter());

//Debounce
function debounce(func, delay) {
  let timer;

  return function () {
    clearTimeout(timer); // Cancel previous timer

    timer = setTimeout(() => {
      func();
    }, delay);
  };
}

function search() {
  console.log("Searching...");
}

const debounceSearch = debounce(search, 1000);

debounceSearch();
debounceSearch();
debounceSearch();

// Memorization
function memoize(fn) {
  const cache = {};

  return function (num) {
    if (cache[num]) {
      console.log("From cache");
      return cache[num];
    }

    console.log("Calculated");
    const result = fn(num);
    cache[num] = result;
    return result;
  };
}

function square(n) {
  return n * n;
}

const memoizedSquare = memoize(square);

console.log(memoizedSquare(5));
console.log(memoizedSquare(5));
console.log(memoizedSquare(6));

// this
const perso = {
  name: "Ali",

  greet() {
    console.log(this.name);
  }
};

perso.greet();

// apply
function introduce(city, country) {
  console.log(this.name + " lives in " + city + ", " + country);
}

const pers = {
  name: "Ali"
};

introduce.apply(pers, ["Lahore", "Pakistan"]);

//call
function introduce(city) {
  console.log(this.name + " lives in " + city);
}

const people = {
  name: "Ali"
};

introduce.call(people, "Lahore");

// bind
function greet() {
  console.log("Hello " + this.name);
}

const per = {
  name: "Ali"
};

const greetAli = greet.bind(per);

greetAli();

// Prototype
function Person(name) {
  this.name = name;
}

// Add a method to the prototype
Person.prototype.sayHello = function () {
  console.log("Hello, my name is " + this.name);
};

const p1 = new Person("Ali");
const p2 = new Person("Ahmed");

p1.sayHello(); // Hello, my name is Ali
p2.sayHello(); // Hello, my name is Ahmed

// ES^ Class

class People {
  constructor(name) {
    this.name = name;
  }

  sayHello() {
    console.log("Hello, my name is " + this.name);
  }
}

const p1 = new People("Ali");
p1.sayHello();

// try catch
try {
  let num = 10;
  console.log(num.toUpperCase()); // Error
} catch (error) {
  console.log("Something went wrong!");
}

// throw
function checkAge(age) {
  if (age < 18) {
    throw new Error("You must be at least 18 years old.");
  }

  console.log("Access granted!");
}

try {
  checkAge(16);
} catch (error) {
  console.log(error.message);
}

//pure function
function add(a, b) {
  return a + b;
}

console.log(add(2, 3)); // 5
console.log(add(2, 3)); // 5

//immutable
const numbers = [1, 2, 3];

const newNumbers = [...numbers, 4];

console.log(numbers);    // [1, 2, 3]
console.log(newNumbers); // [1, 2, 3, 4]

// curring
function multiply(a) {
  return function (b) {
    return a * b;
  };
}

const double = multiply(2);

console.log(double(5)); // 10