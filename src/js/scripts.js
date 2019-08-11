const WIDTH = 1000;
const N_IMAGES = 6;
SLIDER_INDEX = 0;



/*Slider*/
function showSlide(index){
  SLIDER_INDEX = index;
  var container = document.getElementsByClassName("slide-img-container")[0];
  var buttons = document.getElementsByClassName("slider-button");
  container.style.transition = "transform 0.8s ease-in-out";
  container.style.transform = "translateX(" + (-WIDTH * index) + "px)";
  
  for(i = 0; i < N_IMAGES; i++){
    buttons[i].style.backgroundColor = "rgb(44, 131, 176)";
  }
  buttons[index].style.backgroundColor = "rgb(163, 163, 163)";
}

function showRandomSlide(){
  showSlide(Math.floor(Math.random() * N_IMAGES));  
}

window.setInterval(function(){
  showSlide(SLIDER_INDEX)
  SLIDER_INDEX += 1;
  if(SLIDER_INDEX >= N_IMAGES){
    SLIDER_INDEX = 0;
  }
}, 2000)

showRandomSlide();



/* Article read more functions*/
function readMore(artIndex){
  articles = document.getElementsByClassName("article");
  hiddenText = articles[artIndex].getElementsByClassName("hidden-text")[0];
  button = articles[artIndex].getElementsByTagName("button")[0];
  dots = articles[artIndex].getElementsByClassName("three-dots")[0];
  if(!hiddenText.style.display){
    hiddenText.style.display = "inline";
    dots.style.display = "none";
    button.innerHTML = "Show less"
    console.log(button.style.marginLeft)
  }
  else{
    button.innerHTML = "Read more"
    dots.style.display = "inline"
    hiddenText.style.display = null;
  }
  
}




