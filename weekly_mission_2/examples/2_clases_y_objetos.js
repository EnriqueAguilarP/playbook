// Ejemplo 1: Crear una clase vacía
console.log("Ejemplo 1: Crear una clase vacía")
class Dron {
}
console.log(Dron) // [class Dron]
console.log()

// Ejemplo 2: Crear un objeto a partir de una clase
console.log("Ejemplo 2: Crear un objeto a partir de una clase")
class Dron2 {
}
const droide = new Dron2() // Puedo crear muchos objetos de la clase
console.log(droide) // un objeto de la clase Dron
console.log()

// Ejemplo 3: Instanciar un objeto con atributos
console.log("Ejemplo 3: Instanciar un objeto con atributos")
class Teacher {
  // El constructor nos permite instanciar un objeto y asignarle atributos, this nos ayuda a realizar esto.
  constructor(name, age, subjects){
    this.name = name
    this.age = age
    this.subjects = subjects
	}
}

// Crear un objeto de la clase Student (esto se le llama instanciación)
const enrique = new Teacher("Enrique", 31, ["POO", "Redes de computadoras"])
console.log(enrique)
console.log()

// Ejemplo 4: Métodos en los +-
console.log("Ejemplo 4: Métodos en los objetos")
class Student0 {
  constructor(name, age, subjects){
   this.name = name
   this.age = age
   this.subject = this.subject  
  }

  getInfo(){ // es una función que ejecutará cualquier objeto instanciado de esta clase
    return `Student ${this.name} has ${this.age} years old`
  }
}

const student1 = new Student0("Enrique Aguilar", 31, "POO")
console.log(student1.getInfo())
console.log()

// Ejemplo 5: Atributos con valores por default
console.log("Ejemplo 5: Atributos con valores por default")
class Student2 {
  constructor(name, age){
    this.name = name
    this.age = age
    this.subject = "Machine Learning"
    this.language = "Python"
	}

  getInfo(){
    return `This student ${this.name} is enrolled in ${this.subject} with ${this.language}`
  }
}


const jeanStudent = new Student2("Jean", 30)
console.log(jeanStudent.getInfo())

// Puedes instanciar n cantidad de objetos de la misma clase
const anaStudent = new Student2("Ana", 35)
console.log(anaStudent.getInfo())
console.log()

// Ejemplo 6: Getters para acceder a los atributos del objeto
console.log("Ejemplo 6: Getters para acceder a los atributos del objeto")

class Explorer0 {
  constructor(name, age){
   this.name = name
   this.age = age
   this.stack = "Backend with NodeJS"
   this.exercises_completed = 15
   this.exercises_todo = 35
  }

  // Podemos acceder a los atributos de esta clase
  get getExercisesCompleted() {
		return this.exercises_completed
  }
}

const enriqueAguilar = new Explorer0("Enrique Aguilar", 31)
console.log(enriqueAguilar.getExercisesCompleted)
console.log()

// Ejemplo 7: Setters para modificar los atributos del objeto
console.log("Ejemplo 7: Setters para modificar los atributos del objeto")
class MissionCommander {
  constructor(name, mission){
	  this.name = name
	  this.mission = mission
	  this.students = 5
	  this.lives = 4
  }

  get getStudents(){
   return this.students
  }

  get getLives(){
   return this.lives
  }

  set setStudents(students){
    this.students = students
  }

  set setLives(lives){
    this.lives = lives
  }
}

const missionCommanderNode = new MissionCommander("Carlo", "Backend")

console.log(missionCommanderNode.getStudents) 
console.log(missionCommanderNode.getLives)

// actualizamos los atributos por medio de los setters
missionCommanderNode.setStudents = 100
missionCommanderNode.setLives = 3

console.log(missionCommanderNode.getStudents)
console.log(missionCommanderNode.getLives)
console.log()

// Ejemplo 8: Métodos static nos ayudan a escribir métodos en una clase 
//que podemos usar sin necesidad de instanciar algún objeto
console.log("Ejemplo 8: Métodos static")
class Toolbox {
  static getMostUsefulTools(){
    return ["Command line", "git", "Text Editor"]
  }
}
// Puedo llamar el método static directamente con el nombre de la clase
console.log(Toolbox.getMostUsefulTools())
console.log()

// Ejemplo  9: Herencia entre dos clases
console.log("Ejemplo  9: Herencia entre dos clases")
class Developer {
  constructor(name, mainLang, stack){
    this.name =  name
    this.mainLang = mainLang
    this.stack = stack
  }

  get getName() {
		return this.name
	}
}

const enriqueDev = new Developer("Enrique", "javascript", "backend")
console.log(enriqueDev)

// Se usa la palabra extends para indicar que heredarás las propiedades de la clase Padre (Developer) en la clase definida.
// Podemos definir una clase vacía y rehusar todos los componentes de la clase padre
class LaunchXStudent extends Developer{
}

const enriqueLaunchXDev = new LaunchXStudent("Enrique", "javascript", "backend")
console.log(enriqueLaunchXDev)
console.log(enriqueLaunchXDev.getName) // getter de la clase padre rehusada en la clase hija
console.log()

// Ejemplo 10: Overrinding methods
console.log("Ejemplo 10: Overrinding methods")

class Explorer{
  constructor(name, username, mission){
   this.name = name
   this.username = username
   this.mission = mission
  }

  getNameAndUsername(){
   return `Explorer ${this. name}, username: ${this.username}`
  }
}

class Viajero extends Explorer {
  constructor(name, username, mission, cycle){
    super(name, username, mission) // SUPER nos ayudará a llamar el constructor padre
    this.cycle = cycle // Agregamos este atributo de la clase Viajero, es exclusiva de esta clase y no de la clase padre
  }

  getGeneralInfo(){
    let nameAndUsername = this.getNameAndUsername() // llamamos el método de la clase padre
    // nameAndUsername  es una variable de esta función, no necesitas usar this para referenciarla.
    return `${nameAndUsername}, Ciclo ${this.cycle}`
  }
}

const viajero1 = new Viajero("Enrique", "EnriqueAguilarP", "Node JS", "2022")
console.log(viajero1)
console.log(viajero1.getNameAndUsername()) // Método de la clase padre
console.log(viajero1.getGeneralInfo()) // Método de la clase hija