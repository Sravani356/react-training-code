interface IPerson {
    firstName: string,
    lastName: string,
    sayHi: ()=>string; //only method signature
}

var customer: IPerson = {
    firstName: "Tom",
    lastName: "Hanks",
    sayHi: (): string => {return "Hi there"}
}
console.log("Customer Object ")
console.log(customer.firstName);
console.log(customer.lastName);
console.log(customer.sayHi());

var employee:IPerson = {
    firstName: "Jim",
    lastName: "blakes",
    sayHi: ():string => {return "Hello!!!"}
}

console.log("Employee Object");
console.log(employee.firstName);
console.log(employee.lastName);




