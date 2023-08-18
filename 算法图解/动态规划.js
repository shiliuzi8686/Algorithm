const { log } = console

/**
 * 斐波那契数列
 * 【带记忆功能】【闭包】【递归】
 * [用数组来存储已经计算过的值] 数组该位置是否为0来判断是否计算过
 */
let fib = function (N) {
  let memo = new Array(N + 1).fill(0)
  return (function dp (memo, N) { 
    if (N === 1 || N === 0) return N
    if (memo[N] !== 0) return memo[N]
    memo[N] = dp(memo, N - 1) + dp(memo, N - 2)
    return memo[N]
  }(memo, N))
}

// let fib = function (N) {
//   let memo = new Array(N + 1).fill(0)
//   return dp(memo, N)
// }
function dp (memo, N) { 
  if (N === 1 || N === 0) return N
  if (memo[N] !== 0) return memo[N]
  memo[N] = dp(memo, N - 1) + dp(memo, N - 2)
  return memo[N]
}

const res = fib(10)
log('res', res)