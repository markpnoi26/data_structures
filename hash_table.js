class HashTable {
  constructor(size=53) {
    this.keyMap = new Array(size)
  }

  _hash(key) {
    let total = 0
    let WEIRD_PRIME = 31
    for (let i = 0; i<Math.min(key.length, 100); i++) {
      let char = key[i]
      let value = char.charCodeAt(0) - 96
      total = (total * WEIRD_PRIME + value) % this.keyMap.length
    }
    return total
  }

  set(key, value) {
    let idx = this._hash(key)
    if (!this.keyMap[idx]) {
      this.keyMap[idx] = []
    }
    this.keyMap[idx].push([key, value])
  }

  get(key) {
    let idx = this._hash(key)
    if (this.keyMap[idx]) {
      for (let el of this.keyMap[idx]) {
        if (el[0] === key) {
          return el[1]
        }
      }
    }
    return undefined
  }

  keys() {
    let keyArray = []
    for (let element of this.keyMap) {
      if (element) {
        for (let i=0; i < element.length; i++) {
          keyArray.push(element[i][0])
        }
      }
    }
    return keyArray
  }

  values() {
    let valuesArray = []
    for (let element of this.keyMap) {
      if (element) {
        for (let i=0; i < element.length; i++) {
          let value = element[i][1]
          if (!valuesArray.includes(value)) {
            valuesArray.push(value)
          }
        }
      }
    }
    return valuesArray
  }
}

let ht = new HashTable()
ht.set("red", "99123")
ht.set("blue", "00123")
ht.set("purple", "66723")
ht.set("violet", "66723")

console.log(ht.values())
console.log(ht.keys())
