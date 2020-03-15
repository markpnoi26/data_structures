function merge(a1, a2) {
  let arr = []

  while (true) {
    if (a1[0] > a2[0]) {
      arr.push(a2.shift())
    } else if (a1[0] < a2[0]) {
      arr.push(a1.shift())
    }

    if (a1.length === 0 && a2.length > 0) {
      arr = arr.concat(a2)
      break
    }

    if (a1.length > 0 && a2.length === 0) {
      arr = arr.concat(a1)
      break
    }
  }
  console.log(arr)
}

let sampleArray1 = [2,6,7,12]
let sampleArray2 = [1,3,4,9,90,100]

merge(sampleArray1, sampleArray2)
