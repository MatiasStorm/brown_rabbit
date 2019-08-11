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



/* Article page functions*/
PAGE_INDEX = 0;
N_PAGES = 3;
ARTICLES_PR_PAGE = 3;
function readMore(artIndex){
  var articles = document.getElementsByClassName("article");
  var hiddenText = articles[artIndex].getElementsByClassName("hidden-text")[0];
  var button = articles[artIndex].getElementsByTagName("button")[0];
  var dots = articles[artIndex].getElementsByClassName("three-dots")[0];
  if(!hiddenText.style.display){
    hiddenText.style.display = "inline";
    dots.style.display = "none";
    button.style.display = "none";
  }
}

function hideAllText(pageIndex){
  var statIndex = pageIndex * (ARTICLES_PR_PAGE);
  var maxIndex = pageIndex * ARTICLES_PR_PAGE + ARTICLES_PR_PAGE;
  var articles = document.getElementsByClassName("article");
  for(i = pageIndex * (ARTICLES_PR_PAGE); i < maxIndex; i++){
    var hiddenText = articles[i].getElementsByClassName("hidden-text")[0];
    var button = articles[i].getElementsByTagName("button")[0];
    var dots = articles[i].getElementsByClassName("three-dots")[0];
    button.style.display = "inline";
    dots.style.display = "inline";
    hiddenText.style.display = null;
  }
}

function changePage(pageIndex){
  var pages = document.getElementsByClassName("article-container");
  var buttons = document.getElementsByClassName("page-button");
  var span = document.getElementsByClassName("page-of")[0];
  for(i = 0; i < pages.length; i++){
    pages[i].style.display = "none";
    buttons[i].classList.remove("page-button-active");
  }
  pages[pageIndex].style.display = "block";
  buttons[pageIndex].classList.add("page-button-active");
  span.innerHTML = "Page " + (pageIndex + 1) + " of " + N_PAGES;
  hideAllText(pageIndex);
  PAGE_INDEX = pageIndex;
}

function nextPage(){
  if(PAGE_INDEX < N_PAGES - 1){
    PAGE_INDEX += 1;
    changePage(PAGE_INDEX);
  }
}