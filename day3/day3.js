// 1
let a=5;
let b=6;
console.log(a,b);
let temp=a;
a=b;
b=temp;
console.log(a,b);

[a,b]=[b,a];
console.log(a,b);

// 2
let str='hi there how is going';
a=str.split(' ');
console.log(a);
// 3
a=[1,2,3,4];
console.log(...a);
// 4
let store=['Jeans','T-shirt','Socks'];
function call(){
    let choice=prompt('hi, welcome to the shop, what do you want (C, R, U, D)');
    if (choice.toLowerCase()=='r'){
        console.log('here are the current item:');
        for(let i=0;i<store.length;i++){
            console.log(`${i+1}. ${store[i]}`);
        };
    } else if(choice.toLowerCase()=='c'){
        let c=prompt('enter new item');
        store.push(c);
        alert('done');
    } else if(choice.toLowerCase()=='u'){
        let n=prompt('enter the pos u want to update');
        let u=prompt('enter update item');
        store[n-1]=u;
        alert('done');
    } else if(choice.toLowerCase()=='d'){
        let d=prompt('enter pos to delete');
        store.splice(d-1,1);
        alert('done');
    } else{
        alert('this command is not right');
    };
}
// 5
let n=prompt('enter a sequence of number sep by com');
let num=n.split(',');
let res=0;
for(let i=0;i<num.length;i++){
    res+=Number(num[i]);
};
alert(`the sum is ${res}`);
// 6
n=prompt('enter a sequence of number sep by com');
num=n.split(',');
let min=num[0];
for(let i=0;i<num.length;i++){
    if(Number(min)>Number(num[i])){
        min=num[i];
    };
};
alert(`the smallest number is ${min}`);
// 7
const arr=[69,420,9,54,78,0];
n=prompt('enter a number to search');
if(arr.indexOf(Number(n))==-1){
    alert(`${n} is not found`);
} else{
    alert(`${n} is found at index ${arr.indexOf(Number(n))}`);
};
// 8
let flock=[5,7,300,90,24,50,75];
function inc(value){
    return value+50;
};
for(let i=0;i<4;i++){
    console.log('this is my flock');
    console.log(...flock);
    let max=Math.max.apply(null,flock);
    console.log(`the biggest size is ${max}`);
    flock[flock.indexOf(max)]=8;
    console.log('after shear this is my flock');
    console.log(...flock);
    console.log(`Month ${i+1}`);
    flock=flock.map(inc);
};
console.log('this is my flock');
console.log(...flock);
res=0;
for(let i=0;i<flock.length;i++){
    res+=Number(flock[i]);
};
console.log(`my flock have total ${res}`);
console.log(`i would get ${res} * 2$ = ${res*2}`);

// // 9
// let cor=['red', 'gray', 'blue', 'purple', 'cyan'];
// clear(); 
//  for(let i=1;i<cor.length;i++){  
//     color(cor[i]);
//     for(let n=0;n<4;n++){
//         fd(25*(i+1));  
//         rt(90);  
//     }
// };