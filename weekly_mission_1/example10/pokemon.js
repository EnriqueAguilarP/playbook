/*
  export default nos permite exportar esta clase e importara
*/

export default class pokemon {
    constructor (name) {
      this.name = name
    }
  
    sayHello () {
      console.log(`Mi pokemon ${this.name} te saluda`)
    }
  }