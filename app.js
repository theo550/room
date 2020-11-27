// Change main picture

let buttonLeft = document.querySelectorAll('.btn-left')[0];
let buttonRight = document.querySelectorAll('.btn-right')[0];
let background = document.querySelectorAll('.picture')[0];
let i = 1;

buttonLeft.addEventListener('click', changePic);
buttonRight.addEventListener('click', backPic);

function changePic() {

  i ++
  background.style.backgroundImage = `url(./images/desktop-image-hero-${i}.jpg)`

  if (i > 2) {
    i = 0;
  }

}


function backPic() {

  i --

  if (i < 1) {
    i = 3;
  }

  background.style.backgroundImage = `url(./images/desktop-image-hero-${i}.jpg)`;

  
}
