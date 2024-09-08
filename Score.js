import {list} from "./main.js";
const ele1=document.querySelector(".OneWord");
console.log(ele1);
let s="Hi ";
ele1.innerText="Hello";
Start();
function Start(){
    const ele=document.getElementById("ADDY");
    for (let index = 0; index < 6; index++) {
        s=s+`   ${list[index]}`;
    }

}