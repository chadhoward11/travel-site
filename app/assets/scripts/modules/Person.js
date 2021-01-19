/* standard blueprint syntax - called a constructor

function Person(name, color) {
  this.name = name;
  this.color = color;
  this.greet = function() {
    console.log(`My name is ${this.name} and my fav color is ${this.color}.`);
  }
}
export default Person

*/




//class 'syntax' - not a true class, but useful if you're familiar with classes
class Person {
  constructor (name, color) {
    this.name = name;
    this.color = color;
  }
  greet(){
    console.log(`My name is ${this.name} and my fav color is ${this.color}.`);
  }
}

export default Person