//  Object types of string,number,boolean
var user = {
    fName: "Amber",
    lNname: "Fayyaz",
    age: 40,
    isActivate: true,
    email: "abc@gmail.com",
    hobbies: ["cricket", "football", "gaming"],
    salary: function () { return 20000; },
    city: "karachi",
    country: "pakistan",
    office: {
        address: "abc test",
        name: "xyz",
    }
};
//console.log(user.hobbies[2])
//console.log(user.salary())
//console.log(user.office.name)
for (var key in user) {
    console.log(key);
}
//  Array 
//let names: string[] = ['a','b','c','d','e','f','g'];
//let arr = [1 ,2, 3, 4, 5, 6];
//let names2 = ['a','b','c','d','e','f','g',1,2,3,false,true, {name: 'a'}];
//console.log('names2 2' , names2[8]);
//let marks = [97,88,60,100];
//console.log(marks)
//console.log(marks[1] = 55)
//console.log(marks.length)
//for loop
//let names: string[] = ["ayesha","ali","raza","hira","kiran","haider"];
//for( let i=0; i < names.length; i++ ){
// console.log(names[i]);
//}
//for of loop
//for(let name of names){
// console.log(name);
// console.log(name.toUpperCase())
//}
//let marks = [85,97,44,37,76,60];
//let sum =0;
//for(let val of marks){
// sum +=val;
//}
//console.log(sum)
//let avg = sum / marks.length;
//console.log(`avg marks of the class = ${avg}`); 
//   for each loop
//let arr = [1,2,3,4,5,6];
//arr.forEach(function printVal(val){
// console.log(val)
//});
//  Array Methods
//let foodItems: string[] = ["potato","apple","lichi","tomato"];
//foodItems.push("chips");
//console.log(foodItems)
//console.log(foodItems.push("chips"));
//foodItems.pop();
//console.log(foodItems)
//console.log(foodItems.toString());
//let courses1: string[] = ["ai","web3","metaverse"];
//let courses2: string[] = ["graphic","videoanimation"];
//console.log(courses1 +" "+courses2);
//let names: string[] = ['fiza','muskan','hina','kiran'];
//names.unshift("ali");
//names.shift();
//console.log(names)
//console.log(names.slice(1,2))
//console.log(names.splice(2,2,))
