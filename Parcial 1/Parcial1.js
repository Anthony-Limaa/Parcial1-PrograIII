
//1. MAP.

const array = [1, 2,3,4,5,6,7]
const resultArray = array.map(element => element + 10)
console.log("Ejemplo No.1:")
console.log(resultArray)

//2. FILTER.
const array2 = [1, 2, 3, 4, 5, 6, 7];
const resultArray2 = array2.filter(element2 => element2 === 3 || element2 === 7);
console.log("")
console.log("Ejemplo No.2:")
console.log(resultArray2);

//3. FOREACH.
const array3 = ['banana', 'apple', 'orange', 'pear'];
console.log("")
console.log("Ejemplo No.3:")
array3.forEach((element3, i) => {
    console.log(`${element3} se encuentra en el índice ${i}`);
});

//4. FIND.
const array4 = [1,2,3,4,5,6,7]
const resultArray4 = array4.find(element4 => element4 > 3)
console.log("")
console.log("Ejemplo No.4:")
console.log(resultArray4)

//5. SORT
const array5 = [1,2,3,4,5,6,7]
const alphabets = ['g', 'd', 'c', 'o', 'd', 'e', 'v']
console.log("")
console.log("Ejemplo No.5")

//Ordenar en forma descendente
const descArray = array5.sort((a,b) => a > b ? -1 : 1)
console.log(descArray)

//Ordenar en forma ascendente
const ascArray = alphabets.sort((a,b) => a > b ? 1 : -1)
console.log(ascArray)

//6. SOME.
const array6 = [1,2,3,4,5,6,7]
console.log("")
console.log("Ejemplo No.6:")

//Los elementos son mayores que 4
const isGreaterThanFour = array6.some(element6 => element6 > 4)
console.log(isGreaterThanFour)

//Los elementos son menores que 8
const isLessThanTen = array6.some(element6 => element6 < 0)
console.log(isLessThanTen)

//7. CONCAT.
const array7 = ['a', 'b', 'c']
const array7a = ['d', 'e', 'f']

const resultArray7 = array7.concat(array7a)
console.log("")
console.log("Ejemplo No.7:")
console.log(resultArray7)

//8. EVERY.
const array8 = [1,2,3,4,5,6,7]
console.log("")
console.log("Ejemplo No.8:")

const isGreaterThanFour2 = array8.every(element8 => element8 > 4)
console.log(isGreaterThanFour2)

const isLessThanTen2 = array8.every(element8 => element8 < 10)
console.log(isLessThanTen2)

//9. INCLUDES.
const array9 = [1,2,3,4,5,6,7]

console.log("")
console.log("Ejemplo No.9:")
console.log(array9.includes(2))
console.log(array9.includes(8))

//10. JOIN.
const array10 = ['g', 'd', 'c', 'o', 'd', 'e', 'v']

console.log("")
console.log("Ejemplo No.10:")
console.log(array10.join(''))
console.log(array10.join('-'))

//11. REDUCE.
const array11 = [1,2,3,4,5,6,7]
const resultArray11 = array11.reduce((Accumulator, current) => Accumulator + current)

console.log("")
console.log("Ejemplo No.11:")
console.log(resultArray11)

//12. INDEXOF.
const array12 = ['steve', 'bruce', 'tony', 'chris']
const resultArray12 = array12.indexOf('bruce')

console.log("")
console.log("Ejemplo No.12:")
console.log(resultArray12)

//13. FINDINDEX.
const array13 = ['steve', 'bruce', 'tony', 'chris']
const resultArray13 = array13.findIndex(element13 => element13 === 'bruce')

console.log("")
console.log("Ejemplo No.13:")
console.log(resultArray13)

//14. FILL.
const array14 = [1,2,3,4,5,6,7]
console.log("")
console.log("Ejemplo No.14:")

//Llenar con 10 desde la posición 3
console.log(array14.fill(10,3))

//Llenar con 8 desde la posición 4 hasta la posición 6
console.log(array14.fill(8,4,6))

//15. PUSH.
const array15 = ['apple', 'orange', 'pear']

console.log("")
console.log("Ejemplo No.15:")
console.log(array15.push('banana'))
console.log(array15)

//16. POP.
const array16 = ['apple', 'orange', 'pear']
array16.pop()

console.log("")
console.log("Ejemplo No.16:")
console.log(array16)

//17. SHIFT.
const array17 = ['apple', 'orange', 'pear']
array17.shift()

console.log("")
console.log("Ejemplo No.17:")
console.log(array17)

//18. UNSHIFT.
const array18 = ['apple', 'orange', 'pear']

console.log("")
console.log("Ejemplo No.18:")
console.log(array18.unshift('banana'))
console.log(array18)

//19. SLICE.
const array19 = ['a', 'b', 'c', 'd', 'e', 'f']
const resultArray19 = array19.slice(2,4)

console.log("")
console.log("Ejemplo No.19:")
console.log(resultArray19)

//20. REVERSE.
const array20 = [1,2,3,4,5,6,7]

console.log("")
console.log("Ejemplo No.20:")
console.log(array20.reverse())

//21. SPLICE.
const array21 = ['apple', 'orange', 'pear']

array21.splice(1,0,'banana')
console.log("")
console.log("Ejemplo No.21:")
console.log(array21)

//22. LASTINDEXOF.
const array22 = ['apple', 'orange', 'pear', 'apple']

console.log("")
console.log("Ejemplo No.22:")
console.log(array22.lastIndexOf('apple'))

//23. FLAT.
const array23 = [1,2,3,4,5,[6,7]]

console.log("")
console.log("Ejemplo No.23:")
console.log(array23.flat())

//24. ISARRAY.

console.log("")
console.log("Ejemplo No.24:")
console.log(Array.isArray([1,2,3,4,5,6,7]))
console.log(Array.isArray({nombre: 'gdcodev'}))
console.log(Array.isArray('apple'))
console.log(Array.isArray(undefined))

//25. FROM.

console.log("")
console.log("Ejemplo No.25:")
console.log(Array.from('gdcodev'))

//26. COPYWITHIN.
const array26 = [1,2,3,4,5]
array26.copyWithin(0,3,4)
console.log("")
console.log("Ejemplo No.26:")
console.log(array26)

//27. FLATMAP.
const nestedNumbres = [1,[2,3],4,[5]]
const flattenedNumbers = nestedNumbres.flatMap(element27 => element27)
console.log("")
console.log("Ejemplo No.27:")
console.log(flattenedNumbers)