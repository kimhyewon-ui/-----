$(document).ready(function() {
    
    let swiper = new Swiper(".mySwiper", {
        zoom: true,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });

    // ================ fileMain slide
    let fileSwiper = new Swiper('.file_swiper .swiper-container', {
        pagination: {
            el: '.swiper-pagination',
            dynamicBullets: true,
        },
    });

    let fileSubSwiper = new Swiper('.file_sub_swiper .swiper-container', {
        pagination: {
            el: '.swiper-pagination',
            dynamicBullets: true,
        },
    });

    fileSwiper.controller.control = fileSubSwiper;
    fileSubSwiper.controller.control = fileSwiper;

    // ================ fileMain fileupload

    let imageLoader = document.getElementById('imageLoader');
    imageLoader.addEventListener('change', handleImage, false);
    let canvas = document.getElementById('imageCanvas');
    let ctx = canvas.getContext('2d');

    function handleImage(e){
    let reader = new FileReader();
    reader.onload = function(event){
        let img = new Image();
        img.onload = function(){
            canvas.width = img.width;
            canvas.height = img.height;
            ctx.drawImage(img,0,0);
        }
        img.src = event.target.result;
    }
    reader.readAsDataURL(e.target.files[0]);     
}



});


    // checkbox select
    function checkOnlyOne(element) {
        let checkboxes = document.getElementsByName("comCheck");
        checkboxes.forEach((cb) => {
            cb.checked = false;
        })
        
        element.checked = true;
    }
