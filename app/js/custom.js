document.addEventListener('DOMContentLoaded', function (){

  $(".content-page__arrows").mPageScroll2id();

  // Параллакс
  $(window).scroll(function(){
    var st = $(this).scrollTop();

    $(".content-page__title",).css({
        "transform" : "translate(0%, " + st / 10 + "%"
    });
});


});

