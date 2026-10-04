
// Id will target only first html element 

let head9 = document.getElementById("boy")
console.log(head9);
// head.style.color = "red"

let birds = document.getElementsByClassName("birds")
console.log(birds);

birds[1].style.color = 'blue'
birds[2].style.color ='yellow'

let greet = document.getElementsByTagName("h3")
console.log(greet);

greet[1].style.color = 'pink'  


let h3 = document.querySelectorAll(".select")
console.log(h3);
h3[2].style.color = "red"

// Here orange will go to all html elements because we use forEach
h3.forEach((ele)=>{
       return ele.style.color = 'orange'
})


let wish = document.querySelector('#wish')

wish.style.color = 'pink'
wish.style.backgroundColor = 'orange'


// innerHTML is used to change the content of html element
wish.innerHTML ='Happy Valentien day'
wish.style.color = 'blue'





let head = document.createElement("h3")
console.log(head);
document.writeln(head)
document.body.appendChild(head)
head.innerHTML = "Happy Rose day"

let image = document.createElement("img")
document.body.appendChild(image)
image.setAttribute("src","ok.jpg")       // SetAttribute is use to add html attribute dynamically
image.style.height = '200px'
image.style.border = 'solid'

let car1 = document.querySelector("#car")
car1.setAttribute("tutle","I am not just a car")
console.log(car1.getAttribute('title'));               // GetAttribute is use to give value to html attribute
car1.removeAttribute('title')                     
console.log(car1.hasAttribute('title'));           // This will give O/P is there attribute is present or not            


let btn1 = document.getElementById("btn")
let car = document.querySelector("#car")

btn1.addEventListener("click", ()=>{
       car.style.color ='blue'
       car.innerHTML ='Buy now'
})




let task = document.getElementById("task")
let image = document.querySelector("#task1")

task.addEventListener("click",()=>{
       image.setAttribute("src","ok.jpg")
       image.style.height = '300px'
})

let task3 = document.getElementById("task3")
task3.addEventListener("click",()=>{
       image.style.border = " 20px solid"
       image.style.border-radius == "black solid"
})



          //29.3.25

function task (){
    alert("Hi I'm Button")
}

let prom = document.getElementById("prom")
prom.addEventListener("keypress",()=>{               // Whenever we press any key it will give warning message
    prompt("Hi Im username")
})

let inputBox = document.getElementById("input")
inputBox.addEventListener("keypress",()=>{
    inputBox.style.backgroundColor =" black"
    inputBox.style.color = 'white'
})

inputBox.addEventListener("keyup",()=>{
    inputBox.style.backgroundColor =" blue"
    inputBox.style.color = 'red'
})

let value = 1
function printNumbers (){
     if (value > 10) return
    //  document.writeln(value)
     let NewEle = document.createElement("p")
     document.body.appendChild(NewEle)
     NewEle.innerHTML = value
     // document.getElementById("para"),innerhtml = value
     value++

        setTimeout(printNumbers,5000)
}

    printNumbers()


let btn = document.createElement("button")
document.body.appendChild(btn)
btn.innerHTML = "Add image "
btn.style.display = "block"

let btn2 = document.createElement("button")
document.body.appendChild(btn2)
btn2.innerHTML = "Remove image"
btn2.style.display = "block"

btn.addEventListener("click",()=>{
    let image = document.createElement("img")
    document.body.appendChild(image)
    image.setAttribute("src", "ok.jpg")
    image.setAttribute("height","100px")

    btn2.addEventListener("click",()=>{
        image.remove()
    })
})

