'strict';




   function myanimation(){
    const car = document.querySelector('.car');
    let pass = 0;

     const timerid = setInterval(frame, 10);

     function frame(){
     if(pass == 700){
        clearInterval(timerid);
        console.log('finish');
        alert('finish');
        car.style.left = 0;
     }
     else {
        pass++;
        car.style.left = pass + 'px';
     }
     }
   }






  btn.addEventListener('click', myanimation);
 


   // clearInterval(timerid); tozalaydi 