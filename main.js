      // 페이지 스크롤 함수
      function goto_scroll(move_top) {
        $("html,body")
          .stop()
          .animate({ scrollTop: move_top + "px" }, 800);
      }
      
      $(function() {
        // gnb
        var link = document.querySelectorAll("#gnb a");
        for (let i = 0; i < link.length; i++) {
          link[i].addEventListener("click", function() {
            var top = document.querySelector(link[i].hash).offsetTop;
            goto_scroll(top);
          });
        }
        
        // 우측 인디케이터
        $("#pager li a").click(function() {
          $("#pager li").removeClass("on");
          $(this).parent().addClass("on");
          var top = $(this.hash).offset().top;
          goto_scroll(top);
        });

      }); // end $