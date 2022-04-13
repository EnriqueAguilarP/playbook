// Ejemplo 1: for Each para imprimir elementos de una lista
console.log("Ejemplo 1: Imprimiendo los elementos de una lista")
const numbers = [21, 25, 31, 40, 25];
numbers.forEach(num => console.log(num))

// Ejemplo 2: for Each para calcular la suma de todos los elementos de una lista
console.log("Ejemplo 2: Cálculo de la suma de los elementos de la lista")
let contador = 0;
const numbers2 = [15, 12, 13, 24, 55];
numbers2.forEach(num => contador += num)
console.log(contador)

// Ejemplo 3: forEach para imprimir los países en letras mayúsculas
console.log("Ejemplo 3: Imprimiendo la lista de países a donde me gustaría viajar en mayúsculas")
const countries = ['Germany', 'Denmark', 'China', 'Japan']
countries.forEach((element) => console.log(element.toUpperCase()))

// Ejemplo 4: Uso de map para recorrer los elementos de una lista y crear una nueva lista
console.log("Ejemplo 4: Imprimiendo la lista de elementos al cuadrado")
const numbers4 = [2, 4, 6, 8, 10]
const squareNum = numbers4.map( num => {return num * num})
console.log(squareNum)

// Ejemplo 5: Uso de Map para convertir todos los nombres en mayúsculas
console.log("Ejemplo 5: Uso de Map para convertir todos los nombres de una lista a mayúsculas")
const names = ['Juan', 'Pedro', 'Carlos', 'Erick']
const namesToUpperCase = names.map((name) => name.toUpperCase())
console.log(namesToUpperCase)

// Ejemplo 6: Uso de map para convertir las tres letras de los nombres de una lista a minúsculas
console.log("Ejemplo 6: Uso de map para seleccionar las primeras tres letras de los nombres de países")
const countries6 = ['Germany', 'Denmark', 'China', 'Japan']
const countriesFirstThreeLetters = countries6.map((country) =>
  country.toLowerCase().slice(0, 3)
)
console.log(countriesFirstThreeLetters)

// Ejemplo 7: Uso de filter para filtrar una lista de elementos
console.log("Ejemplo 7: Uso de filter para filtrar una lista de elementos")
const countries7 = ['Germany', 'Denmark', 'China', 'Japan']
const countriesContainingMark = countries7.filter((country) => 
  country.includes('mark') 
)
console.log(countriesContainingMark)

console.log("Ejemplo 7: Paises que terminan en -an")
const countriesEndsByAn = countries.filter((country) => country.endsWith('an'))
console.log(countriesEndsByAn)

console.log("Ejemplo 7: Paises que empiezan en Chi")
const countriesStartChi = countries.filter((country) => country.startsWith('Chi'))
console.log(countriesStartChi)

// Ejemplo 8: Filtrar una lista por condicional
console.log("Ejemplo 8: Filtrando elementos por score")
const puntajes = [
  { name: 'Algebra', score: 91 },
  { name: 'Redes', score: 85 },
  { name: 'Matematicas', score: 95 },
  { name: 'POO', score: 89 },
  { name: 'Algoritmos', score: 85 },
  { name: 'Inteligencia Artificial', score: 100 },
]

const scoresGreaterEighty = puntajes.filter((score) => score.score > 90)
console.log(scoresGreaterEighty)
console.log()

// Ejemplo 9: Uso del reduce
console.log("Ejemplo 9: Uso de reduce para calcular la suma de los elementos de una lista")
const numbers9 = [15, 21, 33, 44, 15]
const result_of_reduce = numbers9.reduce((acc, element) => acc + element, 0)
console.log(result_of_reduce)
console.log()

// Ejemplo 10: uso de every nos ayuda a validar todos los elementos de una lista, si todos cumplen con la validación que indiques te regresa true, de lo contrario false
console.log("Ejemplo 10: Uso del every")
const numb10 = [4, 5, 8, 20]
const areAllNum = numb10.every((num) => typeof num === 'number') // every
console.log("Son todos los datos son de tipo número: " + areAllNum)
console.log()

// Ejemplo 11: Uso de find para encontrar el primer elemento de una lista que cumpla con lo que indiques
console.log("Ejemplo 11: Uso del find")
const ages = [24, 22, 19, 25, 32, 35, 18]
const age = ages.find((age) => age > 26)
console.log("Primera edad mayor a 20 es: "+ age)
console.log()

// Ejemplo 12: Uso de find en una lista de objetos
console.log("Ejemplo 12. Uso del find en una lista de objetos")
const scores12 = [
  { name: 'Algebra', score: 81 },
  { name: 'Redes', score: 85 },
  { name: 'Matematicas', score: 95 },
  { name: 'POO', score: 89 },
  { name: 'Algoritmos', score: 85 },
  { name: 'Inteligencia Artificial', score: 100 },
]

const score_bigger_than_90 = scores12.find((numb) => numb.score > 90)
console.log("Name score found: " + score_bigger_than_90.name)
console.log()

// Ejemplo 13: Uso de findIndex, este método regresa la posición del primer elemento que cumpla con la validación que indiques.
console.log("Ejemplo 13: Uso de findIndex ")
const names13 = ['Angel', 'Armando', 'Diego']
const result = names13.findIndex((name) => name.length > 6)
console.log("Primer elemento cuya palabra sea mayor a 6 esta en la posición "+ result)
console.log()

// Ejemplo 14: Uso de some, este método validará todos los elementos de la lista, y si alguno cumple con la validación indicada, regresará true, de lo contrario será false.
console.log("Ejemplo 14. Uso del iterador some")
// lista de elementos
const bools = [true, true, false, true]
// Uso de Some para ver si al menos uno de los elementos es false
const areSomeFalse = bools.some((b) =>  b === false)
console.log("Alguno de los elementos en el array es false: " + areSomeFalse)
console.log()

//Ejemplo 15: Uso de sort para ordenar elementos
console.log("Ejemplo 15: Uso del iterador sort")
const prices = [51, 89, 15, 23, 48, 70]
console.log("Elementos ordernados usando SORT:")
console.log(prices.sort())
console.log()

// Ejemplo 16: Ordenando una lista de objetos
console.log("Ejemplo 16: Uso del iterador sort en una lista de objetos")
const users = [
  { name: 'Angel', age: 32 },
  { name: 'Armando', age: 25 },
  { name: 'Fabrizio', age: 20 },
  { name: 'Diego', age: 22 },
]

users.sort((a, b) => { // podemos invocar una función
  if (a.age < b.age) return -1
  if (a.age > b.age) return 1
  return 0
})

console.log("Ordenando una lista de objetos por la edad")
console.log(users) // sorted ascending