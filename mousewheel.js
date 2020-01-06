// 마우스 휠 스크롤
$(function(){

  var el = "section";
  for (var i = 0; i < el.length; i++) {
    $(el).eq(i).on("mousewheel DOMMouseScroll", function(e) {
      e.preventDefault();
      e.stopPropagation();
      console.log(e.originalEvent.deltaY);
      var delta = e.originalEvent.deltaY;
      if (delta < 0 && $(this).index() < el.length) {
        var $top = $("#s1").offset().top;
        var $next = $(this)
          .next()
          .offset().top;

        $("html, body")
          .stop()
          .animate({
            scrollTop: $next
          });
      } else if (delta > 0 && $(this).index() > 0) {
        var $prev = $(this)
          .prev()
          .offset().top;
        $("html, body")
          .stop()
          .animate({
            scrollTop: $prev
          });
      }
    }); // end mousewheel
  } // end for

})  // end$