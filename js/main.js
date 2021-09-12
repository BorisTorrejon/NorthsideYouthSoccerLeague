/*ejercicio 1)*/
var myName;
myName="Boris Torrejon";
console.log(myName);
/*ejercicio 2)*/
var age;
age=31;
console.log(age);
/*ejercicio 3)*/
var ignasiAge;
ignasiAge=32;
var ageDiff;
ageDiff= age - ignasiAge;
console.log(ageDiff);
/*Ejercicio 4)*/
var text;
if (age>21) {
    text="You are older than 21";
} else {
    text="You are not older than 21";
};
console.log(text);
/*Ejercicio 5)*/
if (age>ignasiAge) 
{
    text="Ignasi is younger than you";
} 
else 
{
    if (age==ignasiAge) 
    {
        text="You have the same age as Ignasi";
    } 
    else 
    {
        text= "Ignasi is older than you";
    }
};
console.log(text);