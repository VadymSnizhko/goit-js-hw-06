class StringBuilder {
  #value
  constructor(str){
    this.#value = this.fixType(str);
  }

  getValue(){
    return this.#value;
  }
  //this.#value = startStr + this.#value;
  padStart(startStr){
      this.#value = this.fixType(startStr) + this.#value;
    }

  padEnd(endStr){
    this.#value = this.#value + this.fixType(endStr);
  }

  padBoth(bothStr){
    this.#value = this.fixType(bothStr) + this.#value + this.fixType(bothStr);
  }

  fixType(data){   
    if (typeof(data) != 'string'){
      return data.toString();
    }
    return data;
  }
}

const builder = new StringBuilder(".");
console.log(builder.getValue()); // "."
builder.padStart("^");
console.log(builder.getValue()); // "^."
builder.padEnd("^");
console.log(builder.getValue()); // "^.^"
builder.padBoth("=");
console.log(builder.getValue()); // "=^.^="

