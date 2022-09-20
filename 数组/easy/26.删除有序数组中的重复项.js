var removeDuplicates = function(nums) {
    let l = 0
    let r = 1
    for(let i = 0,len = nums.length;i < len;i++){
        if(nums[l] === nums[r]) 
            r++
        else {
            l++
            nums[l] = nums[r]
            r++
        }
    }
    nums = nums.slice(0,l)
    return nums.length
};
console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4]))