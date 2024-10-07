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

const example5=()=>{
    const colorMap=new Map();
    colorMap.set('book1','blue');
    colorMap.set('book2','red');
    colorMap.set('book3','green');
    const listForm=document.getElementById("colors");
    for (let [key,value] of colorMap){
        const option=document.createElement('option');
        option.value=[value];
        listForm.appendChild(option)
    }
}
