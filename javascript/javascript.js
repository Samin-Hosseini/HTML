// const alertMyMsg=(msg)=>{
//     alert(msg)
// }

// const writeHello=()=>{
//     document.getElementById("emptySpace").innerHTML="HelloJs";
//     document.getElementById("emptySpace").style.color="blue"
// }

// const exampleVar=()=>{
//     var x=10;
//     if(true){
//         var x=30;
//         console.log(x);
//     }
//     console.log(x)
// }


// const exampleLet=()=>{
//     let y =10;
//     console.log(y);
//     if(true){
//         let y=20;
//         console.log(y);
//     }
//     console.log(y);
// }

// const exampleConst=()=>{
//     const x=20;
//     // z=40;
//     const obj={name:"sana"};
//     obj.name="samin";
//     console.log(obj);
// }

// const stringInt=()=>{
//     var x=10;
//     var y=22;
//     console.log(x%=y)
// }

// const checklog=()=>{
//     let x=null;
//     let y=5;
//     x ||= y
//     console.log(x);
// }

// const checkX=()=>{
//     let x=undefined;
//     let y=20;
//     x ??=y
//     console.log(x);
// }

// const testObjects=()=>{
//     // const person={
//     //     firstName:"samin",
//     //     lastName:"hosseini",
//     //     age:22,
//     // }
//     const person2={};
//     person2.firstName="sana";
//     person2.lastName="hosseini";
//     person2.age=18;
//     // console.log(person2)
//     delete person2.age;
//     console.log(person2)
//     // console.log(person)
// }

// const nestedObject=()=>{
//     const myObj={
//         name:"samin",
//         age:30,
//         classes:{
//             class1:"front",
//             class2:"back-end",
//             class3:"security"
//         }
//     }
//     console.log(myObj.classes.class1)
// }

// const functionItemObjectExample=()=>{
//     const functionObj={
//         firstName:"samin",
//         lastName:"hosseini",
//         id:12345
//         // fullName:function(){
//         //     return(this.firstName+""+this.lastName).toUpperCase()
//         // }
//     }
//     for(let x in functionObj){
//         console.log(functionObj[x])
//     }
//     // console.log(functionObj.fullName())
//     // document.getElementById("emptySpace").innerText=functionObj.fullName()
// }

// const fillMyListViaObject=()=>{
//     const Colors={
//         color1:"red",
//         color2:"blue",
//         color3:"yellow",
//     }
//     const listForm=document.getElementById("colors");
//     for(let x in Colors){
//         const option=document.createElement('option');
//         option.value=Colors[x];
//         listForm.appendChild(option);
//     }
// }

// const ArrayFunction=()=>{
//     const myObjct={
//         name:"samin",
//         age:22,
//         city:"Urmia"
//     }
//     const person40=[
//         "item1",
//         "item2",
//         "item3",
//     ]
//     // console.log(person40)
//     // console.log(person40[1])
//     const myArray=Object.values(myObjct);
//     // console.log(myArray);
//     console.log(person40.length);
// }

// const fillMyListViaArray=()=>{
//     const Phones=[
//         "phone1","phone2","phone3",1234
//     ]
//     // console.log(Phones.length);
//     const listForm=document.getElementById("colors");
//     for(let x=0 ; x<Phones.length ; x++){
//         const option=document.createElement('option');
//         option.value=Phones[x];
//         listForm.appendChild(option)
//     }
//     console.log(JSON.stringify(Phones));
// }

// const createObject=()=>{
//     function Persons(first,last,age,eye){
//         this.firstName=first;
//         this.lastName=last;
//         this.age=age;
//         this.eyeColor=eye;
//     }
//     const myPersons1=new Persons("samin","hosseini",22,"brown")
//     console.log(myPersons1)
// }


// const example1=()=>{
//     const myObject=new Object();
//     myObject.firstName="samin";
//     myObject.lastName="hosseini";
//     myObject.age=22;
//     console.log(myObject)
// }


// const example2=()=>{
//     const myArray=new Array();
//     myArray[0]="samin";
//     // myArray[1]="hosseini";
//     myArray[2]=30;
//     console.log(myArray);
// }


// const example3=()=>{
//     const myMap=new Map();
//     myMap.set('name','samin');
//     myMap.set('age',22);
//     myMap.set('job','computer eng');
//     console.log(myMap);
//     const objKey={id:1};
//     myMap.set(objKey,"this is my object key");
//     console.log(myMap);
//     console.log(myMap.get('name'));
//     console.log(myMap.has('sana'));
//     console.log(myMap.size)

// }     

// const fillMyListViaMap=()=>{
//     const foodMap=new Map();
//     foodMap.set('menu1','soup');
//     foodMap.set('menu2','drink');
//     foodMap.set('menu3','desert');
//     const listForm=document.getElementById("colors");
//     for (let [key,value] of foodMap){
//         const option=document.createElement('option');
//         option.value=[value];
//         listForm.appendChild(option)
//     }
// }


// const example4=()=>{
//     const mySet=new Set();
//     mySet.add(1);
//     mySet.add("samin");
    
//     console.log(mySet);
//     mySet.add({id:1234});
//     console.log(mySet.has(1));
// }

// const example5=()=>{
//     const colorMap=new Map();
//     colorMap.set('book1','blue');
//     colorMap.set('book2','red');
//     colorMap.set('book3','green');
//     const listForm=document.getElementById("colors");
//     for (let [key,value] of colorMap){
//         const option=document.createElement('option');
//         option.value=[value];
//         listForm.appendChild(option)
//     }
// }


// const fillMyListViaSet=()=>{
//     const mySet=new Set();
//     mySet.add(2);
//     mySet.add("samin");
//     mySet.add("hosseini");

//     const formList=document.getElementById("colors");
//     for (let item of mySet){
//         const option = document.createElement('option');
//         option.value=item;
//         formList.appendChild(option);
//     }
//     mySet.clear();
//     console.log(mySet);
// }


// const testRepetedvalues=()=>{
//     const numbers = [1,1,2,2,3,4,5];
//     const uniqueNumbers1 = new Set(numbers);
//     const uniqueNumbers2 = [...new Set(numbers)]
//     console.log(numbers);
//     console.log(uniqueNumbers1);
//     console.log(uniqueNumbers2)
// }


// const testDate=()=>{
    // const currentdate = new Date();
//     // console.log(currentdate)

    // const specificdate = new Date(2001,11,18,8,30);
//     // console.log(specificdate);

    // const current = new Date();
    // console.log(current.getFullYear());
    // document.getElementById("emptySpace").innerText=current.getMinutes();

    // const timestamp= Date.now()
    // console.log(timestamp);

//     const date=new Date();
//     document.getElementById("emptySpace").innerText=date.toDateString();
//     console.log(date.toDateString());
//     console.log(date.toLocaleDateString());
// }


// const testRegexp=()=>{
//     // const regex = new RegExp('Hello','i');
//     // console.log(regex.test('apple'));

//     // const testString="Hello , world";
//     // const match = testString.match(regex);
//     // console.log(match);

//     // const regex2 = /hello/;
//     // const text="Hello, world! hello again!";
//     // console.log(regex2.test(text))
// }

// const testSecurePass=()=>{
//     const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/; 
//     document.getElementById("passWord").value;
//     if(passRegex.test(password)){
//         alert("secure")
//     }else{
//         alert("unsecure")
//     }
// }


const testNewFunction=()=>{
    // const add=new Function('a','b','return a+b');
    // console.log(add(2,'5'))
}

const testNewFunction1=()=>{
    // const turnToUpperCase= new Function('str','return str.toUpperCase()');
    // const result= turnToUpperCase('Hello class');
    // console.log(result)
}

// const testNewFunction2=()=>{
//     const complicatedFunc= new Function('a','b','return alert(a+b),console.log(a+b)');
//     complicatedFunc('hi',22);
// }


// const testNewFunction3=()=>{
//     const operation='multiply';
//     const calculate=new Function('x','y',' return a ')
// }

// const handleGetData=()=>{
//     alert('I learn onclick');
// }

// const handleChange=()=>{
//     alert("input changed");
//     alert('changed to :' + document.getElementById("inputTXT").value);
// }

// const handleMouseOver=()=>{
//     document.getElementById("mouseOverText").style.backgroundColor="pink";
//     document.getElementById("status").innerText="mouse over"
// }

// const hanleMouseOut=()=>{
//     document.getElementById("mouseOverText").style.backgroundColor="";
//     document.getElementById("status").innerText="mouse out"
// }

// const handleKeyDown=(event)=>{
//     alert('key pressed :' + event.key)
//     if(event.key === 'Enter'){
//         console.log("get data");
//     }
// }

// window.onload= function (){
//     alert("page has loaded")
// }


// const testTemplateString=()=>{
//     let x = 244;
//     let name = `${x} is a number`;
//     alert(name)
// }


const testStringMethod=()=>{
    // let text1="ABCDEFG";
    // let length=text1.length;
    // console.log(length)

    // let text2="Hello World";
    // let char2= text2.charAt(0);
    // console.log(char2);

    // let text3= "Hello World";
    // let char3= text3.charCodeAt(0);
    // console.log(char3)

    // const name2="Hello";
    // let letter=name2.at(1);
    // console.log(letter);


    // const name3="Hello";
    // let letter3=name3[0];
    // console.log(letter3)

    // let text= "Hello World";
    // text[0]="A";
}


const testSlice=()=>{
    // let text1="AppleBananaKiwi";
    // let part1=text1.slice(7,13);
    // console.log(part1);

    // let text2="Apple, Banana, Kiwi";
    // let part2=text2.slice(7);
    // console.log(part2);

    // let text="Apple, Banana, Kiwi";
    // let part=text.slice(-12,-6);
    // console.log(part);
}


const testSubstring=()=>{
    // let text1="AppleBananaKiwi";
    // let part1=text1.substring(7,13);
    // console.log(part1);
    // alert(part1);
}


const textUplow=()=>{
    // let text1= "HI SMART STUDENTS";
    // let mytxt= text1.toUpperCase();
    // let mytxt= text1.toLowerCase();
    // console.log(mytxt);
}


// const testConcat=()=>{
//     let text= "Hello"+"T"+"World";
//     let myTXT= "Hello".concat("S","world!");
//     console.log(text);
//     console.log(myTXT);
// }


// const testTrim=()=>{
//     let text1= "      Hello world!     ";
//     let text2= text1.trim();
//     let text3= text1.trimStart();
//     let text4= text1.trimEnd();
//     console.log(text1.length);
//     console.log(text2.length)
// }


// const testPad=()=>{
//     let text="51234567";
//     let padded= text.padStart(16,"math");
//     console.log(padded);
// }


// const testRepeat=()=>{
//     let text = "hello world";
//     let result = text.repeat(2);
//     console.log(result);
// }


// const testReplace=()=>{
//     let text = "please visit our website !";
//     let newText = text.replace("website","Melorinet");
//     let newtxt1 = text.replace("WEBSITE","melorinet");
//     let newtxt2 = text.replace(/WEBSITE/g,"melorinet");
//     console.log(text);
//     console.log(newtxt2)
// }


// const testReplaceAll=()=>{
//     let text='فارسی زبان شیرین جهان است. این یک متن فارسی است';
//     console.log(text);
//     console.log(text.replaceAll("فارسی","پرشین"));
// }

// const testSplit=()=>{
//     let TXT="hello";
//     console.log(TXT.split(""));
//     console.log(TXT.split(","));
// }

const testSearchMethods=()=>{
    let text="because the sky is high sky!";
    // let index1= text.indexOf("sky");
    // console.log(index1);

    // let lastIndex=text.lastIndexOf("sky");
    // console.log(lastIndex);

    // console.log(text.indexOf("me"));

    // let result=text.search("high");
    // console.log(result);

    // let myMatch= text.match("he");
    // console.log(myMatch);

    // let includes1=text.includes("حرف سیاسی");
    // let includes2=text.includes("حرف سیاسی",5);
    // let includes3=text.includes("the");
    // console.log(includes3);

    // let x=text.startsWith("because");
    // let y=text.startsWith("the");
    // console.log(y);

    // let z=text.endsWith("!");
    // console.log(z);
}


const giveFullName=()=>{
    let FName="samin";
    let LName="hosseini";
    let FullName= "welcome" + FName + "," + LName;
    let fName= `welcome ${FName},${LName}`;
    console.log(FullName);
    console.log(fName);
}