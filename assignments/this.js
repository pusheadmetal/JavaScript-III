/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window Binding - "this" is bound to the global/window scope.
* 2. Implicit Binding - "this" is bound to the object preceeding the ".".
* 3. New Binding - "this" is bound to the object created by the "new" keyword.
* 4. Explicit Binding - "this" is bound to the object using .call and .apply.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

function example1(){
    document.writeln(this);
    return 0;
}example1(); //[object Window]

// Principle 2

// code example for Implicit Binding

const example2 = {
    phrase: "I'm example2!",
    hello(){
        document.writeln(this.phrase)
    },
    child: {
        phrase: "I'm example2's child!",
        hello(){
            document.writeln(this.phrase)
        }
    }
}

example2.hello(); //prints "I'm example2!"
example2.child.hello(); //prints "I'm example2's child!"

// Principle 3

// code example for New Binding

function Factory (name, age, favoriteFood){

    function describeMe(){
        this.name = name;
        this.age = age;
        this.favoriteFood = favoriteFood;
        document.writeln(`My name is ${this.name}, I'm ${this.age} years old and I love ${this.favoriteFood}!`);
    }describeMe();
}

const person1 = new Factory("Mike", 32, "Reuben Sandwiches");

// Principle 4

// code example for Explicit Binding

function sayHello(){
    if (this === rocky){
        document.writeln(`Ey yo! I'm ${this.name}! They call me ${this.title}!`);
    }
    if (this === plissken){
        document.writeln(`The name's ${this.name}. Call me ${this.title}.`);
    }
}

const rocky = {
    name: "Rocky Balboa",
    title: "The Italian Stallion"
}

const plissken = {
    name: "Plissken",
    title: "Snake"
}

sayHello.call(rocky); //Gives Rocky's info to writeln
sayHello.call(plissken); //Gives Snake's info to writeln