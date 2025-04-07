import ModelError from "/model/ModelError.js";

export default class User {

    #id;
    #name;
    #email;

    constructor(id, name, email) {
      this.#id = id;
      this.#name = name;
      this.#email = email;
    }
  
    get id() {
      return this.#id;
    }
  
    get email() {
      return this.#email;
    }

    get name() {
        return this.#name;
      }
    
      set name(newName) {
        if (newName.length < 3) throw new ModelError("Nome muito curto");
        this.#name = newName;
      }  

  }
  