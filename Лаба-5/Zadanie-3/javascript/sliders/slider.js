const imagesSlider = document.querySelectorAll('.slider img');
const prevSlider = document.getElementById('prev');
const nextSlider = document.getElementById('next');
let currentIndex = 0;

function showImage(index) {
    imagesSlider[currentIndex].classList.remove('active');
    imagesSlider[index].classList.add('active');
    currentIndex = index;
}

prevSlider.addEventListener('click', function(){
    let index = currentIndex - 1;
    if (index < 0) {
        index = imagesSlider.length - 1;
    }
    showImage(index);
});

nextSlider.addEventListener('click', function(){
    let index = currentIndex + 1;
    if (index >= imagesSlider.length) {
        index = 0;
    }
    showImage(index);
});

showImage(currentIndex);