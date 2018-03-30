const myObj1 = new Object();
const myObj2 = {};
const myObj3 = new Object('String');

console.log('myObj1', myObj1);
console.log('myObj2', myObj2);
console.log('myObj3', myObj3);

// Object
Object.prototype.foo = 'foo';
const myString = 'myString';  // primitive
myString.bar = 'bar';

const myString2 = new Object('myString2');
myString2.bar = 'bar';

// プロトタイプチェーンでObjectを辿ってfooプロパティにたどり着く
console.log('myString', myString);
console.log('myString.bar', myString.bar);  // primitiveなのでプロパティを持たない。undefined
console.log('myString.foo', myString.foo);  

console.log('myString2', myString2);
console.log('myString2.bar', myString2.bar);
console.log('myString2.foo', myString2.foo);
