/*Slider*/

function showSlide(index){
  var images = document.getElementsByClassName("slide-img");
  var buttons = document.getElementsByClassName("slider-button");
  for(i = 0; i < images.length; i++){
    images[i].style.display = "none";
    buttons[i].style.backgroundColor = "rgb(44, 131, 176)";
  }
  images[index].style.display = "inline";
  buttons[index].style.backgroundColor = "rgb(163, 163, 163)";
}

