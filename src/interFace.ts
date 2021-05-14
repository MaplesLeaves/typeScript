/*
 * @Descripttion: 
 * @version: 
 * @Author: MapleLeaves
 * @Date: 2021-05-14 17:28:26
 * @LastEditors:  
 * @LastEditTime: 2021-05-14 18:02:26
 */
interface ClockConstructor {
  new(hour: number, minute: number): ClockInterface;
}
interface ClockInterface {
  
  tick(): void
}
class Dig implements ClockInterface{
  tick(): void {
    console.error('beep beep')
  }
  
}
class Analog implements ClockInterface{
  tick(): void {
    console.error('beep beep')
  }
}
function createClock(
  cotr: ClockConstructor,
  hour: number,
  minute:number
):ClockInterface {
  return new cotr(hour, minute)
}

const digital = createClock(Dig, 12, 343)
const analog = createClock(Analog, 12, 343)
digital.tick()
analog.tick()