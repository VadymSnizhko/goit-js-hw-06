 class Storage {
  #items;
  constructor(item){
    this.#items = item;
  }

  getItems(){
    return this.#items;
  }
 }