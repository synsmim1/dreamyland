let sliderImages = document.querySelectorAll('.slide-container .slides img');
let forwardBtn = document.querySelector('#forwardBtn');
let backBtn = document.querySelector('#backBtn');
let current = 0;

// top carousel
//clear imgs
function reset(){
  for (let i = 0; i < sliderImages.length; i++){
    sliderImages[i].style.display='none';
  }
}

// start slides
function startSlide(){
  reset();
  sliderImages[0].style.display = 'block';
}

//previous
function slideLeft(){
  reset();
  sliderImages[current - 1].style.display = 'block';
  current--;
}

//next
function slideRight(){
  reset();
  sliderImages[current+1].style.display = 'block';
  current++;
}

//left arrow
forwardBtn.addEventListener('click', function(){
  if (current === 0){
    current = sliderImages.length;
  }
  slideLeft();
})

//right arrow
backBtn.addEventListener('click', function(){
  if (current === sliderImages.length -1){
    current = -1;
  }
  slideRight();
})

startSlide


//body carousels 
// recs
let bodySliderImages = document.querySelectorAll('.recs-photo-slides .slide-group .slides .active');
let bodyForwardBtn = document.querySelector('#body-forwardBtn');
let bodyBackBtn = document.querySelector('#body-backBtn');
let bodyCurrent = 0;



bodyForwardBtn.addEventListener('click', function(){
    for (let i=0; i<= bodySliderImages.length -1; i++){
        bodySliderImages[i].style.transition = "transform 0.4s ease-in-out";
            bodyCurrent++;
            console.log(bodyCurrent);
            bodySliderImages[i].style.transform = 'translateX(' + -1250 + 'px)';
    }
}) 

bodyBackBtn.addEventListener('click', function(){
    for (let i=0; i<= bodySliderImages.length +1; i++){
        bodySliderImages[i].style.transition = "transform 0.4s ease-in-out";
            bodyCurrent++;
            console.log(bodyCurrent);
            bodySliderImages[i].style.transform = 'translateX(' + 1200 + 'px)';
    }
}) 

// classics
let classicSliderImages = document.querySelectorAll('.classics-photo-slides .slide-group .slides .active');
let classicForwardBtn = document.querySelector('#classic-forwardBtn');
let classicBackBtn = document.querySelector('#classic-backBtn');
let classicCurrent = 0;



classicForwardBtn.addEventListener('click', function(){
    for (let i=0; i<= classicSliderImages.length -1; i++){
        classicSliderImages[i].style.transition = "transform 0.4s ease-in-out";
            classicCurrent++;
            console.log(classicCurrent);
            classicSliderImages[i].style.transform = 'translateX(' + -1250 + 'px)';
    }
}) 

classicBackBtn.addEventListener('click', function(){
    for (let i=0; i<= classicSliderImages.length +1; i++){
        classicSliderImages[i].style.transition = "transform 0.4s ease-in-out";
            classicCurrent++;
            console.log(classicCurrent);
            classicSliderImages[i].style.transform = 'translateX(' + 1200 + 'px)';
    }
}) 

//trending
let trendingSliderImages = document.querySelectorAll('.trending-photo-slides .slide-group .slides .active');
let trendingForwardBtn = document.querySelector('#trending-forwardBtn');
let trendingBackBtn = document.querySelector('#trending-backBtn');
let trendingCurrent = 0;



trendingForwardBtn.addEventListener('click', function(){
    for (let i=0; i<= trendingSliderImages.length -1; i++){
      trendingSliderImages[i].style.transition = "transform 0.4s ease-in-out";
            trendingCurrent++;
            console.log(trendingCurrent);
            trendingSliderImages[i].style.transform = 'translateX(' + -1250 + 'px)';
    }
}) 

trendingBackBtn.addEventListener('click', function(){
    for (let i=0; i<= trendingSliderImages.length +1; i++){
      trendingSliderImages[i].style.transition = "transform 0.4s ease-in-out";
            trendingCurrent++;
            console.log(trendingCurrent);
            trendingSliderImages[i].style.transform = 'translateX(' + 1200 + 'px)';
    }
}) 

//marvel
let marvelSliderImages = document.querySelectorAll('.marvel-photo-slides .slide-group .slides .active');
let marvelForwardBtn = document.querySelector('#marvel-forwardBtn');
let marvelBackBtn = document.querySelector('#marvel-backBtn');
let marvelCurrent = 0;



marvelForwardBtn.addEventListener('click', function(){
    for (let i=0; i<= marvelSliderImages.length -1; i++){
      marvelSliderImages[i].style.transition = "transform 0.4s ease-in-out";
            marvelCurrent++;
            console.log(marvelCurrent);
            marvelSliderImages[i].style.transform = 'translateX(' + -1250 + 'px)';
    }
}) 

marvelBackBtn.addEventListener('click', function(){
    for (let i=0; i<= marvelSliderImages.length +1; i++){
      marvelSliderImages[i].style.transition = "transform 0.4s ease-in-out";
            marvelCurrent++;
            console.log(marvelCurrent);
            marvelSliderImages[i].style.transform = 'translateX(' + 1200 + 'px)';
    }
}) 
