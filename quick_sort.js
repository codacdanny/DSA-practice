const quick_sort = (nums) => {
  // base case, array length 0 or 1
  if (nums.length <= 1) return nums;

  // chose pivot

  let pivot = nums[nums.length - 1];
  // separate left and right array
  let left_array = [];
  let right_array = [];
  for (let i = 0; i < nums.length - 1; i++) {
    nums[i] < pivot ? left_array.push(nums[i]) : right_array.push(nums[i]);
  }
  // call quick_sort on left and right array
  let sorted_left = quick_sort(left_array);
  let sorted_right = quick_sort(right_array);
  // return concat left pivot right
  return sorted_left.concat(pivot, sorted_right);
};

const input = [10, 8, 2, 1, 6, 3, 9, 4, 7, 5];
console.log(quick_sort(input));
