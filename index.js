let card = document.querySelector(".card");
let heart = document.querySelector("i");

card.addEventListener('dblclick',function (){
   heart.style.transform = ' translate(-50%,-50%) scale(1)';
   heart.style.opacity = 0.8;

   setTimeout(function(){
    heart.style.opacity = 0;
},2000);

setTimeout(function(){
    heart.style.transform = ' translate(-50%,-50%) scale(0)';
},3000);
});

