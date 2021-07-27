const heading1 = document.getElementById("hover-me1");
const heading2 = document.getElementById("hover-me2");
const heading3 = document.getElementById("hover-me3");
const heading4 = document.getElementById("hover-me4");

heading1.addEventListener("mousemove", 
function(){
    
    document.getElementById("hiden1").style.display="block";
    
})
heading2.addEventListener("mousemove", 
function(){
    
    document.getElementById("hiden2").style.display="block";
})
heading3.addEventListener("mousemove", 
function(){
    
    document.getElementById("hiden3").style.display="block";
})
heading4.addEventListener("mousemove", 
function(){
    
    document.getElementById("hiden4").style.display="block";
})



   

