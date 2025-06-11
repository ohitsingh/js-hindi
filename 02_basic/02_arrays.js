const marvel_Heros = ["thor","ironMan","spiderman"]
const dc = ["superman","flash","batman"]

// marvel_Heros.push(dc)
// console.log(marvel_Heros)

// newArray =marvel_Heros.concat(dc)
// console.log(newArray)

const allNewHeros = [...marvel_Heros,...dc]
// console.log(allNewHeros)

const anotherArray = [1,2,3,[4,5,6],7,[6,7,[4,5]]]

const realAnotherArray = anotherArray.flat(Infinity)
console.log(realAnotherArray)

console.log(Array.isArray("Hitesh"))
console.log(Array.from("Hitesh"))

console.log(Array.from({name : "Mohit"}))