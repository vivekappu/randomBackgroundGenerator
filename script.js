let redinput=document.querySelector("#red-color-range");
let blueinput=document.querySelector("#blue-color-range");
let greeninput=document.querySelector("#green-color-range");
const randnum=()=>Math.floor(Math.random()*16);
var hexarray=['0','1','2','3','4','5','6','7','8','9','a','b','c','d','e','f'];
let color;
const BackgroundGenerator=()=>{
   color="#";
   while(color.length<7){
       color+=hexarray[randnum()];
   }
   return color;
}
var randomnumber=(lower,upper)=>{
    return  Math.floor(Math.random() * (upper-lower+ 1)) + 1;// 2 to 8   7
  };
constrandomRgb=()=>{
  return `rgb(${randomnumber(0,255)},${randomnumber(0,255)},${randomnumber(0,255)})`
}
document.querySelector('button').addEventListener("click",()=>{
    let bgcolor=BackgroundGenerator();
    let bgcolor2=constrandomRgb();
    document.body.style.backgroundColor=bgcolor2;
    document.querySelector("#color").innerText=bgcolor2;
    console.log(bgcolor);
})
function sliderBackgroundSet( ){
  document.body.style.backgroundColor=`rgb(${redinput.value},${blueinput.value},${greeninput.value})`;
  let red=document.querySelector("#red");
  let blue=document.querySelector("#blue");
  let green=document.querySelector("#green");
  
  red.style.backgroundColor=`rgb(${redinput.value},0,0)`;
  green.style.backgroundColor=`rgb(0,${greeninput.value},0)`;
  blue.style.backgroundColor=`rgb(0,0,${blueinput.value})`;
  document.querySelector("#rgb").innerText=`rgb(${redinput.value},${blueinput.value},${greeninput.value})`;
}

var rangeElements=[redinput,blueinput,greeninput];
rangeElements.forEach(x=>{
  x.addEventListener('input',sliderBackgroundSet)
})

