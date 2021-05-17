/*
 * @Descripttion: 
 * @version: 
 * @Author: MapleLeaves
 * @Date: 2021-05-17 10:55:10
 * @LastEditors:  
 * @LastEditTime: 2021-05-17 13:17:19
 */
import  'reflect-metadata';
function inject(serviceIdentifier: string) {
  return function (target:Object, targetkey:string, index:number) {
    Reflect.defineMetadata(serviceIdentifier, "大鑫", target)   
  }
}
class IndexController {
  public indexService: string
  constructor(@inject('xxx') indexService: string) {
    this.indexService = indexService
  }
}
const indexController = new IndexController("MapleLeaves");
console.error("香蕉", indexController.indexService)
console.error("苹果", Reflect.getMetadata('xxx', IndexController))

