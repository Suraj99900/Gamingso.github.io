var face=document.getElementById("face");
var insta=document.getElementById("insta");
var tele=document.getElementById("tele");

face.addEventListener("click",function (){
    face.style.boxShadow="10px 5px 5px black"
});

insta.addEventListener("click",function (){
    insta.style.boxShadow="5px 5px 5px black"
});
tele.addEventListener("click",function (){
    tele.style.boxShadow="5px 5px 5px black"
});


var i2=document.getElementById("i2"); 
var quy=document.getElementById("box_ul");
i2.addEventListener("click",function() {
    quy.style.visibility="visible";

    setTimeout(() => {
        quy.style.visibility="hidden";
    }, 10000);
    
})
