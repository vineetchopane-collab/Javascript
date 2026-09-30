// function task(v1,v2) {
//     let result = v1+v2
//     console.log(result);
//     function task2(s1,s2) {
//         console.log(s1*s2);
//         let msg = "Im child function"
//         console.log(msg);
        
        
//     }
//      task2(result,21)
// }

// task(34,56)


let Name = "vineet"
console.log(Name);
var place = "latur"
console.log(place);



 function printMsg() {
    console.log("Please vote for"+Name);
    console.log(place);
 }
      
 printMsg()
console.log(Name);
// console.log(Name2);
console.log(place);




// let Name5 = "rajat"
// console.log(Name5);

//      var place = "shirur"
//      console.log(place);
     

//      function msg() {
//                     console.log("Please vote for"+Name5);
//                     console.log(place);
// }

// msg()
// console.log(Name5);
// console.log(place);


     












// function printmsg() {
//                            let Name4 = "janu"
//                            console.log(Name4);
                            
//                             console.log("please vote for"+Name);
 
//                             let Name2 = "vinee"
//                             console.log("Dont vote for"+Name2); 
                            
//                     var jaga2 ="latur"
//                     Name = "viiii"
//                     console.log(Name);
//                     console.log(jaga2);
                    
                            
// }

// printmsg()
// console.log(Name);
// console.log(place);



// Block Scope

if (true) {
               let Place = "Pune"
               console.log(Place);
               
}

else {
       console.log("Hello");
}


// // Window Object

// var Msg ="plz vote"
// let Msg2 = "Dont vote"

// console.log(window.Msg);
// console.log(window.Msg2);

// function Task (Name) {
//                             console.log("Hello"+Name);
                            
// }

// Task("VIneet")
// Task("okkkkk")


// // Higher order function 
// setTimeout (()=>{
//                        document.writeln("Holiday")
// }, 3000)

// document.writeln("NO hOliday")




function home() {
       let Name = "Shidhu"
       console.log("Pleaae help" + Name);
       console.log(place);

       let Name2 = "viny"
       console.log("Dont help" + Name2);    
}

home()