const person = {

    firstName: "Bro",
    lastName: "Code",
    language: "en",

    get name() 
    {
        return this.firstName+" "+this.lastName;
    }
};

console.log(person.name);