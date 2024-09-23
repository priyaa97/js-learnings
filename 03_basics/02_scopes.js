//var a=300
let b=200

if (true){
    let a= 10
const b=20
var c=30
console.log("inner:", b);
}
//console.log(a);
console.log(b);
//console.log(c);

function one() {
    const username="Hiren"

    function two() {
        const website="Youtube"
        console.log(username);        
    }
   // console.log(website);
    two()
    
}
one()