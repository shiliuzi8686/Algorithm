/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let l = 0;
  let r = nums.length - 1;
  while (l <= r) {
    // mid的计算要考虑到数组长度为1、2的情况
    const mid = l + Math.floor((r - l) / 2);
    if (nums[mid] === target) {
      return mid;
    }
    if (nums[mid] > target) {
      // 为什么不能使用下面第一个呢？
      // r = mid
      r = mid - 1;
    } else {
      // l = mid
      l = mid + 1;
    }
  }
  return -1;
};
