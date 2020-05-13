// immediate invoked function expression
const imgs = [
  'contBcg-0',
  'contBcg-1',
  'contBcg-2',
  'contBcg-3',
  'contBcg-4'
];
  //select both left and right button. Add event listeners
 
 const buttons = document.querySelectorAll('.btn');
 const sliderImgs = document.querySelector('.img-container');
let counter = 0;
 buttons.forEach(button => {
   button.addEventListener('click', ()=> {

    if (button.classList.contains('btn-left')) {
      counter --;
      if (counter < 0) {
        counter = imgs.length -1;
      }
      sliderImgs.style.backgroundImage = `url(../../../img/${imgs[counter]}.jpeg)`
    }
    if (button.classList.contains('btn-right')) {
      counter ++;
      if (counter > 0) {
        counter = imgs.length +1;
      }
      sliderImgs.style.backgroundImage = `url(../../../img/${imgs[counter]}.jpeg)`
    }
   })
 })