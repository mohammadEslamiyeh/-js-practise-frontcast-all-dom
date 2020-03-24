/////////////////////////// dom 1 /////////////////////////////////
console.log("dom 1 : find tag by id and class ,............");
let show1, show2, show3;

show1 = document .getElementById("app");
console.log(show1);
show2 = document.getElementsByClassName("box");
console.log(show2[0]);
show3 = document.getElementsByTagName("p");
console.log(show3[2]);
/////////////////////////// dom 2 /////////////////////////////////
console.log("dom 2 : chanage p text tag ");
function change() {
    document.getElementsByTagName("p")[4].innerHTML = "mohammad eslamiyeh";
}
/////////////////////////// dom 3 /////////////////////////////////
console.log("dom 3 :find div -> change text tag ->set link and change link ");

let divmain;

function changeText(){
    // find div
    divmain = document.getElementById("mainDom3");
    // change tag text
    divmain.getElementsByTagName("p")[0].innerHTML="is new content";
    // set link to tag
    divmain.getElementsByTagName("a")[0].href = "https://github.com/mohammadEslamiyeh?tab=repositories";
    divmain.getElementsByTagName("a")[1].setAttribute("href","https://vuejs.org/");
    divmain.getElementsByTagName("p")[1].style.color="red";
}
/////////////////////////// dom 4 /////////////////////////////////
console.log("dom 4 : add tag p , creat text and insert div tag ");

var divtag,ptag,txt;
divtag = document.getElementById("show");
ptag = document.createElement("p");
txt = document.createTextNode("my name is mohammad");


ptag.appendChild(txt);
divtag.appendChild(ptag);

/////////////////////////// dom 5 /////////////////////////////////
console.log("dom 5 : Definition EVENT FOR TAG and get date on system");
let p1,p2;

p1 = document.getElementById("color");

p1.addEventListener("click",changeColor);

function changeColor(){
    p1.style.color= "red";
}
p2 = document.getElementById("date");
p2.addEventListener("click", showdate);

function showdate(){
    console.log(Date());
}

/////////////////////////// dom 6/////////////////////////////////
console.log("dom 6 : set color for text by querySelectorAll and 'for loop'  ");

let plist,divdom6;
divdom6 = document.getElementById("dom6");
plist = divdom6.querySelectorAll("p");
console.log(plist[2]);
for (i=0;i<plist.length;i++){
plist[i].style.color="blue";
}