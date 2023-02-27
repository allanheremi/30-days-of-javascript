/* ----------------- Start of level one ----------------- */

class Animal {
constructor(name, age, color, legs){
this.name = name;
this.age = age;
this.color = color;
this.legs = legs;

}

eat(food) {
    console.log(`${this.name} is eating ${food}`)
}
}

//  2.

const myAnimal = new Animal ("ziggy", 3, "blue", 4)

myAnimal.eat("milk")

const myDog = new Animal ("Zoggy", 5, "black", 3)

myDog.eat("food")

const myCat = new Animal ("Elsa", 7, "black", 4)

myCat.eat("everything in the world")

/* ----------------- End of level one ----------------- */

/* ----------------- Start of level two ----------------- */

// 1.

class Cat extends Animal {
    constructor(name, age, color, legs) {
      super(name, age, color, legs);
    }
  
    eat(food) {
      console.log(`${this.name} is eating ${food} like a cat.`);
    }
  }
  

  const myCat2 = new Cat("Fluffy", 3, "brown", 4);

myCat.eat("fish");

/* ----------------- End of level two ----------------- */
