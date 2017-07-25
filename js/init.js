(function($){
  $(function(){

    $('.button-collapse').sideNav();
        $('.scrollspy').scrollSpy({
    scrollOffset:100
  });
	$('.slider').slider();
      $('.materialboxed').materialbox();
  }); // end of document ready
    $('.carousel.carousel-slider').carousel({fullWidth: true});
})(jQuery); // end of jQuery name space

function initMap() {
    var uluru = {lat: 50.553072, lng: 21.642284};
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 12,
        center: uluru
    });
    var marker = new google.maps.Marker({
        position: uluru,
        map: map
    });
}