// 1
// let myPromise = new Promise(function(resolve, reject){
//     resolve(setTimeout(() => {console.log("Promise is the best")},2000));
//     // reject(setTimeout(() => {console.log("Promise is the best")},2000));
// });
// console.log(myPromise);

// async function load(){
//     const conn = await fetch('https://pokeapi.co/api/v2/pokemon/pikachu/');
//     const data = await conn.json();
//     return data;
// }
// console.log(load());

// let myPromise = new Promise(function(resolve,reject){
//     resolve();
// })
// myPromise.then(function(success){
//     console.log('success')
// })

// 2
// const fetchProm = fetch('https://pokeapi.co/api/v2/pokemon/pikachu/');
// fetchProm.then(connect => {
//     console.log('connected');
//     console.log(connect);
//     const data = connect.json();
//     console.log(data);
// })

// 4
// function random1_10(){
//     return Math.floor(Math.random()*11);
// };
// const x = random1_10();
// if (x < 0) {
// console.log('Failed: the number is smaller than 0');
// } else if (x > 10) {
// console.log('Failed: the number is bigger than 10');
// } else {
// console.log('Passed, bravo');
// };

// 5
// function randoma_b(a,b){
//     return Math.floor(Math.random()*(b-a+1)+a);
// };
// const x = randoma_b(4, 16);
// if (x < 4) {
// console.log('Failed: the number is smaller than 4');
// } else if (x > 16) {
// console.log('Failed: the number is bigger than 16');
// } else {
// console.log('Passed, bravo');
// }

// 6
// function distance(x1,y1,x2,y2){
//     return Math.sqrt((x1-x2)**2 + (y1-y2)**2)
// }
// const d = distance(3, 10, 0, 6);
// if (d !== 5) {
// console.log('Failed: the calculation is wrong');
// } else {
// console.log('Passed, bravo');
// }

// 7
// async function load(){
//     const conn = await fetch('http://quotes.rest/qod.json');
//     const data = await conn.json();
//     return data;
// }
// load().then((success)=>{
//     console.log(success);
//     console.log(success.contents.quotes[0]);
//     document.getElementById('quote').innerHTML = (success.contents.quotes[0].quote);
//     document.getElementById('author').innerHTML = (success.contents.quotes[0].author);
// });

// 8
