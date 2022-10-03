// 封装函数：判断传入的数字是否是质数
// 特点：只能被1和自己整除，不能被2到num-1数字整除
function isPrime (num) {
    for(let i = 2;i < num;i++){
        if(num % i == 0) return false
    }
    return true
}

//验证函数
console.log(3,isPrime(3))
console.log(11,isPrime(11))
console.log(123,isPrime(123))
console.log(41,isPrime(41))
console.log(2,isPrime(2))

// 封装函数：判断传入的数字是否是质数
function isPrime (num) {
    // 1.获取num的平方根
    let temp = parseInt(Math.sqrt(num))
    for(let i = 2;i < temp;i++){
        if(num % i == 0) return false
    }
    return true
}

//验证函数
console.log(3,isPrime(3))
console.log(11,isPrime(11))
console.log(123,isPrime(123))
console.log(41,isPrime(41))
console.log(2,isPrime(2))