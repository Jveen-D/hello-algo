function recur(n) {
    // 触发归的条件
    if (n === 1) return 1
    // 递，递写的越简单越容易看懂
    const res = recur(n - 1)
    return n + res
 }
 console.log('🚀 ~ file: index.js:2 ~ recur ~ recur:', recur(100))