
export function isNumericString(data){
  data = Number(data);
  return !isNaN(data)
}



// 유틸함수를 통해 타입을 보다 정확하게 체크하기위해 사용
function typeOf(data){
  return Object.prototype.toString.call(data).slice(8,-1).toLowerCase();
}

export const isObject = data => typeOf(data) === 'object'
export const isString = data => typeOf(data) === 'string'
export const isArray = data => typeOf(data) === 'array'
export const isNumber = data => typeOf(data) === 'number' && !isNaN(data); // NaN이여도 형변환을 하면 숫자로 변환함
export const isBigInt = data => typeOf(data) === 'bigint' && !isNaN(data);
export const isBoolean = data => typeOf(data) === 'boolean';
export const isFunction = data => typeOf(data) === 'function';
export const isUndefined = data => typeOf(data) === 'undefined';
export const isNull = data => typeOf(data) === 'null';
export const isSymbol = data => typeOf(data) === 'symbol';
export const isElement = node => node.nodeType === document.ELEMENT_NODE


















