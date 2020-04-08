function insertionSort (list) {
  for (let i = 1; i < list.length; i++) {
    const currentVal = list[i]
    let dropLocation = i
    console.log(list)
    for (let j = i - 1; j >= 0; j--) {
      if (currentVal > list[j]) {
        dropLocation = j
        const removed = list.splice(i, 1)
        list.splice(dropLocation + 1, 0, ...removed)
        break
      }

      if (j === 0) {
        dropLocation = j
        const removed = list.splice(i, 1)
        list.splice(dropLocation, 0, ...removed)
        break
      }
    }
  }
  return list
}

console.log(insertionSort([2, 4, 3, -1, 3, -7]))

module.exports = {
  insertionSort
}
