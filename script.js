let back = document.querySelector('.back');
let next = document.querySelector('.next');
let dot1 = document.querySelector('.dot1');
let dot2 = document.querySelector('.dot2');

let first = document.querySelector('.first');
let second = document.querySelector('.second');

let inputBox = document.querySelectorAll(".inputBox");


let counter = "1";
let radio = "";
let qrCodeRadio = "";



function go() {
    inputBox.forEach(abs => abs.classList.remove('radioActive'));
    this.classList.add('radioActive');
    radio = "radioChecked";
    document.querySelector(".error").classList.add("hidden")

}
inputBox.forEach(abs => abs.addEventListener('click', go));




function qrFunction() {
    document.querySelectorAll(".qr").forEach(qrRadio => qrRadio.classList.remove('radioActiveQR'));
    this.classList.add('radioActiveQR');
    qrCodeRadio = "radioActiveQR"
}
document.querySelectorAll(".qr").forEach(abs => abs.addEventListener('click', qrFunction));



 
  



next.addEventListener("click", () =>{

   
   if(counter == "1"){
   if(radio == "radioChecked"){
    first.classList.add("-translate-x-full")
    second.classList.remove("translate-x-full")

    counter = "2";

    dot1.classList= "dot h-2 rounded-full dot1 transition  w-2  border border-gray-400 w-2 bg-white"
    dot2.classList= "dot h-2 rounded-full dot2 transition  w-2 bg-red-400"
    

    document.querySelector(".actualNext").textContent = "FINISH"


   }

   else{
       document.querySelector(".error").classList.remove("hidden")
   }








   
   }

})


back.addEventListener("click", () =>{
    if(counter == "2"){
     first.classList.remove("-translate-x-full")
     second.classList.add("translate-x-full")
 
     counter = "1";
 
     dot1.classList= "dot h-2 rounded-full dot1 transition  w-2  bg-red-400"
     dot2.classList= "dot h-2 rounded-full dot2 transition  w-2  border border-gray-400 w-2 bg-white "
     
 
     document.querySelector(".actualNext").textContent = "NEXT"
 
 
    }
 
 })



 document.querySelector(".up").addEventListener("click", ()=>{
     document.querySelector(".snap-y").scrollTo(0, 0)

     
     document.querySelector(".vDot1").classList= "h-2 rounded-full transition w-2 vDot1 bg-purple-600"

     document.querySelector(".vDot2").classList= "h-2 rounded-full vDot2 transition  w-2 border border-gray-400  bg-white "

 
 


 })


 document.querySelector(".down").addEventListener("click", ()=>{
    document.querySelector(".snap-y").scrollTo(0, 260)


    document.querySelector(".vDot1").classList= "h-2 rounded-full vDot1 transition  w-2 border border-gray-400  bg-white "
     document.querySelector(".vDot2").classList= "h-2 rounded-full transition w-2 vDot2 bg-purple-600"
     

})


function scrollFunction() {
    if (document.querySelector(".snap-y").scrollTop > 260) {
        document.querySelector(".vDot1").classList= "h-2 rounded-full vDot1 transition  w-2 border border-gray-400  bg-white "
     document.querySelector(".vDot2").classList= "h-2 rounded-full transition w-2 vDot2 bg-purple-600"
     
      }


      else{
        document.querySelector(".vDot1").classList= "h-2 rounded-full transition w-2 vDot1 bg-purple-600"

        document.querySelector(".vDot2").classList= "h-2 rounded-full vDot2 transition  w-2 border border-gray-400  bg-white "
   
     
      }

      
}


document.querySelector(".snap-y").onscroll = function() {scrollFunction()};

