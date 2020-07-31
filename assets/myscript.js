console.log("hello");

//Insert canvas tag into Table 1 

let target = document.getElementById("table1");
let canva1 = document.createElement("canvas");
canva1.id = "myChart1";
target.parentNode.insertBefore(canva1, target).innerHTML;
canva1.style.height = "300px";
canva1.style.width = "100%";
canva1.style.backgroundColor = "lightblue";

