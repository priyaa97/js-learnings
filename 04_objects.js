//we will learn about obejcts and symbol datatype
const mySymbol = Symbol("key")
const Jsuser={
    name:"priya",
    age:27,
    location:"New naroda",
    email:"priya@gmail.com",
    "fullname":"Mourya Priyadevi",
    [mySymbol]:"mykey"
}
console.log(Jsuser.name)
console.log(Jsuser[mySymbol])
console.log(Jsuser["fullname"])
