// // 1 1d 2a 3c 4b
// 2
// setInterval(() => { console.log('g') }, 3000);

// 3.1 no
// 3.2 no

// 4
// const Li = document.getElementsByTagName('li');
// console.log(Li[0]);
// for (let i = 0; i < Li.length; i++) {
//     console.log(Li[i]);
// };

// 5
// const div = document.getElementsByClassName('singer');
// console.log(div[1]);
// for (let i = 0; i < div.length; i++) {
//     console.log(div[i]);
// };

// 6
// document.getElementsByClassName('singer')[1].remove();

// 7.1
// let btn1 = document.getElementById('btn1');
// let btn2 = document.getElementById('btn2');
// btn1.addEventListener('click', (e) => {
//     console.log(e.target);
// });
// btn2.addEventListener('click', (e) => {
//     console.log(e.target);
// });
// 7.2
// document.getElementById('input').addEventListener('keydown', (e) => {
//     console.log(e.key);
// });

// 8
// function wish(){
//     alert('my name is Ky\ni wish to survive this year');
// };
// wish();

// 9,10
// function wish_with_par(name,wish){
//     if(wish==undefined){
//         alert('my name is ' + name + '\n' + 'i dont have a wish');
//     } else{
//         alert('my name is ' + name + '\n' + wish);
//     }
// };
// wish_with_par('Ky','i wish to survive this year');
// wish_with_par('Ky');

// 11
// const upper_btn = document.getElementById('upper_btn');
// const name_input = document.getElementById('name_input');
// const result_div = document.getElementById('result_div');
// upper_btn.addEventListener('click',() => {
//     let username = name_input.value;
//     result_div.innerHTML = username.toUpperCase();
// });

// 12
// let items = ['Backpack','MiBand watch','Ring'];
// console.log(items);
// const list = document.getElementById('item_list_ul');
// // function để cập nhật trang html theo danh sách items
// function update_list(){
//     list.innerHTML = '';
//     for (let i = 0; i < items.length; i++) {
//         list.insertAdjacentHTML("beforeend",`<li><span>${items[i]} </span><button class="remove_btns">Remove</button></li>`);
//     };
//     // gắn thêm eventlistener vào từng item
//     const remove_btns = document.getElementsByClassName('remove_btns');
//     for (let i = 0; i < remove_btns.length; i++) {
//         remove_btns[i].addEventListener('click',() => {
//             items.splice(i,1);
//             console.log(items);
//             update_list();
//         });
//     };
// }
// update_list();
// // phần thêm vào list
// const add_btn = document.getElementById('add_btn');
// const item_input = document.getElementById('item_input');
// add_btn.addEventListener('click',() => {
//     let new_item = item_input.value;
//     // kiểm tra nếu người dùng để trống thì ko cho vào list
//     if(new_item==''){
//         alert('pls dont leave it blank');
//     } else{
//         items.push(new_item);
//         update_list();
//         item_input.value = '';
//         console.log(items);
//     };
// });