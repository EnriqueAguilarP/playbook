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

// Ejemplo 9: Uso del reduce
console.log("Ejemplo 9: Uso de reduce para calcular la suma de los elementos de una lista")
const numbers9 = [15, 21, 33, 44, 15]
const result_of_reduce = numbers9.reduce((acc, element) => acc + element, 0)
console.log(result_of_reduce)

// Ejemplo 10: uso de every nos ayuda a validar todos los elementos de una lista, si todos cumplen con la validación que indiques te regresa true, de lo contrario false
const names10 = ['Explorer 1', 'Explorer 2', 'Explorer 3', 'Explorer 4']
const areAllStr = names10.every((name) => typeof name === 'string') // every
console.log("Ejemplo 10: Son todos los nombres string: " + areAllStr)

// Ejemplo 11: Uso de find para encontrar el primer elemento de una lista que cumpla con lo que indiques
const ages = [24, 22, 19, 25, 32, 35, 18]
const age = ages.find((age) => age < 20)
console.log("Ejemplo 11: Primera edad menor a 20 es: "+ age)

// Ejemplo 12: Uso de find en una lista de objetos
const scores12 = [
  { name: 'A', score: 95 },
  { name: 'M', score: 80 },
  { name: 'E', score: 50 },
  { name: 'M', score: 85 },
  { name: 'J', score: 100 },
]

const score_less_than_80 = scores12.find((user) => user.score > 80)
console.log("Ejemplo 12. Name score found:" + score_less_than_80.name)

// Ejemplo 13: Uso de findIndex, este método regresa la posición del primer elemento que cumpla con la validación que indiques.
const names13 = ['Explorer 1', 'Explorer 2', 'Explorer 3']
const result = names13.findIndex((name) => name.length > 7)
console.log("Ejemplo 13: Primer elemento cuya palabra sea mayor a 7 esta en la posición "+ result)

// Ejemplo 14: Uso de some, este método validará todos los elementos de la lista, y si alguno cumple con la validación indicada, regresará true, de lo contrario será false.

// lista de elementos
const bools = [true, true, false, true]
// Uso de Some para ver si al menos uno de los elementos es false
const areSomeTrue = bools.some((b) =>  b === false)
console.log("Ejemplo 14: Alguno de los elementos en el array es false: " + areSomeTrue) //true

//Ejemplo 15: Uso de sort para ordenar elementos
const products = ['Milk', 'Coffee', 'Sugar', 'Honey', 'Apple', 'Carrot']
console.log("Ejemplo 15: Elementos ordernados usando SORT")
console.log(products.sort())

// Ejemplo 16: Ordenando una lista de objetos
const users = [
  { name: 'A', age: 150 },
  { name: 'B', age: 50 },
  { name: 'C', age: 100 },
  { name: 'D', age: 22 },
]

users.sort((a, b) => { // podemos invocar una función
  if (a.age < b.age) return -1
  if (a.age > b.age) return 1
  return 0
})

console.log("Ejemplo 16: Ordenando una lista de objetos por la edad")
console.log(users) // sorted ascending