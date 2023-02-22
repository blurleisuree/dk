$(document).ready(function () {

    // carousel -------------------------------------------------------------

    const carouselInner = $('.carousel-inner');

    let slidesArr = ['img/slide1.jpg', 'img/slide2.jpg', 'img/slide3.jpg',];

    $.each(slidesArr, function (index, elem) {
        $(carouselInner).append("<div class='carousel-item' data-bs-interval='3000'></div>");
        let itemNow = $(".carousel-item");
        itemNow = itemNow[itemNow.length - 1];

        if (index == 0) {
            $(itemNow).addClass("active");
        };
        $(itemNow).append(`<img class='d-block w-100' alt='slide${index + 1}' src='${elem}' </img>`);
    })

    // tabs ----------------------------------------------------------------

    const tabs = $(".page-right-tabs"),
    leftBtn = $(".page-rigth
    
    ")

});