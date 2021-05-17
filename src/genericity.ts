/*
 * @Descripttion:  类型断言
 * @version: 
 * @Author: MapleLeaves
 * @Date: 2021-05-14 14:02:41
 * @LastEditors:  
 * @LastEditTime: 2021-05-17 13:51:55
 */

function getLength(str:string | number):number {
  if ((<string>str).length) {
    return (<string>str).length
  } else {
    return str.toLocaleString().length
  }
}
type Name = string;
type NameResolver = () => string;
type NameOrResolver = Name | NameResolver
function getName(n: NameOrResolver):Name {
  if (typeof n === "string") {
    return n
  } else {
    return n()    
  }
}
interface LengthWise {
  length: number
}
function identity<T extends LengthWise>(arg: T) {
  return arg;
}
let num = identity<string>("我是谁")
console.error(num);


class GenericNumber<T> {
  zeroValue: T | undefined;
  add: ((x:T,y:T)=>T) | undefined
}
const item = new GenericNumber<number>()
item.zeroValue = 12;
item.add = function (x, y) {
  return x + y
}
console.error(item.add(12, 78))
interface ConfigFn {
  <T>(value: T):void
}

const getDate2: ConfigFn = function <T>(value: T): void {
  console.error(value)
}
interface Bookmask {
  msg: string
}
class BookMaskService<T extends Bookmask> {
  item:T[] = []
}
