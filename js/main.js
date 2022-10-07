$(document).ready(function () {

    let currentFloor = 2;
    let counterUp = $(".counter-up");
    let counterDown = $(".counter-down");
    let floorPath = $('.home-img path');
    let modal = $(".modal");
    let modalCloseBtn = $(".modal-close-btn");
    let viewFlatsBtn = $('.view-flats');

    //наведение мышкой на этаж
    floorPath.on('mouseover', function () {
    currentFloor = $(this).attr("data-floor");
    $('.counter').text(currentFloor)
    floorPath.removeClass("current-floor")
    })

floorPath.on('click', toggleModal); //при клике на этаж вызвать окно
viewFlatsBtn.on('click', toggleModal); //при клике на кнопку вызвать окно
modalCloseBtn.on('click', toggleModal); //клик на кнопку закрыть


//кнопка наверх
counterUp.on('click', function () {
    if (currentFloor < 18) {
        currentFloor++;

    usCurrentFloor = currentFloor.toLocaleString("en-US", {minimumIntegerDigits: 2, useGrouping: false});
    $('.counter').text(usCurrentFloor);
    floorPath.removeClass("current-floor")
    $(`[data-floor=${usCurrentFloor}]`).toggleClass("current-floor")

   
    }
})

//кнопка вниз
counterDown.on('click', function () {
    if (currentFloor > 2) {
        currentFloor--;

    usCurrentFloor = currentFloor.toLocaleString("en-US", {minimumIntegerDigits: 2, useGrouping: false});
    $('.counter').text(usCurrentFloor);
    floorPath.removeClass("current-floor")
    $(`[data-floor=${usCurrentFloor}]`).toggleClass("current-floor")
    }
})


//функция открыть-закрыть окно
function toggleModal() {
    modal.toggleClass('is-open');
}
});