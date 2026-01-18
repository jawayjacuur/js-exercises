  const people = [
    {name: "mohamed", age: 25, city: "mogdisho"},
     {name: "hassan", age: 25, city: "hargeysa"},
     {name: "abdi", age: 25, city: "kismayo"} ];
 console.log ("properties and values of each person:");
  console.log ("---")

 for(const person of people){
 for (const key in person) {
        console.log (key + ":" + person [key]);
    
 }
  console.log ("---")

}





