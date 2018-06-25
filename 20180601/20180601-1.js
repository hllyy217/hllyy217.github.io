/**
 * Created by Administrator on 2018/6/1.
 */

   
 $(function(){
 $('.courone img').css({'display':'block'});
    $(".courone img").delay(3500).animate({
        marginTop:'-200px'
    });
    $('.context').delay(3800).animate({
        marginTop:'560px',
        opacity:'1'
    });
    $('.birdstudy').delay(4100).animate({
        opacity:'1',
        marginTop:'0'
    });
    $('.studyMy').delay(4400).animate({
        opacity:'1',
       marginTop:'15px'
    });
    $('.study').delay(4700).animate({
        opacity:'1',
        marginTop:'15px'
    });
    $('#concour').delay(5000).animate({
        top:'-1000px'
    }); 

    
    var knum=0;
     $('.headright>li').each(function(){
          console.log($(this))
        knum++;
        if(knum==4 || knum==5){
              $(this).attr("headnum",4)
        }else if(knum==6){
            $(this).attr("headnum",'')
        }else{
             $(this).attr("headnum",knum)
        }
     })
     $('.headright>li').hover(function(){
         // console.log($(this).children())
         $(this).children().addClass('liafter');
     },function(){
     $(this).children().removeClass('liafter');
     })
     $('.headright>li').click(function(){
        console.log($(this).attr("headnum"));

        // $('.headright>li').not($(this)).
        // $(this).children().addClass('liafter');
     })
     var birnum = 0;
     var birlength = 0
     $('.birbtn2').click(function(){
         birnum++;

         if(birnum>=2){
             birnum=2;
             $('.birbtn2').delay(1000).css({opacity:0.3})
         }else{
                 $('.birbtn1').css({opacity:1})
             $(this).animate({opacity:0.3},1000);
             $(this).delay(1000).animate({opacity:1},1000);
         }
         birlength=-birnum*1100;
         $('.cnpartNav').animate({
             left:birlength+'px',
             transition:'all 0.4s'
         },400)

     })
     $('.birbtn1').click(function(){
         birnum--;
         if(birnum<=0){
             birnum=0;
             $('.birbtn1').delay(1000).css({opacity:0.3})
         }else{
                 $('.birbtn2').css({opacity:1})
             $(this).animate({opacity:0.3},1000);
             $(this).delay(1000).animate({opacity:1},1000);
         }
         birlength=-birnum*1100;
         $('.cnpartNav').animate({
             left:birlength+'px',
             transition:'all 0.4s'
         },400)

     })
     setInterval(function(){
         $('.pricetext img:nth-child(2)').animate({
             opacity:'1'
         },1000)
         $('.pricetext img:nth-child(2)').animate({
             dispaly:"block",
             opacity:'0'
         },1000)

     },3000)
     $('.croudright').click(function(){
         $('.croudleft>span').css({left:'78px',transitionDelay:'0s'})
         $('.croudright>span').css({left:'0px',transitionDelay:'0.3s'})
         $('.croudpart1').css({
             left:'-910px',
             transition:'0.5s all linear '
         })
         $('.croudpart2').css({
             left:'0px',
             transition:'0.5s all linear '
         })

     })
     $('.croudleft').click(function(){
         $('.croudright>span').css({left:'-78px',transitionDelay:'0s'})
         $('.croudleft>span').css({left:'0px',transitionDelay:'0.3s'})
         $('.croudpart1').css({
             left:'0px',
             transition:'0.5s all linear '
         })
         $('.croudpart2').css({
             left:'910px',
             transition:'0.5s all linear '
         })

     })

 })