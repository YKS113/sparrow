class DB {
  store;
  constructor() {
    this.store = {};
  }
  set(key, value) {
    if (this.store[key] == undefined) {
      this.store[key] = value;
    } else {
      throw "Key already exists";
    }
  }

  get(key) {
    if (this.store[key] == undefined) {
      throw "Key does not exist";
    } else {
      return this.store[key];
    }
  }

  update(key, value) {
    if (this.store[key] == undefined) {
      throw "Key does not exist";
    } else {
      this.store[key] = value;
    }
  }

  del(key) {
    if (this.store[key] == undefined) {
      throw "Key does not exist";
    } else {
      delete this.store[key];
    }
  }

  dump() {
    return this.store;
  }

  log() {
    console.log(this.store)
  }

  clear() {
    this.store = {};
  }
}

module.exports = DB;
