/* toggle_btn */
$('.toggle_btn').on('click', function () {
  $('.nav_wrap').fadeToggle(500);
  $(this).toggleClass('close');
  $('body').toggleClass('noscroll');
});

if ($(window).width() < 768) {
  $('.nav_item>a').on('click', function () {
    $('.nav_wrap').fadeOut(500);
    $('.toggle_btn').removeClass('close');
    $('body').removeClass('noscroll');
  });
}

/* fade */
$(function () {
  $(window).scroll(function () {
    $('.fade').each(function () {
      let elemPos = $(this).offset().top;
      let scroll = $(window).scrollTop();
      let windowHeight = $(window).height();
      if (scroll > elemPos - windowHeight + 200) {
        $(this).addClass('scrollin');
      } else {
        $(this).removeClass('scrollin');
      }
    });
  });
});
