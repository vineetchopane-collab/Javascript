let arr = [10, 23, 53, 25, 60, 30, 87]
console.log(arr);
                                            // Here arr.filter is HODF and ele is CALBF 
let newVal = arr.filter((ele)=>{           // and arr takes ele as argument
          console.log(ele);
          return ele % 2 == 0
          
})
        console.log(newVal);
        

let Names = ["Komal","maithree", "shun","sunaina","rohini","shraddha"]
console.log(Names);
        
let newNames = Names.filter((value)=>{
               return value.startsWith("s")
})
           console.log(newNames);

// Object Method
let StudentsOfWebtech = [
    {Name: "Radhika", Ratings:"star",Gender:"Female"},
    {Name: "Vineet", Ratings:"2",Gender:"Male"},
    {Name: "Janhavi", Ratings:"1",Gender:"Female"},
    {Name: "Anand", Ratings:"star",Gender:"Male"},
    {Name: "Rohiti", Ratings:"2",Gender:"Female"},
    {Name: "Karan", Ratings:"1",Gender:"Male"},
]           
console.log(StudentsOfWebtech);

starG = StudentsOfWebtech.filter((ele)=>{
            return ele.Ratings == "star"
})
    console.log(starG);

F = StudentsOfWebtech.filter((ele)=>{
         return ele.Gender == "Female"
})
    console.log(F);

N = StudentsOfWebtech.filter((ele)=>{
                 return ele.Gender == 'Male'
})
    console.log(N);

 // Map
 let number = [12,20,33,55,68,]
 let even=number.map((v)=>{
    return v % 2
 })   
        console.log(number);
        console.log(even);
        
        

// Reduce
let numbers = [20,30,45,78,12]
let newval = numbers.reduce((n1,n2)=>{
             console.log(n1+""+n2);
             return n1+n2
})    
   console.log(newval);


//    brand is key hp is value

// es - 6

let emp = {
             Ename : "Vineet",
             Age : 19,
             Married : false,
             Subject : ['html', 'css', 'js'],
             Address : {
                   place : 'Pimpri',
                   state : 'Maharashtara',
                   pin : 4738
             }
}

     console.log(emp);
     console.log(emp.Ename);
     console.log(emp.Subject[1]);
     console.log(emp.Address.place);
     console.log(Object.keys(emp));
    //  value entries 

     
     
// Used in OOPS
let product = new Object()
   product.pName = 'santoor'
   product.price = 10
   product.model = 'Sonali'
   
   console.log(product);
   

     

     

     
     
         

    

           