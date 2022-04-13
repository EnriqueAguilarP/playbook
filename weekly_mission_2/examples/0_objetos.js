console.log("Ejemplo 0. Creando objetos en JavaScript")

// Ejemplo 1: Crear un objeto vacío
console.log("Ejemplo 1: Crear un objeto vacío")
const persona1 = {}
console.log(persona1)

// Ejemplo 2: Crear un objeto con propiedades
console.log("Ejemplo 2: Crear un objeto con propiedades")
const persona2 = {
  name: "Enrique Aguilar",
  age: 31
}
console.log(persona2)

// Ejemplo 3: Objeto con diferentes propiedades
console.log("Ejemplo 3: Objeto con diferentes propiedades")
const persona3 = {
  name: "Diego",
  age: 22,
  hobbies: [
   "ver anime",
    "jugar videojuegos",
    "viajar"
  ],
  address: {
    zip_code: "37500",
    street: "Hermanos Aldama 704",
    city: "León"
  }
}

console.log(persona3)
console.log(persona3.age)
console.log(persona3.hobbies)

// Ejemplo 4: Objeto con métodos
console.log("Ejemplo 4: Objeto con métodos")

const persona4 = {
  name: "Armando",
  // Esta es una función que se guarda como propiedad
  construyeDron: function(){
    // this.name hace referencia a la propiedad del objeto
    console.log(`${this.name} está construyendo un Dron!`)
  }
}
persona4.construyeDron()

// Ejemplo 5: Objeto con método que recibe parámetros
console.log("Ejemplo 5: Objeto con método que recibe parámetros")
const persona5 = {
  name: "Angel",
  construyeDron: function(objetoIndirecto){
    console.log(`${this.name} construye un Dron para ${objetoIndirecto}`)
  }
}
persona5.construyeDron('Sandra')
