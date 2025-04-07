import ModelError from "/model/ModelError.js";

export class Group {

    #id;
    #name;
    #created_by;
    #members;

    constructor(id, name, created_by,user_id) {
      this.#id = id;
      this.#name = name;
      this.#created_by = created_by;
      this.#members = {user_id};
    }
  
    addMember(user_id, peso = 1) {
      if (peso <= 0) throw new ModelError("Peso inválido");
      this.#members[user_id] = { peso };
    }
  
    get members() {
      return this.#members;
    }

    get group_name () {
        return this.#name;
    }

  }
  