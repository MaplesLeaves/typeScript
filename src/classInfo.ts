/*
 * @Descripttion: ts中的类
 * @version: 
 * @Author: MapleLeaves
 * @Date: 2021-05-13 17:36:04
 * @LastEditors:  
 * @LastEditTime: 2021-05-14 13:50:20
 */
abstract class Animal {
  abstract makeSound(): void;
}
class Dog extends Animal {
  #region: string;
  constructor() {
    super();
    this.#region = 'woshis'
  }
  makeSound() {
    console.log("汪汪汪");
    
  }
}
let dog:Animal = new Dog();
dog.makeSound()
console.error((dog as any).region)