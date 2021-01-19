import '../styles/styles.css'
import Person from './modules/Person'

if (module.hot) {
  module.hot.accept()
}


/*Lesson example code below this line */

class Adult extends Person {
  payTaxes() {
    console.log(`${this.name} now owes zero taxes`)
  }
}

var john = new Person("John","purple");
var jane = new Adult('Jane', 'green');

john.greet();
jane.payTaxes();

