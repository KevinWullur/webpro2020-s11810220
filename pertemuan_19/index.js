console.log("JavaScript Class & OOP");

//class & constructor

//const person = {
//    firstname : "kevin",
//    lastname: "wullur",
//    displayfullname: function(){
//        console.log('${this.firstname}${this.lastname');
//    },
//};

//person.displayFullname();

class person{
    constructor(firstname, lastname){
        this.firstname = firstname;
        this.lastname = lastname;
    }
    displayfullname(){
        console.log(`${this.firstname} ${this.lastname}`);
    }
}

//const person1 = new person("kevin", "wullur");
//console.log(person1);
//person1.displayfullname();
//const person2 = new person("Rikho", "joseph");
//person2.displayfullname();

//inheritance
class student extends person{
    constructor(firstname, lastname, NIM, age){
        super(firstname, lastname);
        this.NIM = NIM;
        this.age = age;
    }

    //static member
    static sayHello(){
        console.log('Hello world');
    }

    displayNIM(){
        console.log(`your NIM is ${this.NIM}`);
    }

    //setter dan getter
    set studentScore(score){
        this.score = score;
    }

    get studentScore(){
        return this.score;
    }
}

const rikho = new student("rikho", "joseph", "112233");
rikho.displayfullname();
rikho.displayNIM();
student.sayHello();

rikho.studentScore = 90;
console.log(rikho.studentScore);

