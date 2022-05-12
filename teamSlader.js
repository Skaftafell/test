const tprev = document.getElementById('team__btn-prev'),
      tnext = document.getElementById('team__btn-next'),
      tslides = document.querySelectorAll('.team__slide'),
      tdots = document.querySelectorAll('.team__dot'),
      tslidesWrap = document.querySelectorAll('.team__slider-wrapper');

let index = 0;

const activetSlide = n => {
    for(tslide of tslides){
        tslide.classList.remove('active');
    }
    tslides[n].classList.add('active');
}

const activetDot = n => {
    for(tdot of tdots) {
        tdot.classList.remove('active');
    }
    tdots[n].classList.add('active');
}

const preparetCurrentSlide = ind => {
    activetSlide(ind);
    activetDot(ind);
}

const tnexttSlide = () => {
    if(index == tslides.length - 1){
        index = 0;
        preparetCurrentSlide(index);
    }else{
        index++;
        preparetCurrentSlide(index);
    }
};
const tprevSlide = () => {
    if(index == 0){
        index = tslides.length - 1;
        preparetCurrentSlide(index);
    }else{
        index--;
        preparetCurrentSlide(index);
    }
};

tdots.forEach((item,indexDot) => {
    item.addEventListener('click', () => {
        index = indexDot;
        preparetCurrentSlide(index);
        clearInterval(interval);
    })
});

tnext.addEventListener('click', tnextSlide);
tprev.addEventListener('click', tprevSlide);


