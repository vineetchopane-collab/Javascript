// function printMsg(data,NextData) {
//     setTimeout(()=>{
//         console.log("Hello" + data);
//         if (NextData) {
//             NextData()
//         }
//     },1000);
// }

// printMsg("vineet",()=>{
//     printMsg("Munni",()=>{
//         printMsg("slaman",()=>{
//         printMsg("srk",()=>{
//             printMsg("amir")
//         })
//         })
//     })
// })

let task = new Promise((resolve,reject)=>{
    let status = "online"        // Because online is value 
    if (status){                  
        resolve("Im online")       // resolve function is called 
    }
    else{
        reject("Im offline")
    }
})

task.then(()=>{                   // So .them() funcation will runs  // then will run when  resolve function will get called 
    console.log("Im online");
})

task.catch(()=>{                  // catch will run when rejct function get called 
    console.log("Im offline");
})



// Promise Chaining // 

function printNames(name, time) {
    return new Promise((resolve, reject) => {                  // Here we will not store in varibale because we cannot use that output

        if (name === "") {
            reject("Name is required");
            return;
        }

        setTimeout(() => {
            console.log("Hello " + name);
            resolve();
        }, time);

    });
}


// Print Changing

// printNames("Chopane").then(()=>{
//     printNames("Raju").then(()=>{                      So instead of this we will use async await
//         printNames("jaya")
//     })
// })

async function getData() {
    await printNames("Lenovo",2000)
    await printNames("Yoga",2000)
    await printNames("Laptop",2000)
    await printNames(34,2000)
}

getData()



