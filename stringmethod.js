// let sub = 'webTech'
// console.log(sub);

// console.log(sub.toUpperCase());    // It will convert our data in upper format

// let Sub = 'WEBTCEH'
// console.log(Sub);

// console.log(Sub.toLocaleLowerCase());   // It will convert our data in lowercase formar

// let wish = 'Happy Birthday'
// console.log(wish);

// console.log(wish.substring(4));
// console.log(wish.substring(6,10));

// let Twister = 'Chandu ke chacha ne Chandu ke'
// console.log(Twister);                                // Twister will change that specific word

// console.log(Twister.replace('Chandu','Bandu'));      // Replace will replace only one word
// console.log(Twister.replaceAll('Chandu','Bandu'));   // ReplaceAll will replace all similar word

// let Msg = "I will grow very soon"
// console.log(Msg);

// console.log(Msg.repeat(50));         // It will repeat our data




// Math Method  

// console.log((Math.round(3.7)));
// console.log(Math.ceil(3.1));
// console.log(Math.floor(3.5));
// console.log(Math.trunc(3.5));
// console.log(Math.pow(12,4));
// console.log(Math.cbrt(36));
// console.log(Math.sqrt(25));
// console.log(Math.min(56,38,38,2));
// console.log(Math.max(29,29,30));
// console.log(Math.random()* 1000 + 1000);
// console.log(Math.floor(Math.random()* 1000 + 1000));



// Date Method 

// let tarikh = new Date()
// console.log(tarikh);

// console.log(tarikh.getDate);
// console.log(tarikh.getMonth);
// console.log(tarikh.getDay);
// console.log(tarikh.getMinutes);
// console.log(tarikh.getMilliseconds);

// let setdate = new Date("Feb 14 2027")
// console.log(setdate);


// let nextYear = new Date("Jan 1 2027").getTime()
// console.log(nextYear);

// function countDown() {
//     let nowDate = new Date().getTime()
//     let diffDate = nextYear - nowDate
//     // console.log(diffDate);

//     let days = Math.floor(diffDate/(1000*60*60*24))
//     console.log(days);

//     document.getElementById("days").innerHTML = days

//     let hours = Math.floor(diffDate % (1000*60*60*24)/(1000*60*60))
//     console.log(hours);

//     let min = Math.floor(diffDate % (1000*60*60)/(1000*60))
//     console.log(min);

//     document.getElementById("hours").innerHTML = hours
    
    
// }

// countDown()




document.getElementById("grandparent").addEventListener("click",()=>{
    console.log("Grand Parent clicked");
    
})

document.getElementById("parent").addEventListener("click",(event)=>{
    console.log(" Parent clicked");
    event.stopPropagation()
})

document.getElementById("child").addEventListener("click",()=>{
    console.log(" child clicked");
    
})


console.log(location);
console.log(navigator);
console.log(screen);





// localStorage.setItem("Uername1","Vineet")
// localStorage.setItem("Username2","Chopane")
// localStorage.setItem("Username3","Rajkumar")
// localStorage.setItem("Username4",'janhvai')


localStorage.removeItem("Username1")
let user = localStorage.getItem("Username")
console.log(user);

let btn = document.getElementById("btn")
btn.addEventListener("click",()=>{
    let username = document.getElementById("input").value
    localStorage.setItem("Username",username)
})

 

let input1 = document.getElementById("input1")
let submit = document.getElementById("submit")

// localStorage.setItem("Username5","OKKKKKKK")
// localStorage.setItem("Username6","OKK")

let user1 = localStorage.getItem("Username5")
console.log(user1);

submit.addEventListener("click",()=>{
    let username9 = document.getElementById("input1").value
    localStorage.setItem("Username9",username9)
})

let user2 = localStorage.getItem("Username9")
console.log(user2);


let input2 = document.getElementById("input2")
let sub = document.getElementById("sub")




