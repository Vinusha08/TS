"use strict";
exports.__esModule = true;
exports.Person = void 0;
var Person = /** @class */ (function () {
    function Person(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    Person.prototype.getname = function () {
        return this.firstName;
        +this.lastName;
    };
    return Person;
}());
exports.Person = Person;
/*var objectPerson = new Person();
objectPerson.firstName ="Kabir";
console.log(objectPerson.firstName);
console.log("sakdjlksaj");*/ 
