// var
// 3a
let message='Coding is great';
console.log(message);
// 3b
let studentCount=0;
console.log(studentCount);
// 4a
message='Coding might not be easy, but still great';
console.log(message);
// 4b
studentCount=16;
console.log(studentCount);
// 4c
message=message.toLowerCase();
console.log(message);
// 4d
studentCount++;
console.log(studentCount);
// 5
alert('you look beautiful today');
// 6
let name=prompt('your name pls?');
alert(`hi ${name}`);
// 7
let First=prompt('your first name?');
let Last=prompt('your last name?');
alert(`hi ${Last} ${First}`);
// 8
let square=prompt('type a square length');
alert(`the square area is${square**2}`);
// 9
let rad=prompt('type a circle radius');
let S=(rad**2)*Math.PI;
alert(`the circle area is ${Math.round(S)}.0`);
// 10
let C=prompt('type temperaturen in Celcius');
let F=(C*9/5)+32;
alert(`${C} (C) = ${F} (F)`);

// loop
// 3a
for(let i=0;i<7;i++){
    console.log(i);
};
// 3b
let n=Number(prompt('Enter a number?'));
for(let i=0;i<n;i++){
    console.log(i);
};
// 3c
n=Number(prompt('Enter n'));
for(let i=3;i<n;i++){
    console.log(i);
};
// 3d
n=Number(prompt('Enter n'));
let c=Number(prompt('Enter c'));
for(let i=c;i<n;i++){
    console.log(i);
};
// 3e
n=Number(prompt('Enter n'));
c=Number(prompt('Enter c'));
for(let i=c;i<n;i+=3){
    console.log(i);
};
// 3f
n=Number(prompt('Enter n'));
c=Number(prompt('Enter c'));
let s=Number(prompt('Enter s'));
for(let i=c;i<n;i+=s){
    console.log(i);
};
// 4
n=Number(prompt('Enter n'));
let result=1;
for(let i=1;i<n+1;i++){
    result*=i;
};
alert(`the factorial of ${n} is ${result}`);
// 5
let age=prompt('How old are you?');
if(age>=14){
    alert('you are old enough');
} else{
    alert('you are too young');
};
// 6
let x=prompt('type a number');
if(x>=0&&x<=4){
    alert('lower half of 9');
}else if(x>=5&&x<=9){
    alert('higher half of 9');
};
// 7
n=prompt('Enter n');
x=prompt('Enter x');
if(x<n/2){
    alert('lower half');
} else if(x>=n/2){
    alert('higher half');
};
// 8
x=prompt('Enter x');
if(x%2==1){
    alert('odd');
} else{
    alert('even');
};
// 9a
for(let i=0;i<3;i++){
    console.log('L');
};
for(let i=0;i<3;i++){
    console.log('H');
};
// 9b
n=prompt('Enter n');
for(let i=0;i<n;i++){
    console.log('L');
};
for(let i=0;i<3;i++){
    console.log('H');
};
// 9c
for(let i=0;i<4;i++){
    console.log(0);
    console.log(1);
};
// 9d
n=prompt('Enter n');
for(let i=0;i<n;i++){
    if(i%2==1){
        console.log(1);
    } else{
        console.log(0);
    };
};
// 10
let weight=prompt('type your weight');
let height=prompt('type your height in cm');
let BMI=weight/((height/100)**2);
alert(`your BMI is ${Math.round(BMI)}`);
if(BMI<16){
    alert('you are severely underweight');
} else if(BMI<18.5){
    alert('you are underweight');
} else if(BMI<25){
    alert('you are fine');
} else if(BMI<30){
    alert('you are overweight');
} else {
    alert('you are obese');
}
// 11
// clear(); 
//  for(i=0;i<4;i++){  
//     fd(100);  
//     rt(90);  
// };
// clear(); 
//  for(i=0;i<3;i++){  
//     fd(100);  
//     rt(120);  
// };
// clear(); 
//  for(i=0;i<5;i++){  
//     fd(100);  
//     rt(72);  
// };
// clear(); 
//  for(i=0;i<6;i++){  
//     fd(100);  
//     rt(60);  
// };
// 12
// let edge=prompt('enter number of edge');
// clear(); 
//  for(i=0;i<edge;i++){  
//     fd(360/edge);  
//     rt(360/edge);
// };
// 13
// let poly=prompt('enter number of poly');
// let edge=3;
// clear() 
// for(let i=0;i<poly;i++){
//     for(let i=0;i<edge;i++){  
//         fd(50);  
//         rt(360/edge);  
//     };
//     edge++
// };