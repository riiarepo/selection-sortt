

function selectionSort(arr) {

  // Copy the original array
  let copy = arr.slice();

  // Create an array to store the sorted values
  let sorted = [];

  // While the array is not empty...
  while(copy.length > 0) {

    // Do not move this console.log
    console.log(sorted.join(","));

    // Find the index of the minimum value in the unsorted half

    let min = Math.min(...copy);

    let indx = copy.indexOf(min)

    // Save and remove the value at the min index
    copy.splice(indx, 1);

    // Add the min value to the end of the sorted array
    sorted.push(min);
  }
return sorted;
}



function selectionSortInPlace(arr) {

  // Set a pointer at zero diving the array into sorted and unsorted halves
  let div = 0;

  // Repeat while the unsorted half is not empty:
  while(div < arr.length) {
    // Do not move this console.log
    console.log(arr.join(","));

    // Find the index of the minimum value in the unsorted half

    // Save the min value
    let min = Math.min(...arr.slice(div));

    let indx = arr.indexOf(min)

    // Shift every unsorted value to the left of the min value to the right by 1
    for (let i = indx; i > div; i--) {
      arr[i] = arr[i - 1]
    }

    // Put the min value at the divider
    arr[div] = min;
    // Increment the divider and repeat
    div ++
  }
return arr
}


module.exports = [selectionSort, selectionSortInPlace];
