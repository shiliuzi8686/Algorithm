// 两个指针分别从头部、尾部

// var removeElement = function(nums, val) {  //错误
//     let l = 0,r = nums.length - 1;
//     while(l < r){
//         // 将重复的元素放在数组右侧
//         if(nums[l] === val){
//             nums[r] = nums[l]
//             r-- 
//         }
//         l++
//     }
//     return l
// };