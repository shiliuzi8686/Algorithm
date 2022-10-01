/**
 * 给定一个排序数组和一个目标值，在数组中找到目标值，并返回其索引。
 * 如果目标值不存在于数组中，返回它将会被按顺序插入的位置。
 * 要求：请必须使用时间复杂度为 O(log n) 的算法。
 */


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let l = 0,r = nums.length - 1
    let mid
    while(l <= r){
        mid = Math.floor((l + r)/2)
        if(nums[mid] === target){
            return mid
        } else if(nums[mid] > target){
            r = mid - 1
        } else{
            l = mid + 1
        }
    }
    // 没找到，得自己加上
    if(nums[mid] > target) nums.splice(mid - 1,0,target)
    if(nums[mid] < target) nums.splice(mid + 1,0,target)
};