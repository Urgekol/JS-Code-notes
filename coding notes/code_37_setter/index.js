const person = {
    firstName: "John",
    lastName: "Doe",
    language: "",


    set lang(lang) 
    {
      this.language = lang;
    }
};
  
// Set an object property using a setter:
person.lang = "en";
  
console.log(person.language);