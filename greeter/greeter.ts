class Student {
    fullName: string;

    constructor(public firstName: string, public middleInitial: string, public lastName: string) {
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
}
//Didn't see any relations between Student and Person,
//how could we put the user(instance of Student) as a argument of greeter(person:Person)?
interface Person {
    firstName: string;
    lastName: string;
}

function greeter(person: Person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}

let user =new Student("Jane","M","May");
document.body.textContent = greeter(user);