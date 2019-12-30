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
            // 인디케이터 업데이트
            update_pager(i);
          });
        }
        
        // 우측 인디케이터
        $("#pager li a").click(function() {
          $("#pager li").removeClass("on");
          $(this).parent().addClass("on");
          var top = $(this.hash).offset().top;
          goto_scroll(top);
        });

        // 인디케이터 업데이트 함수
        function update_pager(page_num){
          console.log(page_num);
          $("#pager li").removeClass("on");
          $('#pager li')
            .eq(page_num)
            .addClass("on");
        }

      }); // end $