$(function() {
    // UIkit.offcanvas(document.getElementById("sidebar")).show();
    // $('.carousel').owlCarousel({
    //     items: 5,
    //     addClassActive: true
    // });
});

$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        items: 2,
        addClassActive: true,
        margin: 500,
        stagePadding: 200,
        onDragged: callbackDot
    });

    $(".owl-carousel-act").owlCarousel({
        items: 2,
        addClassActive: true,
        margin: 500,
        stagePadding: 200,
        onDragged: callbackDot
    });

    $(".owl-pagination").css("position", "absolute");
    $(".owl-pagination").css("marginLeft", "50px");
    $(".owl-pagination").css("top", "210px");
    
    $(".owl-item").css("marginLeft", "50px")
    // 2851c1
    $(".people").hover(() => {
        console.log(this.id)
    })
    
});
function callbackDot(event) {
    console.log("hello")
    $('.owl-page.active span').css("background", 'red')
}
function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: -34.397, lng: 150.644},
      zoom: 8
    });
  }