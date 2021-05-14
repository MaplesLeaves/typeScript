/*
 * @Autor: MapleLeaves
 * @Date: 2021-05-12 22:32:29
 * @LastEditors:  
 * @LastEditTime: 2021-05-13 17:03:15
 */
const data:string = '我是大鑫';
console.error(data)
function getname(name:string):string {
  return name
}
let nameOne = getname("daxin");
console.error(nameOne)
enum Days  {
  Sun,
  Mon,
  Tue,
  Wen,
  Thu,
  Fri,
  Sat
}
interface Preson{
  userName ? : string;
  age:number
}
let men:Preson = {
  age: 78
}
console.error(Days['Sun'])
console.error(men)
let num:number[] = [787];
console.error(num)
let arr:[number, string] = [12,'43'];
let arr2:any[] = [232,{},false,null,undefined]

function  userFetch(){
  const name:string = '张三';
  const age: number = 78;
  return tryInfo(name, age)
}
function tryInfo <T extends unknown[]>(...ele: T):T{
  return ele;
}
let [name] = userFetch();
console.error(name)