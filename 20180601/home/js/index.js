/**
 * Created by YY on 2018/6/1.
 */
$.extend(jQuery.easing,{
    backIn: function(x,t, b, c, d, s){     //回退加速（回退渐入）
        if (typeof s == 'undefined') {
            s = 1.70158;
        }
        return c*(t/=d)*t*((s+1)*t - s) + b;
    },
    backOut: function(x,t, b, c, d, s){
        if (typeof s == 'undefined') {
            s = 3.70158;  //回缩的距离
        }
        return c*((t=t/d-1)*t*((s+1)*t + s) + 1) + b;
    }
});




$(function () {
    // $("#header").load("header.html");
    // $("#footer").load("footer.html");

//banner轮播
    (function () {
        var oDiv = $('.banner_wrap');
        var oPrev = oDiv.find(".prev");
        var oNext = oDiv.find(".next");
        var aSpan = oDiv.find(".middle span");
        var aBanners=oDiv.find(".banner_one");
        var animateFater = null;
        var nowIndex = 0;
        animateFater = aBanners.eq(0);
        animateImage();

        oNext.click(function(){
            if( nowIndex < aSpan.length-1 ){
                nowIndex++;
            }else{
                nowIndex = 0;
            }
            bannerAnimate();
        });

        oPrev.click(function(){
            if( nowIndex >0 ){
                nowIndex--;
            }else{
                nowIndex = aSpan.length-1
            }
            bannerAnimate();
        });

        aSpan.click(function(){
            // nowIndex = $(this).index();
            nowIndex=aSpan.index($(this));
            bannerAnimate();
        });

        function bannerAnimate(){

            aSpan.removeClass("now");
            aSpan.eq(nowIndex).addClass("now");
            aBanners.fadeOut(200);
            animateFater = aBanners.eq(nowIndex);
            animateFater.fadeIn(200);
            animateImage()
        }

        function animateImage(){
            animateFater.find(".image01").show().addClass("fadeInLeft");
            setTimeout(function(){
                animateFater.find(".image02").show().addClass("bounceInRight");
                animateFater.find(".image03").fadeIn(500);
            },300);
        }
    })();



//主要产品
    (function () {
        var oDiv = $('#production');
        var oPrev = oDiv.find(".prev");
        var oNext = oDiv.find(".next");
        var aDot = oDiv.find(".now_linebtn_one");
        var aSpan = oDiv.find(".now_line span");
        var aContents = oDiv.find(".content_one");
        var animateFater = null;
        var nowIndex = 0;
        animateFater = aContents.eq(0);


        oNext.click(function(){
            if( nowIndex < aDot.length-1 ){
                nowIndex++;
            }else{
                nowIndex = 0;
            }
            changaPro("fadeInRight");
        });

        oPrev.click(function(){
            if( nowIndex >0 ){
                nowIndex--;
            }else{
                nowIndex = aDot.length-1
            }
            changaPro("fadeInLeft");
        });

        aSpan.click(function(){
            var index = aDot.index($(this).parent());
            var action = (nowIndex>index)?"fadeInLeft":"fadeInRight";
            nowIndex = index;
            changaPro(action);
        });

        function changaPro(action){
            aDot.removeClass("now");
            aDot.eq(nowIndex).addClass("now");
            aContents.fadeOut(0);
            animateFater = aContents.eq(nowIndex);
            animateFater.fadeIn(200);
            animateFater.find("h1, p, img").attr("class","").addClass(action);
        }

    })();



//业务范围
    (function () {
        var oDiv = $('.business');
        var aIcons = oDiv.find(".shousuo_icon");
        var aDitails = oDiv.find(".yewucontent_ditail");
        var nowIndex = 0;
        aIcons.click(function () {
            nowIndex=aIcons.index($(this));
            if(aIcons.eq(nowIndex).hasClass("zhankai")){
                aDitails.slideUp(300);
                aIcons.removeClass("zhankai");
            }else{
                aDitails.slideUp(300);
                aDitails.eq(nowIndex).delay(300).slideDown(300);
                aIcons.removeClass("zhankai").eq(nowIndex).addClass("zhankai");
            }
        })

    })();



//团队介绍
    (function () {
        var oDiv = $('.teamcontent_wrap');
        var oPrev = oDiv.find(".prev");
        var oNext = oDiv.find(".next");
        var moveDiv = oDiv.find(".team-box");
        var timer = null;
        var nextTimer = null;
        var prevTimer = null;
        var nowIndex = 0;


        oPrev.click(function(){
            clearTimeout( prevTimer );
            prevTimer = setTimeout(function(){
                doPrev();
            },200)

        });
        oNext.click(function(){
            clearTimeout( nextTimer );
            nextTimer = setTimeout(function(){
                doNext();
            },200)

        });



        oDiv.hover(function(){
            clearInterval( timer );
        }, autoMove);

        function autoMove(){
            clearInterval( timer );
            timer = setInterval(function(){
                doNext();
            },5500)

        }
        autoMove();

        function doPrev(){
            moveDiv.find(".team-list:last").insertBefore(moveDiv.find(".team-list:first"));
            moveDiv.animate({"left": "-1100px"},0);
            moveDiv.animate({"left": "0px"},1000,'backOut');
            nowIndex--;
            if(nowIndex < 0){
                nowIndex = oDiv.find(".middle_points").find("span").length -1;
            }
            oDiv.find(".middle_points").find("span").removeClass("now").eq(nowIndex).addClass("now");
        }

        function doNext(){

            moveDiv.animate({"left": "-1100px"},1000,'backIn',function(){
                moveDiv.find(".team-list:first").appendTo(moveDiv);
                moveDiv.animate({"left": "0px"},0);
            });

            nowIndex++;
            if(nowIndex >= oDiv.find(".middle_points").find("span").length){
                nowIndex = 0;
            }
            oDiv.find(".middle_points").find("span").removeClass("now").eq(nowIndex).addClass("now");

        }





    })();



//返回顶部

        window.onscroll=function () {

            if(window.scrollY>500){
                $('#scrollTop_wrap').fadeIn(200);
            }else {$('#scrollTop_wrap').fadeOut(0);}
        };


        // 点击返回顶部滚动
        $('#scrollTop').click(function () {
            $('body,html').animate({
                scrollTop: 0
            }, 400);

            $(this).parent().animate({"bottom":1000,"opacity":0},400,function(){
                $('#scrollTop_wrap').css({
                    "opacity":1,
                    "bottom":160
                })
            });

        });








});