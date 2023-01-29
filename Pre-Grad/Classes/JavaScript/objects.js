// Class => It is a representation of various data types coming together and 

class NoteBooks{
    // Constructor is the function automatically called whenever a class is used
    constructor(pageNo){
        // this => keyword points to the current allocation of memory
        this.pageNo = pageNo;
    }
}

const Natraj = new NoteBooks(100); // New => allocates new memory / Unused memory
// Natraj => 100-120 memory => this keyword for Natraj will point to the memory allocation of Natraj
const Classmate = new NoteBooks(200);
// Classmate => 130-150 memory => this keyword for Natraj will point to the memory allocation of Classmate

console.log(Natraj.pageNo); // return => 100

Natraj.pageNo = 200;
console.log(Natraj.pageNo); // return => 200


// Natraj and Classmate are the real-life representation of Notebook => Object
// Classes provides a template for the objects

// In JavaScript we can directly use object notations
// JSON => JavaScript object Notations => set / collections of key value pairs
const person = {
    "key":"value",
    "key1": "value1"
}

person.key = "2";
console.log(person.key)