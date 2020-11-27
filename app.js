// Change main picture

let buttonLeft = document.querySelectorAll('.btn-left')[0];
let buttonRight = document.querySelectorAll('.btn-right')[0];
let background = document.querySelectorAll('.picture')[0];
let i = 1;

buttonLeft.addEventListener('click', changePic);
buttonRight.addEventListener('click', backPic);

function changePic() {

  i ++

  if (i > 3) {
    i = 1;
  }

  background.style.backgroundImage = `url(./images/desktop-image-hero-${i}.jpg)`

 
  console.log(i)

}


function backPic() {

  i --

  if (i < 1) {
    i = 3;
  }

  background.style.backgroundImage = `url(./images/desktop-image-hero-${i}.jpg)`;

  console.log(i)
}
