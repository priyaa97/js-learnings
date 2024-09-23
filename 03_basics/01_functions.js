function name() {
console.log("p")
console.log("r")
console.log("i")
console.log("y")
console.log("a")
console.log("h")
}
name// Reference
name()
/* function addTwoNumber(num1,num2){
   console.log(num1 +num2);
    

}
const result = addTwoNumber(3,6)
console.log(result);//results undefined */

function addTwoNumber(num1,num2){
    let result= num1 +num2;
    return result;
     
 
 }
 const results = addTwoNumber(3,6)
 console.log(results);


 function loginUserMessage(username = "sam"){
    if(!username){
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}

console.log(loginUserMessage("hitesh"))
// console.log(loginUserMessage("hitesh"))

//function calculateCartPrice(...num1) {
function calculateCartPrice(val1,val2,...num1) {
    return num1;
}
console.log(calculateCartPrice(200,400,500,2000));

//Object in function
const user={
    username:"Hiren",
    Price:"unvaluable",
}

function handleobject(anyobject) {
    console.log(`Person name is ${anyobject.username} and its price is ${anyobject.Price}`);
    
    
}
handleobject(user)
handleobject(
    {
    username:"Priya",
    Price:"Precious",
    }
)

const TestArray=[2,2,4,6,7]
function NewArray(getarray) {
    return getarray[3];
    
}
console.log(NewArray(TestArray));
