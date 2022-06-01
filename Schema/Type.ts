
//   type WindowStates = "open" | "closed" | "minimized";
//   let wind:WindowStates="closed"


// function getLength(obj: string | string[] | number[] | object) {
//     console.log(typeof (obj))
//     return obj;
// }
// let abc = getLength("awweer")
// let ab = getLength(["a", "d"])
// let a = getLength([1, 23, 4])
// let a1 = getLength({a:"111"})
// let abcd: string = "sss"
// console.log(abc, "--", ab, "--", a,'--',a1)


// interface Point {
//     a?: string                    //by the use of ? sign we make this elememt optional
//     x: number;
//     y: number;
//     z: string[];
// }
// const point: Point = { x: 12, y: 26, z: ["aaa"] };
// console.log(point)



// class VirtualPoint {
//     x: number;
//     y: number;
//     z?:number
//     constructor(x: number, y: number) {
//       this.x = x;
//       this.y = y;
//     }
//   }
   
//   const newVPoint = new VirtualPoint(13, 56);
//   console.log(typeof(newVPoint)); // logs "13, 56"


let a: number[] = [1, 2, 3, 4];
let ro: ReadonlyArray<number> = a;
console.log(ro)