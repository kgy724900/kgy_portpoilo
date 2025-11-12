$(document).ready(function(){
    let scrollT=0;
    let in_page2_off_s=$('.in_page_2').offset().top;
    let in_page3_off_s=$('.in_page_3').offset().top;
    function clip_path(a,b){
     radius = Math.min((scrollT-b) / 10, 100);
    $(a).css({
        clipPath: `circle(${radius}% at center)`
    })
 }
    $('html,body').on('scroll',function(){
       scrollT=$(this).scrollTop();
        clip_path('.in_page_1',0);
        let in_page2_off=$('.in_page_2').offset().top;
        if(in_page2_off<=0){
            clip_path('.in_page_2', in_page2_off_s);  
        }
        let in_page3_off=$('.in_page_3').offset().top    
        if(in_page3_off<=0){
            clip_path('.in_page_3',in_page3_off_s);
        }
        console.log(scrollT);
    })
})
