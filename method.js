let Movies = ["Dhurandhar","Toxic"]
console.log(Movies);


Movies.push("krrish")    // Push will add movie name at last index
console.log(Movies);
Movies.push("Padmavat","Panipat")
console.log(Movies);

Movies.pop()
Movies.pop("Panipat")               // If we write anything anu movie name it will remove last index movie
console.log(Movies);

Movies.unshift("Kgf")       // Unshift will add movie name at starting position 
console.log(Movies);

Movies.shift()             // Shift will remove moveie name from starting position
console.log(Movies);

let allMovies = ["Ghost","Karanarjun","Sholay","Kakan","Sairat","Fandry","Salaar","Kantara"]
console.log(allMovies);

let marathimovies = allMovies.slice(3,6)
console.log("marathimovies",marathimovies);
console.log("allMovies",allMovies);

// add, remove, repalace, whichever index value 
// splice (starting index, delete count(n), items to be added)

let stud = ["Anushka","Kiran","Rahul","Priya"]
console.log(stud);

// Replacement of array element
stud.splice(2,1,"Anjali")
console.log(stud);

// adding the array element
stud.splice(0,0,"devdad","paro")
console.log(stud);

// deleting the array element
stud.splice(3,3)
console.log(stud);




let subject = ["HTML","CSS","JS","REACT"]
console.log(subject);

console.log(subject.indexOf("JS"));    // IndexOf will tell exactly index value of array element
console.log(subject.indexOf("REACT"));


console.log(subject.includes("HTML"));    // Includes will  check array element and give  boolean vlaue true of false
console.log(subject.includes("css"));

let actor = ["Ranbir","Vraun","Vicky","Dhanush","Mammotthy"]
console.log(actor);

let favNum = [11, 7, 12, 78, 14, 28]
console.log(favNum);

console.log(actor.sort());           // It will sort the array element on the basis of first  alphabhet
console.log(favNum.sort());

console.log(actor.reverse());          // It will reverse array element

let newArr = actor.concat(favNum,subject)
console.log(newArr);

let numbers = [10 ,20, 30, 40, 50, 60]
console.log(numbers);

































