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
  return arr
}


function mergeSort(arr) {
  if (arr.length <= 1) return arr
  let mid = Math.floor(arr.length/2)
  let right = mergeSort(arr.slice(mid))
  let left = mergeSort(arr.slice(0, mid))
  return merge(right, left)
}


let sampleArray1 = [2,6,7,12]
let sampleArray2 = [1,3,4,9,90,100]

merge(sampleArray1, sampleArray2)
let arr3 = mergeSort([1,10, 33, 78, 4, 2, 19, 200, 22])
console.log(arr3)
// console.log(arr)
