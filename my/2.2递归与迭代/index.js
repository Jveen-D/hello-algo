function recur(n) {
    // 触发归的条件
    if (n === 1) return 1
    // 递，递写的越简单越容易看懂
    const res = recur(n - 1)
    return n + res
 }
console.log('🚀 ~ file: index.js:2 ~ recur ~ recur:', recur(100))
 
// 尾递归
function tailRecur  (n, res){
    // 终止条件
    if ( n === 0 ) return res
    return tailRecur( n - 1, res + n )
}
console.log('🚀 ~ file: index.js:16 ~ tailRecur:', tailRecur(100,0))
