const nums = [10, 5, 3, 8, 2, 6, 4, 7, 9, 1, 24, 15];
const sortedNums = bubbleSort(nums);

function bubbleSort(nums) {
  for (let i = 0; i < nums.length; i++) {
    let swapped = false;
    for (let j = 0; j < nums.length - 1; j++) {
      if (nums[j] > nums[j + 1]) {
        //         //The below method works too
        //         // const temp = nums[j];
        //         // nums[j] = nums[j + 1];
        //         // nums[j + 1] = temp;

        //         // this is a shorter method
        [nums[j], nums[j + 1]] = [nums[j + 1], nums[j]];
        swapped = true;
      }
    }
    if (!swapped) break;
  }
  return nums;
}

console.log(bubbleSort(nums));

// console.log(nums.sort());
