class Pokemon {
    constructor(name) {
      this.name = name
    }
  
    // método sayhello
    // this.name es la variable que se guarda en el contexto local
    // message es una variable que se le pasa al ejecutar este método
    sayHello () {
      console.log(`Mi pokemon ${this.name} te saluda!!!`)
    }
  
    // método sayMessage
    sayMessage (message) {
      console.log(`My pokemon ${this.name} dice: ${message}`)
    }
  }
  
  // Esta clase se exporta en este módulo
  module.exports = Pokemon
