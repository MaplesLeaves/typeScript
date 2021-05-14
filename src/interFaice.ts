/*
 * @Descripttion:  interface he  type 的区别
                    相同点：
                          都可以描述一个对象或者函数
                          都允许进行扩展
                    不同点： 
                          type可以声明基本面类型别名、联合类型、元祖等
                          typeof获取实例的对象
                          interface 可以被合并
 * @version: 
 * @Author: MapleLeaves
 * @Date: 2021-05-14 17:03:15
 * @LastEditors:  
 * @LastEditTime: 2021-05-14 17:12:10
 */
interface IPriceDate {
  id: string,
  m:string
}
type IPriceDateArray = IPriceDate[];
function getIPriceDate() {
  return new Promise<IPriceDateArray>((resolve, reject)=> {
    fetch("url").then((result) => {
      return result.json()
    }).then((myJson) => {
      const data: IPriceDateArray = []
      resolve(data)
    })
  })
}