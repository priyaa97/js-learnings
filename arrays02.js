const marvel_heroes=["thor","Ironman","spiderman"]
const dc_hearoes=["superman","flash","batman"]
//marvel_heroes.push(dc_hearoes)
//console.log(marvel_heroes)
//marvel_heroes.concat(dc_hearoes)
console.log(marvel_heroes)
const allheroes=marvel_heroes.concat(dc_hearoes)
console.log(allheroes)
console.log(marvel_heroes)
const allnewheroes=[...marvel_heroes,...dc_hearoes]
console.log(allnewheroes)
