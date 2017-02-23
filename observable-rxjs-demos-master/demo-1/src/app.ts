import { Observer } from 'rxjs/Observer';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';

console.clear();

let stream$ = new Observable((observer) => {
  let count= 0;
  let interval = setInterval(() => {
    observer.next(count++);
  }, 2000)

  return ()=>{
    clearInterval(interval)
  }
})


let stream2$ = new Observable((observer) => {
  let count=0;
  let interval= setInterval(() => {
    observer.next(count++);
  }, 1000)

  return () => clearInterval(interval);
})

// other example - change color
// let myVar = setInterval(function(){ setColor() }, 300);

// function setColor() {
//     const x = document.body;
//     x.style.backgroundColor = x.style.backgroundColor == "yellow" ? "pink" : "yellow";
// }

// function stopColor() {
//     clearInterval(myVar);
// }

// stream$ 
//     .subscribe(value => console.log(value)


// ---0-1-2-3-4-5-6-->


// with the FILTER operator  --> 
// stream$
//    .filter((value: number) => value % 2 === 0)
//    .subscribe(value => console.log(value))

// ---0-1-2-3-4-5-6-->
//         filter
// ---0---2---4---6-->


// with the MAP operator
// stream$
//   .map((value: number) => value * 10)
//   .subscribe(value => console.log(value))

// ---0-1-2-3-4-5-6-->
//         map
// ---0-10-20-30-40-50-60-->


// with the SCAN operator
// stream$
//   .scan((x: number,y: number) => x + y)
//   .subscribe(value => console.log(value))

// ---0-1-2-3-4-5-6-->
//         scan
// ---0-1-3-6-10-15-21-->


//#region Example 1
// let promise = new Promise(resolve => {
//     setTimeout(() => {
//         resolve('promise timeout');
//     }, 2000)
// });

// promise.then(value => console.log(value));

// let stream1$ = new Observable(observer => {
//     let timeout = setTimeout(() => {
//         observer.next('observable timeout');
//     }, 2000);

//     return () => {
//         clearTimeout(timeout);
//     }
// });

// let disposable = stream1$.subscribe(value => console.log(value));
// setTimeout(() => {
//     disposable.unsubscribe();
// }, 1000);
// //#endregion

// //#region Example 2
// let stream2$ = new Observable(observer => {
//     let count = 0;
//     let interval = setInterval(() => {
//         observer.next(count++);
//     }, 1000);

//     return () => {
//         clearInterval(interval);
//     }
// });

// // stream2$
// //   .filter(value => value % 2 == 0)
// //   .subscribe(value => console.log(value));

// // ----1----2----3----4--->
// //          filter
// // ---------2---------4--->

// // stream2$
// //   .map(value => value * value)
// //   .subscribe(value => console.log(value));
  
// // ----1----2----3----4--->
// //      map => x * x
// // ----1----4----9----16--->
// //#endregion

// //#region Example 3
// let incrementBtn = document.getElementById('increment');
// let decrementBtn = document.getElementById('decrement');
// let counter = document.getElementById('counter');

// let incrementClick$ = Observable.fromEvent(incrementBtn, 'click');
// let decrementClick$ = Observable.fromEvent(decrementBtn, 'click');

// let clicks$ = Observable
//     .merge(incrementClick$, decrementClick$)
//     .map((event: any) => parseInt(event.target.value, 10));

// let total$ = clicks$
//     .scan((total, value) => total + value, 0);

// total$.subscribe(total => {
//     counter.innerText = total.toString();
// });

// ----i------------------>
// -------d---------d----->
//          merge
// ----i--d---------d----->
//           map
// ----p--n---------n----->
//           scan
// 0---1--0-------(-1)---->
//#endregion