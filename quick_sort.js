function pivot(arr) {
  let p = 0
  let moreIdx = 1
  let lessIdx = 0

  for (let i = 1; i < arr.length; i++) {
    if (arr[p] > arr[i]) {
      let temp = arr[i]
      arr[i] = arr[moreIdx]
      arr[moreIdx] = temp
      moreIdx++
      lessIdx++
    }
  }

  let temp = arr[p]
  arr[p] = arr[lessIdx]
  arr[lessIdx] = temp
  return arr
}


console.log(pivot([38, 5, 47, 15, 36, 26, 27, 44, 46, 4, 19, 50, 48]))
