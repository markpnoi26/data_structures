function pivot(arr, start=0, end=arr.length) {
  // TODO, implement selected pivot point and bring to the beginning of array.
  // pivot point starts at beginning
  let p = start
  let moreIdx = p+1
  let lessIdx = start

  for (let i = 1; i < end; i++) {
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
//                [19, 5, 15, 36, 26, 27, 4, 38, 46, 47, 44, 50, 48]
