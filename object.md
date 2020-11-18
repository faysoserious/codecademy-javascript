# Javascript

## object

### Intro

Seven fundamental data types in JavaScript:

- the primitive data types: 
- string
- number
- boolean
- null
- undefined
- symbol
- object

### Creating Object Literals

Objects can be assigned to variables just like any JavaScript type. We use curly braces, `{}`, to designate an object literal:

```javascript
let spaceship = {}; 
// spaceship is an empty object

// An object literal with two key-value pairs
let spaceship = {
  'Fuel Type': 'diesel',
  color: 'silver'
};
```

> The spaceship object has two properties `Fuel Type` and `color`. `'Fuel Type'` has quotation marks because it contains a space character.

### Accessing Properties

#### 1. dot notation, `.`

```javascript
let spaceship = {
  homePlanet: 'Earth',
  color: 'silver'
};
spaceship.homePlanet; // Returns 'Earth',
spaceship.color; // Returns 'silver',
```

If we try to access a property that does not exist on that object, `undefined` will be returned.

#### Bracket Notation, `[]`

```javascript
let spaceship = {
  'Fuel Type': 'Turbo Fuel',
  'Active Duty': true,
  homePlanet: 'Earth',
  numCrew: 5
};
spaceship['Active Duty'];   // Returns true
spaceship['Fuel Type'];   // Returns  'Turbo Fuel'
spaceship['numCrew'];   // Returns 5
spaceship['!!!!!!!!!!!!!!!'];   // Returns undefined
```

> must use bracket notation when accessing keys that have numbers, spaces, or special characters in them. Without bracket notation in these situations, our code would throw an error.
> With bracket notation you can also use a variable inside the brackets to select the keys of an object.

### Property Assignment

```javascript
const spaceship = {type: 'shuttle'};
spaceship = {type: 'alien'}; // TypeError: Assignment to constant variable.
spaceship.type = 'alien'; // Changes the value of the type property
spaceship.speed = 'Mach 5'; // Creates a new key of 'speed' with a value of 'Mach 5'
//-------------delete a property----------------
const spaceship = {
  'Fuel Type': 'Turbo Fuel',
  homePlanet: 'Earth',
  mission: 'Explore the universe' 
};

delete spaceship.mission; 
 // Removes the mission property
```

### Method

the data stored on an object is a function we call that a method. A property is what an object has, while a method is what an object does.

```javascript
let retreatMessage = 'We no longer wish to conquer your planet. It is full of dogs, which we do not care for.';

// Write your code below
const alienShip = {
  retreat() {
    console.log(retreatMessage);
  },
  takeOff() {
    console.log('Spim... Borp... Glix... Blastoff!');
  }
};

//invoke methods
alienShip.retreat();
alienShip.takeOff();
```

> use `,` to separate two methods.

### Pass by reference

Objects are passed by reference. This means when we pass a variable assigned to an object into a function as an argument, the computer interprets the parameter name as pointing to the space in memory holding that object. As a result, functions which change object properties actually mutate the object permanently (even when the object is assigned to a const variable).

```javascript
let spaceship = {
  'Fuel Type' : 'Turbo Fuel',
  homePlanet : 'Earth'
};

// Write your code below
let greenEnergy = obj => {
  obj['Fuel Type']= 'avocado oil';
}
let remotelyDisable = objectParam => {
  objectParam.disabled = true;
};

greenEnergy(spaceship);
remotelyDisable(spaceship);
console.log(spaceship);
```

reassignment of the spaceship variable wouldn’t work in the same way:

```javascript
let spaceship = {
  homePlanet : 'Earth',
  color : 'red'
};
let tryReassignment = obj => {
  obj = {
    identified : false, 
    'transport type' : 'flying'
  }
  console.log(obj) // Prints {'identified': false, 'transport type': 'flying'}

};
tryReassignment(spaceship) // The attempt at reassignment does not work.
spaceship // Still returns {homePlanet : 'Earth', color : 'red'};

spaceship = {
  identified : false, 
  'transport type': 'flying'
}; // Regular reassignment still works.
```

### Looping Through Objects

`for`...`in` will execute a given block of code for each property in an object.

```javascript
let spaceship = {
    crew: {
    captain: { 
        name: 'Lily', 
        degree: 'Computer Engineering', 
        cheerTeam() { console.log('You got this!') } 
        },
    'chief officer': { 
        name: 'Dan', 
        degree: 'Aerospace Engineering', 
        agree() { console.log('I agree, captain!') } 
        },
    medic: { 
        name: 'Clementine', 
        degree: 'Physics', 
        announce() { console.log(`Jets on!`) } },
    translator: {
        name: 'Shauna', 
        degree: 'Conservation Science', 
        powerFuel() { console.log('The tank is full!') } 
        }
    }
}; 

// Write your code below
for (let crewMember in spaceship.crew) {
  console.log(`${crewMember}: ${spaceship.crew[crewMember].name}`);
}

for (let member in spaceship.crew) {
  console.log(`${spaceship.crew[member].name}: ${spaceship.crew[member].degree}`);
```

### The `this` keyword

The `this` keyword references the calling object which provides access to the calling object’s properties. 

```javascript
const robot = {
  model: '1E78V2',
  energyLevel: 100,
  provideInfo() {
    return `I am ${this.model} and my current energy level is ${this.energyLevel}.`
  }
};
console.log(robot.provideInfo());
```

the calling object is `robot` and by using `this` we’re accessing the `robot ` object itself, and then the `model` and `energyLevel` property of `robot` by using property dot notation.

#### Arrow Functions and this

> **avoid using arrow functions when using this in a method!**

```javascript
const robot = {
  energyLevel: 100,
  /********avoid!!!!!!!!
  checkEnergy: () => {
    console.log(`Energy is currently at ${this.energyLevel}%.`)
      }*/
  checkEnergy() {
    console.log(`Energy is currently at ${this.energyLevel}%.`)
  }

}

robot.checkEnergy();
```

### privacy

only certain properties should be mutable or able to change in value.  Place an underscore `_` before the name of a property to mean that the **property should not be altered**.

```javascript
const robot = {
  _energyLevel: 'high',
  recharge(){
    this._energyLevel += 30;
    console.log(`Recharged! Energy is currently at ${this._energyLevel}%.`)
  }
};
robot.recharge();
```

### Getters and setters

Getters are methods that get and return the internal properties of an object. 

- Getters can perform an action on the data when getting a property.
- Getters can return different values using conditionals.
- In a getter, we can access the properties of the calling object using this.
- The functionality of our code is easier for other developers to understand.

```javascript
const robot = {
  _model: '1E78V2',
  _energyLevel: 100,
  get energyLevel() {
    if (typeof this._energyLevel === 'number') {
      return `My current energy level is ${this._energyLevel}`;
    } else{
      return 'System malfunction: cannot retrieve energy level';
    };
  }
};

console.log(robot.energyLevel);
```

> using `getter` (and `setter`) methods is that properties cannot share the same name as the `getter`/`setter` function. If we do so, then calling the method will result in an infinite call stack error.
> ***One workaround is to add an underscore before the property name like we did in the example above.***

```javascript
const robot = {
  _model: '1E78V2',
  _energyLevel: 100,
  _numOfSensors: 15,
  get numOfSensors(){
    if(typeof this._numOfSensors === 'number'){
      return this._numOfSensors;
    } else {
      return 'Sensors are currently down.'
    }
  },
  //if need to add or remove some sensors
  set numOfSensors(num){
    if (typeof num === 'number' && num >= 0) {
      this._numOfSensors = num;
    } else {
      console.log('Pass in a number that is greater than or equal to 0');
    }
  }
};
/*use the setter method*/
robot.numOfSensors = 100;
//To check that the setter method worked,
console.log(robot.numOfSensors);
```

### Factory Functions

A factory function is a function that returns an object and can be reused to make multiple object instances. Factory functions can also have parameters allowing us to customize the object that gets returned.

```javascript
const robotFactory = (model, mobile) => {
  return {
    model: model,
    mobile: mobile,
    beep: () => {
      console.log('Beep Boop')
    }
  }
};
const tinCan = robotFactory('P-500', true);
tinCan.beep();
console.log(tinCan.model);
console.log(tinCan.mobile);
```

### destructuring technique

save some keystrokes

#### Property Value Shorthand

```javascript
function robotFactory(model, mobile){
  return {
//Use the property value shorthand and
//refactor the factory function
    model,
    mobile,
    beep() {
      console.log('Beep Boop');
    }
  }
}

// To check that the property value
// shorthand technique worked:
const newRobot = robotFactory('P-501', false)
console.log(newRobot.model)
console.log(newRobot.mobile)
```

#### Destructured Assignment

extract key-value pairs from objects and save them as variables.

```javascript
const robot = {
  model: '1E78V2',
  energyLevel: 100,
  functionality: {
    beep() {
      console.log('Beep Boop');
    },
    fireLaser() {
      console.log('Pew Pew');
    },
  }
};
// extract the functionality property as
// a variable
const {functionality} = robot;
/*
functionality as the object that was
 pulled out of robot.functionality. To
call .beep(), use dot notation with 
the name of the method and a set of parentheses:
*/
functionality.beep();
```

### Built-in Object Methods

```javascript
const robot = {
	model: 'SAL-1000',
  mobile: true,
  sentient: false,
  armor: 'Steel-plated',
  energyLevel: 75
};

/*objet.keys()grab the property names,
otherwise known as keys, and save the keys 
in an array which is assigned to robotKeys*/
const robotKeys = Object.keys(robot);
/*
Object.entries() will also return an array, 
but the array will contain more arrays that have
both the key and value of the properties 
in an object.
*/
const robotEntries = Object.entries(robot);

/*
another object that has the properties of robot 
but with a few additional properties.
*/
const newRobot = Object.assign({laserBlaster: true, voiceRecognition: true}, robot);

console.log(newRobot);
```

### Project Meal Maker

```javascript
const menu = {
  _courses: {
    appetizers: [],
    mains: [],
    desserts: []
  },
  get courses() {
    return{
      appetizers: this.appetizers,
      mains: this.mains,
      desserts: this.desserts
    };
  },
  get appetizers(){
    return this._courses.appetizers;
  },
  set appetizers(appetizerIn) {
    this._courses.appetizers =appetizerIn;
  },
  get mains(){
    return this._courses.main;
  },
  set mains(mainIn) {
    this._courses.mains =mainIn;
  },
  get desserts(){
    return this._courses.desserts;
  },
  set desserts(dessertIn) {
    this._courses.desserts =dessertIn;
  },
  addDishToCourse (courseName, dishName, dishPrice) {
     const dish = {
       name: dishName,
       price: dishPrice
     };
     this._courses[courseName].push(dish);
  },
  getRandomDishFromCourse: function(courseName) {
    const dishes = this._courses[courseName];
    const randomIndex = Math.floor(Math.random() * dishes.length);
    return dishes[randomIndex];

  },
  generateRandomMeal: function() {
    const appetizer = this.getRandomDishFromCourse('appetizers');
    const mains = this.getRandomDishFromCourse('mains');
    const desserts = this.getRandomDishFromCourse('desserts');
    const totalPrice = appetizer.price + mains.price + desserts.price;
    return `Your meal is ${appetizer.name}, ${mains.name}, ${desserts.price}. The total price is ${totalPrice}`;
  }
}

menu.addDishToCourse('appetizers','a1', 1);
menu.addDishToCourse('appetizers','a2', 2);
menu.addDishToCourse('appetizers','a3', 3);
menu.addDishToCourse('mains','m1', 4);
menu.addDishToCourse('mains','m2', 5);
menu.addDishToCourse('mains','m3', 6);
menu.addDishToCourse('desserts','d1', 7);
menu.addDishToCourse('desserts','d2', 8);
menu.addDishToCourse('desserts','d3', 9);
let meal = menu.generateRandomMeal();
console.log(meal);
```

### Project 2 Team stats

```javascript
const team = {
  _players:[
    {
      firstName: 'Lukas',
      lastName: 'Podolski',
      age: 35
    },
    {
      firstName: 'Mario',
      lastName: 'Gómez',
      age: 35
    },
    {
      firstName: 'Bastian',
      lastName: 'Schweinsteiger',
      age: 36
    }
  ],
  _games: [
    {
      opponent: 'Argentina',
      teamPoints: 1,
      opponentPoints: 0
    },
    {
      opponent: 'Brazil',
      teamPoints: 7,
      opponentPoints: 1
    },
    {
      opponent: 'France',
      teamPoints: 1,
      opponentPoints: 0
    }
  ],
  get players() {
    return this._players;
  },
  get games() {
    return this._games;
  },
  addPlayer(firstName, lastName, age) {
    let player = {
      firstName: firstName,
      lastName: lastName,
      age: age
    };
    this._players.push(player);
  },
  addGame(opponent, teamPoints, opponentPoints){
    let game = {
      opponent: opponent,
      teamPoints: teamPoints,
      opponentPoints: opponentPoints
    };
    this._games.push(game);
  }
};

team.addPlayer('Miroslav', 'Klose', 42);
team.addPlayer('Manuel', 'Neuer', 42);
team.addPlayer('Philipp', 'Lahm', 42);
team.addGame('Algeria', 2, 1);
team.addGame('USA', 0, 1);
team.addGame('Ghana', 2, 2);
console.log(team._players);
console.log(team._games);
```

## Iterators

### Functions as data

JavaScript unctions are first class objects. This means that, like other objects you’ve encountered, JavaScript functions can have properties and methods.

```javascript
const checkThatTwoPlusTwoEqualsFourAMillionTimes = () => {
  for(let i = 1; i <= 1000000; i++) {
    if ( (2 + 2) != 4) {
      console.log('Something has gone very wrong :( ');
    }
  }
}

// re-assign the function to a variable with a suitably short name:
const is2p2 = checkThatTwoPlusTwoEqualsFourAMillionTimes;
is2p2();
console.log(is2p2.name);
```

### Function as parameters

A higher-order function is a function that either accepts functions as parameters, returns a function, or both.

```javascript
const timeFuncRuntime = funcParameter => {
  let t1 = Date.now();
  funcParameter();
  let t2 = Date.now();
  return t2 - t1;
};

// Write your code below

const time2p2 = timeFuncRuntime(checkThatTwoPlusTwoEqualsFourAMillionTimes);
const checkConsistentOutput = (func, val) => {
  let firstTry = func(val);
  let secondTry = func(val);
  if (firstTry === secondTry) {
    return firstTry;
  } else {
    return 'This function returned inconsistent results';
  }
};
console.log(checkConsistentOutput(addTwo,28));
```

> We wrote a higher-order function, timeFuncRuntime(). It takes in a function as an argument, saves a starting time, invokes the callback function, records the time after the function was called, and returns the time the function took to run by subtracting the starting time from the ending time.

## Javascript Error types

7 types in total, among those there are three common types:

1. SyntaxError: This error will be thrown when a typo creates invalid code — code that cannot be interpreted by the compiler. When this error is thrown, scan your code to make sure you properly opened and closed all brackets, braces, and parentheses and that you didn’t include any invalid semicolons.
2. ReferenceError: This error will be thrown if you try to use a variable that does not exist. When this error is thrown, make sure all variables are properly declared.
1. TypeError: This error will be thrown if you attempt to perform an operation on a value of the wrong type. For example, if we tried to use a string method on a number, it would throw a TypeError.

### Debugging process

1. Run your code. Using the first error’s stack trace, identify the error’s type, description, and location.
1. Go to the file name and line number indicated by the error stack trace. Using the error type and description, identify the bug in your code.
1. Fix the bug and re-run your code.
1. Repeat steps 1-3 until your code no longer throws any errors.

### Locating Silent Bugs

Make good use of `console.log()` !

1. Go to the beginning of the malfunctioning code. Print out all starting variables, existing values, and arguments using `console.log()`. If the values are what you expect, move on to the next piece of logic in the code. If not, you have identified a bug and should skip to step 3.
1. After the next piece of logic in your code, add `console.log()` statements to ensure updated variables have the values that you now expect and that the block of code is being executed. If that logic is executing properly, continue repeating this step until you find a line not working as expected, then move to step 3.
1. Fix the identified bug and run your code again. If it now works as expected, you’ve finished debugging! If not, continue stepping through your code using step 2 until it does.

## Class

### Constructor

creates a new instance of a class.

```javascript
class Surgeon {
  constructor(name, department) {
    this.name = name;
    this.department = department;
  }
}
```

### Instance

An object that contains the property names and methods of a class, but with unique property values.

```javascript
class Surgeon {
  constructor(name, department) {
    this.name = name;
    this.department = department;
  }
}
const surgeonCurry = new Surgeon('Curry', 'Cardiovascular');
const surgeonDurant = new Surgeon('Durant', 'Orthopedics');
console.log(surgeonDurant.department);
```