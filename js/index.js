$(document).ready(function(){

  //  메인 페이지 텍스트 베너 영역

  left_move('.move_box_1','.img_box_1');
  left_move('.move_box_3','.img_box_3');
  right_move('.move_box_2','.img_box_2');

  setInterval(()=>{
    left_move('.move_box_1','.img_box_1');
    left_move('.move_box_3','.img_box_3');
    right_move('.move_box_2','.img_box_2');
  },7000)

  function right_move(move,img){
  let $move=$(move);
  let $img=$(img)
    $move.animate({ 
        right: -1590
      }, 15000, 'linear',function(){
        $img.last().prependTo(move);
        $move.css({
          right:0 
        })
      })
  }

  function left_move(move,img){
    let $move=$(move);
    let $img=$(img)
    $move.animate({ 
        left: -1590
      }, 15000, 'linear',function(){
        $img.first().appendTo(move);
        $move.css({ 
          left: 0 
        })
      })
  }



  // 수업 이수& 자격증 영역
  // 수업 이수&자격증 배너 재생 이벤트
  $('html,body').scroll(function () {
      let height = $(this).scrollTop();
      let license_page=$('.page_2').offset().top;
      // console.log('스크롤값',height);
      if(height>=license_page){
        $('.license_move_box').animate({
            top: -1000
          }, 10000)
      }
  });




  // 이미지 호버 시 화살표, 텍스트 변경 이벤트
  let License_1=$('.License_1');
  let License_2=$('.License_2');
  let License_3=$('.License_3');
  let hover_text_1=$('.hover_text_1');
  let hover_img_1=$('.hover_img_1');
  let hover_text_2=$('.hover_text_2');
  let hover_img_2=$('.hover_img_2');
  let license_move_box=$('.license_move_box');

  License_1.on({
    mouseenter:function () {
                hover_text_1.css({
                  color: '#EF5C00',
                  '-webkit-text-stroke': '0px'
                });
                hover_img_1.attr({
                  src:"./img/arrow_1-2.svg"
                })
              },
    mouseleave:function () {
                hover_text_1.css({
                  color: '#F8F3E5',
                  '-webkit-text-stroke': '1px #EF5C00'
                });
                hover_img_1.attr({
                  src:"./img/arrow_1.svg"
                })
              }
  })

  License_3.on({
    mouseenter:function () {
                hover_text_2.css({
                  color: '#EF5C00',
                  '-webkit-text-stroke': '0px'
                });
                hover_img_2.attr({
                  src:"./img/arrow_2-2.svg"
                })
              },
    mouseleave:function () {
                hover_text_2.css({
                  color: '#F8F3E5',
                  '-webkit-text-stroke': '1px #EF5C00'
                });
              hover_img_2.attr({
                  src:"./img/arrow_2.svg"
                })
              }
  })


  // 이미지 호버 시 배너 텍스트 이동 이벤트 영역
  License_1.mouseenter(function () {
    license_move_box.stop(true).animate({ top: 0 }, 500, 'linear');
  });

  License_2.mouseenter(function () {
    license_move_box.stop(true).animate({ top: -500 }, 500, 'linear');
  });

  License_3.mouseenter(function () {
    license_move_box.stop(true).animate({ top: -1000 }, 500, 'linear');
  });



  //스킬영역
  let ro_value;
  let roDeg_n = 30; 
  let roDeg = 0;   
  let prev_sct = 0;
  

    $('html,body').on("scroll",function(){
      sct=$(this).scrollTop();
      page3=$('.skill_page').offset().top;
      page4=$('.in_page_2').offset().top;
      skill_pin = $('.skill_pin');
      sRx=90;
      sRy=1;


       if(page3 <0 && page4>=0){

          // 1. 스크롤 방향에 따라 roDeg 값 조절
          if (sct > prev_sct) {
              console.log('스크롤 다운 (roDeg 증가)');
              // roDeg를 증가시키되, 360을 초과하지 않도록 제한 (최대값 360)
              if (roDeg < 360) {
                  roDeg = roDeg + roDeg_n; 
              } else {
                  roDeg = 360; // 360 이상이면 360으로 고정
              }
              
          } else if (sct < prev_sct) {
              // console.log('스크롤 업 (roDeg 감소)');
              if (roDeg > 0) {
                  roDeg = roDeg - roDeg_n;
              } else {
                  roDeg = 0;
              }
          }

          ro_value = (sct - page3) / (page4 - page3);
        }
      
       if(page3 <0 && page4>=0){
          // console.log('page3',page3);

         ro_value = (sct - page3) / (page4 - page3); 

          rx=sRx * (1 - ro_value); 
          ry=sRy * (1 - ro_value);
            //  console.log('rx', rx);
            //  console.log('ry', ry);
            
          if(rx===0 || ry===0){
           
              $('.won').css({
                  transform: `rotateX(${rx}deg) rotateY(${ry}deg)`,
                  visibility:'hidden'
              })
                        
          }else{
           
            if(rx<0 || ry<0){
                rx=0; 
                ry=0;
                //console.log('sct', sct);  
            
              console.log('roDeg', roDeg);
              
              // roDeg값으로 skill_pin 회전 
              skill_pin.css({
                display: 'block',
                opacity: 1,
                transform: `rotateZ(${roDeg}deg)`
              })

            }else{

              console.log(' roDeg', roDeg);
              skill_pin.css({
                transform:`rotateZ(${roDeg}deg)`
              })
            }
              if(roDeg <= 0){
                skill_pin.css({
                  display: 'none',
                  opacity: 0
                })

              } 
              
              $('.won').css({
                  transform: `rotateX(${rx}deg) rotateY(${ry}deg) `,
                  visibility:'visible'
              })
              
          }
                      
      }
      prev_sct = sct;
    })
  
   // 컨텍영역
   // 컨텍영역 배너
    left_move('.contact_move_box_1','.contact_img_box_1');
    left_move('.contact_move_box_3','.contact_img_box_3');
    right_move('.contact_move_box_2','.contact_img_box_2');

    setInterval(()=>{
      left_move('.contact_move_box_1','.contact_img_box_1');
      left_move('.contact_move_box_3','.contact_img_box_3');
      right_move('.contact_move_box_2','.contact_img_box_2');
    },7000)
    


  $('html,body').on("scroll",function(){

    page5 = $('.in_page_3').offset().top;

    let sct_c = sct - page5;
    console.log('sct_c',sct_c);

    let contact_box_1  = $('.contact_box.box_1');
    let contact_box_2  = $('.contact_box.box_2');
    let contact_text_1 = $('.contact_text_1');
    let contact_text_2 = $('.contact_text_2');
    let contact_card = $('.contact_card');
    let contact_back_img = $('.contact_back_img');



    if (sct_c >= 4000) {
      contact_box_1.stop(true,true).animate({
        top: 0,
        opacity: 1,
        height: 70,
        borderRadius: 50
      }, 600, 'swing');

      contact_text_1.css({ 
        opacity:1 
      });

      contact_box_2.stop(true,true).animate({
        top: 0,
        opacity: 1,
        height: 70,
        borderRadius: 50
      }, 600, 'swing');

      contact_text_2.css({ 
        opacity:1 
      });

      contact_card.css({ 
        visibility: 'visible',
        opacity:1
      });

      contact_back_img.stop(true,true).animate({ 
        opacity: 0 
      }, 600, 'swing');
    }else {
      if (sct_c <= 4000) {
        contact_box_1.stop(true,true).animate({
          top: '-90vh',
          opacity: 0,
          height: 600,
          borderRadius: 30
        }, 600, 'swing');

        contact_box_2.stop(true,true).animate({
          top: '80vh',
          opacity: 0,
          height: 600,
          borderRadius: 30
        }, 600, 'swing');

        contact_text_1.css({ 
          opacity:0,
        });
        contact_text_2.css({ 
          opacity:0,
        });
        contact_card.css({ 
          opacity:0,
          visibility: 'hidden'
        });
        contact_back_img.stop(true,true).animate({ 
          opacity: 1 
        }, 600, 'swing');
      }
            
    }
  });

  // 상단 바로가기 버튼
  $('.up').on('click', function() {
    scrollToTop();
  });

  function scrollToTop() {
    $('html, body').animate({
      scrollTop: 0
    }, 'slow');
  }


   
      

 
});

