'use strict';
const memo = new Map() //連想配列の作成
memo.set(0, 0); //データの登録（key, value)
memo.set(1, 1); //データの登録（key, value）


function fib(n) {
  if (memo.has(n)) return memo.get(n)
  //データを持っていないとき
  const value = fib(n - 1) + fib(n - 2);
  memo.set(n, value); //データの登録（key, value)
  return value;　//値を返す
}
const length = 100;
for (let i= 0; i <= length; i++) {
  console.log(fib(i));
}
