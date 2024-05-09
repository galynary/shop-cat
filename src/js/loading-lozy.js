const lazyImages = document.querySelectorAll('img[loading="lazy"]');

lazyImages.forEach(img => {
    img.addEventListener('load', onImageLoaded);
});

function onImageLoaded(evt) {
    console.log("картинка загрузилась");
    evt.target.classList.add("appear");
}