// classes 

class Animal{
    constructor(name, legs, speaks){
        this.name = name;
        this.legs = legs;
        this.speaks = speaks;
    }
    describe(){
        return `The animal ${this.name} has ${this.legs} legs and makes noise ${this.speaks}`
    }
    // static functions are associated with the class itself
    static myType(){
        console.log("Is an animal for sure!!");
    }
}

let dog = new Animal("Dog", 4, "Bhaw Bhaw");
console.log(dog.describe());
Animal.myType();