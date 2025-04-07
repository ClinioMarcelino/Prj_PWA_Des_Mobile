import ModelError from "/model/ModelError.js";

export class Payment {

    #id;
    #description;
    #amount;
    #currency;
    #created_by;
    #time_stamp;

    constructor(id, description, amount, currency, created_by) {
      this.#id = id;
      this.#description = description;
      this.#amount = amount;
      this.#currency = currency;
      this.#created_by = created_by;
      this.#time_stamp = Date.now();
    }
  
    get formatted_value() {
      return `${this.#currency} ${this.#amount.toFixed(2)}`;
    }
  
    set amount(amount) {
        if (+amount <= 0 ){
            throw new ModelError("Valor inválido");
        }
        return +amount;
    }
  }
  