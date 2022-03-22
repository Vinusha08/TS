import { createSpreadAssignment } from "typescript";

var data : number;
data = 20;

var abc: number;
abc = 10;
//abc = " helo0";

var foodItem : String[];
foodItem= ["pizza"," sandwich"];
console.log(foodItem);
foodItem.push("Parota");
foodItem.push("Noodles");
foodItem.pop();
function sub(a: number, b:number)
{
    return a-b;
}
function add(a: number, b:number)
{
    return a+b;
}
function subtraction(a,b,c ?){
    return a-b;
}
function subDefaultValue(a,b,c)

{
return a-b-c;
}
var k=subtraction(3,4,6);
console.log(k);
var t=sub(98,3);
console.log(t);
var y=subDefaultValue(43,5,"hello");
function addNum(a:number ,b:number ,c=0)  :number{
    return a+b+c;
}
var k1=addNum(23,43,5);
console.log(k1);
var myArray:[number , boolean];
myArray=[3,true];
console.log(myArray);
myArray=[3,"sdasd"];
console.log(myArray);
myArray=[1];
console.log(myArray);

