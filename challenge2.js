 ' use strict';
 const openModal = document.querySelectorAll('.showModal');
const closeModal = document.querySelector('.closeModal');
const main= document.querySelector('.main');
const overLay= document.querySelector('.overLay');
for(let i=0; i< openModal.length;i++){
    openModal[i].addEventListener('click',function(){
        main.classList.remove('d-none');
    })
}
closeModal.addEventListener('click', function(){
    main.classList.add('d-none');
})
document.addEventListener('keydown', function(e){
 if(e.key=='l'){
    if(closeModal){
        main.classList.add('d-none');
    }
 }
})