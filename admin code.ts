import { Person } from "./Classs";
/*class Person{
    private lastname : string;
    private firstname: string;

    constructor(firstname:string,lastname:string)

    {
this.firstname=firstname;
this.lastname=lastname;

    }*/



class Admin extends Person{}
class Manager extends Person{}

let admin = new Admin("Syed","Kabir");

admin.getname();
