$(document).ready(function(){

    let menu_but=$('#menu_but');
    let main_menu_wrap= $('.main_menu_wrap')
    let close_but= $('.close_but')
    let oft1=$('.page_2').offset().top;
    let oft2=$('.page3_top').offset().top;
    let oft3=$('.page_4').offset().top;
    let oft4=$('.page_5').offset().top

    console.log('oft1',oft1)
    console.log('oft2',oft2)
    console.log('oft3',oft3)
    console.log('oft4',oft4)

  // 메뉴 버튼 영역
    menu_but.click(function(){
        main_menu_wrap.css({
            display:'flex'
        })

    })

    close_but.click(function(){
        main_menu_wrap.css({
        display:'none'
        })

    })


    let scrollT=0;


    $('html,body').on('scroll',function(){
        scrollT=$(this).scrollTop();
    
    })



    $('.license').on('click', function(e){

        $('html, body').animate({
            scrollTop: `${oft1-250}`
        }, 800);

        main_menu_wrap.css({
            display:'none'
        })
    });


    $('.skill').on('click', function(e){

        $('html, body').animate({
             scrollTop: `${oft2+100}`
        }, 800);

        main_menu_wrap.css({
            display:'none'
        })
    });


    $('.project').on('click', function(e){

        $('html, body').animate({
            scrollTop:`${oft3+800}`
        }, 800);

        main_menu_wrap.css({
            display:'none'
        })
    });

    $('.contact').on('click', function(e){
 
        $('html, body').animate({
            scrollTop:`${oft4+1200}`
        }, 800);

        main_menu_wrap.css({
            display:'none'
        })
    });

    

    // $('.toggle_menu').each(function(index){
    //     $(this).attr('data-index',index);
    // })
    // $('.toggle_menu').on('click',function(){
    //     let i=$(this).attr('data-index');
    //       console.log('i',i);
    //     let but_i=parseInt(i)+2;
    //     console.log('but_i',but_i);
    //     let oft=$(window).height();
    //     console.log('oft2',oft);
    //     $('html, body').animate({
    //         scrollTop:`${oft*i}`
    //     }, 800);
    //     main_menu_wrap.css({
    //         display:'none'
    //     })
    // })


})