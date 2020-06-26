// 1.1 property
// 1.2
const product = {
    name: 'Xiaomi rice cooker',
    price: 1700,
    brand: 'Xiaomi',
    color: 'white',
};
for (let x in product) {
console.log(`${x}: ${product[x]}`);
}
// 2
const task = {
    subject: 'Implement login feature',
    createdBy: 'Hoang Ngoc Duc',
    assignTo: 'Nguyen Phuong Nam',
    dueDate: '2019-10-08T18:00:24+0000',
    expectedHours: 0.5,
};
let {subject, dueDate,assignTo}=task;
console.log(subject,dueDate,assignTo);
// 3.1 object
// 3.2 arrays
// 3.3 console.log(jobsearch.hits[1].locations);
// 4
let dic={
    debug:'The process of figuring out why your program has a certain error and how to fix it',
    done:'When your task is complete, the only thing you have to do is to wait forusers to use it (no additional codes or actions needed)',
    defect:'The formal word for ‘error’',
    pm:'The short version of Project Manager, the person in charge of the final result of a project',
    'ui/ux':'UI means User Interface, UX mean User Experience, are the process to define how your products looks and feels',
};
function diction(){
    let keyword=prompt('enter a keyword');
    if(dic[keyword]==undefined){
        dic[keyword]=prompt(`can't find ${keyword}, add an explain?`);
    } else{
        alert(`${keyword} \n${dic[keyword]}`);
    }
}
alert('hi, this is a dictionary');
// 5
let products={
    name:['Xiaomi portable charger 20000mah','VSmart Active 1','IPhone X','Samsung Galaxy A9'],
    price:[428,5487,21490,8490],
    brand:['Xiaomi','VSmart','Apple','Samsung'],
    category:['Charger','Phone','Phone','Phone'],
    color:['White','Black','Gray','Blue'],
    provider:['Phukienzero Dientuccc','Tgdd Ddghn VhStore','Tgdd','Tgdd'],
}
for(let i=0;i<4;i++){
    console.log(`#${i+1}. ${products['name'][i]} \n    Price: ${products['price'][i]}`);
};
let num=prompt('enter a product num');
for(let x in products){
    console.log(`${x}: ${products[x][num-1]}`);
};
let cate=prompt('enter a category');
for(let i=0;i<4;i++){
    if(products['category'][i]==cate){
        console.log(`#${i+1}. ${products['name'][i]} \n    Price: ${products['price'][i]}`);
    }
}
// 6
let tasks={
    tasktodo:['git','html','css'],
    complete:['False','False','False'],
};
function printout(){
    console.clear();
    for(let i=0;i<tasks['tasktodo'].length;i++){
        console.log(`#${i+1}. ${tasks['tasktodo'][i]} \n    Complete: ${tasks['complete'][i]}`);
    };
}
printout();
function call(){
    let choice=prompt('hi, this is task, enter command (New, Delete, Update, Complete)');
    if (choice.toLowerCase()=='complete'){
        let n=prompt('enter the pos u want to com');
        tasks['complete'][n-1]='True';
        printout();
    } else if(choice.toLowerCase()=='new'){
        let n=prompt('enter new task');
        tasks['tasktodo'].push(n);
        tasks['complete'].push('False');
        printout();
    } else if(choice.toLowerCase()=='update'){
        let n=prompt('enter the pos u want to update');
        let u=prompt('enter update task');
        tasks['tasktodo'][n-1]=u;
        tasks['complete'][n-1]='False';
        printout()
    } else if(choice.toLowerCase()=='delete'){
        let d=prompt('enter pos to delete');
        tasks['complete'].splice(d-1,1);
        tasks['tasktodo'].splice(d-1,1);
        printout();
    } else{
        alert('this command is not right');
    };
}

// 7
// clear()
// const pos = {
//     x: 200,
//     y: 50,
// }
// penup()
// rt(90)
// fd(pos['x'])
// lt(90)
// fd(pos['y'])
// 8
// clear()
// const square = {
//     x: 100,
//     y: 50,
//     width: 20,
// };
// function move(x,y){
//     penup()
//     rt(90)
//     fd(x)
//     lt(90)
//     fd(y)
//     pendown()
// }
// move(square['x'],square['y'])
// for(let n=0;n<4;n++){
//     fd(square['width']);  
//     rt(90); 
// };
// 9
// clear()
// const rect = {
//     x: 100,
//     y: 50,
//     width: 20,
//     height: 40,
// };
// function move(x,y){
//     penup()
//     rt(90)
//     fd(x)
//     lt(90)
//     fd(y)
//     pendown()
// }
// move(rect['x'],rect['y']);
// for(let n=0;n<2;n++){
//     fd(rect['height']);  
//     rt(90);
//     fd(rect['width']);
//     rt(90);
// };
// 10
// clear()
// function move(x,y){
//     home()
//     penup()
//     rt(90)
//     fd(x)
//     lt(90)
//     fd(y)
//     pendown()
// }
// function rec(h,w){
//     for(let n=0;n<2;n++){
//         fd(h);  
//         rt(90);
//         fd(w);
//         rt(90);
//     };
// }
// function sq(w){
//     for(let n=0;n<4;n++){
//         fd(w);  
//         rt(90); 
//     };
// }
// const cmds = [
//     {
//         shape: 'square',
//         x: 20,
//         y: 40,
//         width: 50,
//     },
//     {
//         shape: 'rect',
//         x: 8,
//         y: 70,
//         width: 12,
//         height: 40,
//     },
//     {
//         shape: 'rect',
//         x: 70,
//         y: 70,
//         width: 12,
//         height: 40,
//     },
//     {
//         shape: 'rect',
//         x: 10,
//         y: 20,
//         width: 70,
//         height: 20,
//     },
//     {
//         shape: 'square',
//         x: 25,
//         y: 40,
//         width: 14,
//     },
//     {
//         shape: 'square',
//         x: 33,
//         y: 42,
//         width: 6,
//     },
//     {
//         shape: 'square',
//         x: 50,
//         y: 40,
//         width: 14,
//     },
//     {
//         shape: 'square',
//         x: 58,
//         y: 42,
//         width: 6,
//     },
//     {
//         shape: 'square',
//         x: 40,
//         y: 25,
//         width: 8,
//     },
//     {
//         shape: 'square',
//         penWidth: 1,
//         x: 500,
//         y: 500,
//         width: 15,
//     },
// ]
// for(let i=0;i<cmds.length;i++){
//     let n=cmds[i]
//     if(n['shape']=='square'){
//         move(n['x'],n['y'])
//         sq(n['width'])
//     } else if(n['shape']=='rect'){
//         move(n['x'],n['y'])
//         rec(n['height'],n['width'])
//     }
// }