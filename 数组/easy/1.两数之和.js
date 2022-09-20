const {log} = console
// var twoSum = function(nums, target) {
//     let numsArr = nums.map( (item,index) => [index,target - item])
//     let resArr = numsArr.filter( ([itemIndex,num],index) => nums.includes(num))
//     return resArr.map( (item,index) => index)
// }
var twoSum = function(nums, target) {
    // let numsArr = nums.map( (item,index) => [index,target - item])
    // let resArr = []
    // // let resArr = numsArr.filter( ([itemIndex,num],index) => nums.includes(num))
    // for(let i = 0;i < numsArr.length;i++){
    //     const [itemIndex,num] = numsArr[i]
    //     if(nums.includes(num) && x) {
    //         resArr.push(numsArr[i])
    //         return
    //     }
    // }
    // return resArr.map( (item,index) => index)
    let resArr = []
    for(let i = 0;i < nums.length;i++) {
        const  copyArr = JSON.parse(JSON.stringify(nums))
        copyArr.splice(i,1)
        const copyIndex = copyArr.indexOf(target - nums[i])
        if(copyIndex >= 0 ){
            const elseNumIndex = (copyIndex >= 0) && (i <= copyIndex ? copyIndex + 1 : copyIndex)
            resArr = [i,elseNumIndex]
            return resArr
        }
    }
}
// 优解-理解Map的思路
var twoSum = function(nums, target) {
    let map = new Map()
    for(let i = 0;i < nums.length;i++){
        if(map.has(target - nums[1])) return [map.get(target - nums[1]),i]
        map.set(nums[i],i)
    }
}
var twoSum = function(nums, target) {
    for(let i = 0;i < nums.length;i++){
        for(let j = i + 1;j < nums.length;j++){
            if(nums[i] + nums[j] === target) return [i,j]
        }
    }
}


log(twoSum([3,3],6))