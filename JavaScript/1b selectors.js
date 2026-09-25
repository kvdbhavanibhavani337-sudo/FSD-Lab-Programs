function SelectorElement(){
    let heading=document.getElementById("heading");
    heading.style.colour="blue";
    let prags =document.getElementsByClassName("demo");
    paragraph[0].style.colour="red";
    paragraph[1].style.colour="green";
    let pTag=document.getElementsByTagName("p");
    console.log("number of paragraph tags:",ptags,length);
    let firstpare=document.querySelector("demo");
    firstpara.style.fontweight="bold";
    let allparas=document.querySelectorAll("demo");
    allparas.foreach (function(item){
        item.style.fontsize="20px";
    });
    alert("Element Selected Successfully!");
}
