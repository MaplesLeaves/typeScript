/*
 * @Descripttion: 
 * @version: 
 * @Author: MapleLeaves
 * @Date: 2021-05-13 17:04:44
 * @LastEditors:  
 * @LastEditTime: 2021-05-13 17:18:37
 */
let myNum: (x: number, y: number) => number = (x:number,y:number) => {
  return x + y;
}
console.error(myNum(12, 67))
// 函数默认值
function buildName(firstName:string, lastName: string= 'cart'){
  return firstName + lastName;
}
console.error(buildName("张三"))
// 剩余参数
function push(arr: any[], ...items:any[]) {
  items.forEach(item => {
    arr.push(item)
  })
}
let a = [1]
push(a, 2,3,4,5,6,7)
console.error(a)
// 可选参数
function buildName1(firstName: string, lastName?:string) {
    return firstName + (lastName ? lastName: '')
}
console.error(buildName1('23'))