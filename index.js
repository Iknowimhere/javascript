// let chocolatePrice=20;
// let quantity=10;
// let res=`The total price of ${quantity} chocolates is ${chocolatePrice*quantity}`;
// console.log(res);



// let a='hello world';
// let a='200';
// console.log(a.slice(-5,-3));
// console.log(a.substring(0,7));
// console.log(a.substring(-5,-3));
// console.log(a.indexOf('l'));
// console.log(a.lastIndexOf('l'));
// console.log(a.length);
// console.log(a.charAt(2));
// console.log(a.concat('hello'));
// console.log(a.charCodeAt(2));
// console.log(a.includes('hell'));
// console.log(a.padStart(6,'₹'));
// console.log(a.padEnd(6,'₹'));
// let a='hello world';
// console.log(a.split(' '));
// let a='hello world';
// console.log(a.endsWith('d'));
// console.log(a.startsWith('d'));

// //unary operator typeof
// let a=100; 
// console.log(typeof a);

//numbers--64bit floating point number
// let a=100;
// console.log(a);
// let b=100.00;
// console.log(b);
// let c=Number.MAX_VALUE+100;
// let d=Number.MIN_VALUE;
// console.log(c);
// console.log(d);
// let c=Number.MAX_SAFE_INTEGER
// console.log(c);
// let d=9999999999999999
// console.log(d);


//bigint
// let a=99999999999999999999999n;
// let b=BigInt(99999999999999999999999);
// let c=100n;
// console.log(typeof a);
// console.log(typeof b);
// console.log(a+c);

//boolean
// let a=5>3;
// console.log(a);

// let b=undefined;
// console.log(b);

// let c=null;   //typeof null is object
// console.log(b);

// console.log(undefined==null);
// console.log(undefined===null);
// console.log(typeof b);
// console.log(typeof c);

//symbol--unique identifier--objects
// let a=Symbol('hello');
// let b=Symbol('hello');
// console.log(a);

// console.log(a==b);
// console.log(a===b);

//type conversion
//string conversion
//number conversion
//boolean conversion

// let a=100;
// console.log(typeof a);

// let b=String(a);
// console.log(typeof b);

// let c=999n;
// console.log(typeof c);
// let d=String(c)
// console.log(d);
// console.log(typeof d);

// let a=5>3;
// let b=String(a)

// console.log(b);

// let a=null
// console.log(typeof a);
// let b=String(a);
// console.log(b);

// let a=undefined;
// console.log(typeof a);
// let b=String(a);
// console.log(b);

// let a=Symbol('hello')
// console.log(typeof a);
// let b=String(a);
// console.log(b);




//number conversion
// let a='100';
// let b=100;
// console.log(a==b); //== number conversion
// console.log(a===b);

// let a='five';
// let b=Number(a)
// console.log(a);  //five
// console.log(b); //NaN  --not a number

// console.log(typeof b);
// console.log(isNaN(b));



// let userInput=prompt('enter a number');

// if(!isNaN(userInput)){
//     console.log(userInput*2);
// }
// console.log('please enter a valid number');

// let a=999n;
// console.log(a);
// console.log(Number(a));

//boolean conversion

// let a=0;
// let b=Boolean(a)
// console.log(b);

// let a='hello'
// let b=Boolean(a)
// console.log(b);


// let a=0n;
// let b=Boolean(a)
// console.log(b);

// let a=null
// let b=Boolean(a)
// console.log(b);

// let a=undefined
// let b=Boolean(a)
// console.log(b);

// console.log(null==undefined);

// let a=Symbol('');
// let b=Boolean(a)
// console.log(b);


//operators
//arithmetic operators + - * / % **
//logical operators && || !
//comparison operators > < >= <= != === !== ==
//assignment operators += -= *= /= %= =
//bitwise operators & | ^ ~ << >> >>>
//ternary operators ? :
//unary operators typeof ++ -- - + delete

// let a=1+3/2*4;   //order of precedence
// console.log(a);//left associativity rule

// let b=2**3;
// console.log(b);

// let a=4/3;
// let b=4%3;
// console.log(a);
// console.log(b);

// let a=5>3 && 2<3;
//falsy values
// let a="hello" && 5>3 && "0";
// console.log(a); //0 in a string

//truthy values
// let a="" || "" ||null;
// console.log(a);

//not operator
// let a=!true;
// console.log(a);

//data in boolean
// let a="hello";
// let b="";
// console.log(!!a);
// console.log(!!b);


// let a='5'
// let b=5;
// console.log(a==b);  //true
// console.log(a===b);  //false

// let a=3
// let b=5;
// console.log(a!=b); 
// console.log(a!==b);


// let price=100;
// let gst=0.18
// // price = price + (price * gst);
// price += price * gst;
// console.log(price);

//ternary operator
// let a=5<3 ? 'hello' : 'bye';
// console.log(a);


// let a='3';
// let b=Number(a);
// console.log(typeof +a);

// let b="hello"
// let c="world"
// console.log(b+c);

// let a='3'
// let b='5'
// console.log(a+b);
// console.log(a-b);
// console.log(a*b);


// let a=3+5+'2'  //plus operator concatenates the strings
// console.log(a);


// let a=5;
// a++;
// console.log(a);

// let a=5;
// a--;
// console.log(a);


//conditional statements
//if else
//if else else if
//switch

// if(0){
//     console.log('hello');
// }else if(0){
//     console.log('bye1');
// }else{
//     console.log('bye2');
// }

// switch("monday"){
//     case "monday":
//         console.log('hello');
//         break;
//     case "tuesday":
//         console.log('bye');
//         break;
//     default:
//         console.log('default');
// }


//loop statements
//for  -- no of iterations is known
//while --- no of iterations is unknown
//do while ---  no of iterations is unknown but executes at least one time



// for(let i=0;i<10;i++){
//     console.log(i);
// }

// while(true){
//     console.log('hello');
// }

// let i=0;
// while(i<10){
//     console.log(i);
//     i++;
// }

// let i=0;
// do{
//     console.log(i);
//     i++;
// }while(i>10);

//functions--objects
//it a block of code can be excuted multiple times it reduces code redundancy

