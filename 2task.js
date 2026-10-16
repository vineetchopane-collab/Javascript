let form = document.getElementById("form")
let User = document.getElementById("un")
let pass = document.getElementById("pass")

form.addEventListener("submit",(event)=>{               // Here we give submit because click will not work   DF between click and submit Input we have to not use is place of submit
    event.preventDefault()           // It will stop or prevent the default nature of browser 
    // console.log(event);
    // console.log(User.value);     // This method user to access the input field value to perform dynamic operations 
    // console.log(pass.value);
    var info = {
        Username : User.value,
        Password : pass.value
    }

    console.log(info);
    

// document.getElementById("content").innerHTML = User.value

})

// let task2 = document.getElementById("task2")

let resetbtn = document.getElementById("reset")
resetbtn.addEventListener("reset",(event)=>{
    console.log(event);k
})

let vineet = document.getElementById("un")
vineet.addEventListener("focus",()=>{
    vineet.style.backgroundColor = 'purple'

    setTimeout(
        ()=>{ document.getElementById("task2").innerHTML = "Enter Valid Username" 

        },1000
    )   
})

vineet.addEventListener("blur",()=>{
    vineet.style.backgroundColor = 'white'
})




