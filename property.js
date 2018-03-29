// プロトタイプチェーンの確認
const myObject = {
  foo: 'prop1',
  bar: ['a', 'b', 'c'],
};

/*
  hasOwnPropertyは、対象のオブジェクトが持っているプロパティを判定する。
  プロトタイプチェーンを走査しない。
*/
console.log('[hasOwnProperty]');
console.log('foo: ', myObject.hasOwnProperty('foo')); // true
console.log('toString: ', myObject.hasOwnProperty('toString')); // false

/*
  inは、プロトタイプチェーンまで走査してプロパティの有無を判定する。
*/
console.log('[in]');
console.log('foo: ', ('foo' in myObject));  // true
console.log('toString: ', ('toString' in myObject));  // true
