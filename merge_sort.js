const nums = [10, 5, 3, 8, 2, 6, 4, 7, 9, 1];

const merge_sort = (arr) => {
  if (arr.length < 2) return arr;
  let middle = Math.floor(arr.length / 2);
  let left_arr = arr.slice(0, middle);
  let right_arr = arr.slice(middle);
  return merge(merge_sort(left_arr), merge_sort(right_arr));
};

const merge = (left, right) => {
  let result = [];
  while (left.length && right.length) {
    if (left[0] < right[0]) {
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }
  // here one of the arrays must be empty, either the left or the right. but we can still
  // concat empty arrays to the populated array
  return result.concat(left, right);
};

console.log(merge_sort(nums));
