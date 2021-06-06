let open_btn=document.querySelector(".open-btn");
let close_btn=document.querySelector(".close-btn");

let wrap = document.querySelectorAll(".wrap");

open_btn.addEventListener('click',function(){
   
    for(let x=0 ; x< wrap.length ;x++)
    {
       wrap[x].classList.add('visible');
    }
    
})
close_btn.addEventListener('click',function(){
    
    for(let x=0 ; x< wrap.length ;x++)
    {
       wrap[x].classList.remove('visible');
    }
})