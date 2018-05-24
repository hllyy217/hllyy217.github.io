/**
 * Created by Administrator on 2018/5/4.
 */

window.onload=function(){
    smallArr=[
       "image/avatar-1-hover_03dd880.png","image/avatar-2-hover_561fdca.png","image/avatar-3-hover_691928a.png",
        "image/avatar-4-hover_182aa50.png","image/avatar-5-hover_b53855b.png"];
    smallArr1=[
        "image/avatar-1_0788f28.png","image/avatar-2_1b49ddc.png","image/avatar-3_7f9fe94.png","image/avatar-4_67ff066.png","image/avatar-5_79c8db5.png"
    ]
    var smallAll=document.getElementsByClassName("smallAll");
    var fourthone=document.getElementsByClassName("fourthone");
    for(var smNum=0;smNum<smallAll.length;smNum++){
        smallAll[smNum].onmouseover=function(){
           this.getElementsByTagName("img")[0].style="opacity:1";
            index=this.getAttribute("date");
            this.style.backgroundImage="url("+smallArr[index]+")";
            // console.log(smallArr[smNum]);
        }
        smallAll[smNum].onmouseout=function(){
            if(this.getAttribute("uage")=="0"){
                this.getElementsByTagName("img")[0].style="opacity:0";
                index=this.getAttribute("date");
                this.style.backgroundImage="url("+smallArr1[index]+")";
            }
        }
        smallAll[smNum].onclick=function(){
            index=this.getAttribute("date");
            for(var k=0;k<smallAll.length;k++){
                uage=smallAll[k].getAttribute("uage");
                if(uage=="1"){
                    smallAll[k].getElementsByTagName("img")[0].style="opacity:0";
                    smallAll[k].style.backgroundImage="url("+smallArr1[k]+")";
                    smallAll[k].setAttribute("uage","0");
                }
                fourthone[k].style="opacity:0";

            }
            this.setAttribute("uage","1");
            fourthone[index].style="opacity:1";
        }
    }
    var svg=document.getElementsByTagName("svg");
    for(h=0;h<svg.length;h++){
        svg[h].onmouseover=function(){
            this.children[1].setAttribute("fill","#ED0303");
            console.log(this.children[1]);
        }
        svg[h].onmouseout=function(){
            this.children[1].setAttribute("fill","#9e1414");
        }
    }
    var secondConfirm=document.getElementsByClassName("second_confirm")[0];
  var secondRemove=document.getElementById("secondRemove");
    secondRemove.onclick=function(){
        secondConfirm.style.display="none";
    }
    var contentLeft=document.getElementsByClassName("content_left")[0];
    var wrapvideoTop=document.getElementsByClassName("wrapvideoTop")[0];
    var stopvideo=document.getElementById("stopvideo");
    var video=document.getElementsByTagName("video")[0];

    contentLeft.onclick=function () {
        wrapvideoTop.style.display="block";
        video.play();
    }
    stopvideo.onclick=function(){
        video.currentTime = 0;
        video.pause();
        wrapvideoTop.style.display="none";
    }
    var NIEOverTop=document.getElementsByClassName("NIEOverTop")[0];
    var NIEOverBottom=document.getElementsByClassName("NIEOverBottom")[0];
    f=0;
    g=0;
    abc=setInterval(function(){
       if(f==0){
          f=1;
          g=1;
          NIEOverTop.style="opacity:0.2";
           NIEOverTop.style="top:-55px;";
           NIEOverTop.style.transition="all 0.8s";
           NIEOverBottom.style="opacity:0.2";
           NIEOverBottom.style="top:0px;";
           NIEOverBottom.style.transition="all 0.8s ";
           NIEOverBottom.style.transitionDelay="0.4s";
           setTimeout(function(){
               NIEOverTop.style="top:55px";
               console.log(NIEOverTop.style.top);
           },1200);

       }else{
           f=0;
           g=0;
           NIEOverTop.style="opacity:1";
           NIEOverTop.style="top:0px;";
           NIEOverTop.style.transition="all 0.8s";
           NIEOverTop.style.transitionDelay="0.4s";
           NIEOverBottom.style="top:-55px";
           NIEOverBottom.style.transition="all 0.8s ";
           setTimeout(function(){
               NIEOverBottom.style="top:55px";
           },1200);

       }
       // NIEOverTop.style="opacity:0.2";
       //  NIEOverTop.style="top:-55px;";
       //  NIEOverTop.style.transition="all 0.8s";
       //  NIEOverBottom.style="opacity:0.2";
       //  NIEOverBottom.style="top:0px;";
       //  NIEOverBottom.style.transition="all 0.8s ";
       //  NIEOverBottom.style.transitionDelay="0.4s ";


    },3000)
    var num=0;
    leng=0;
    var secondRemove=document.getElementById("secondRemove");
    var confirm=document.getElementsByClassName("confirm")[0];
    var liGroup=document.getElementsByName("list");
    for(var i=0;i<liGroup.length;i++) {
        liGroup[i].onclick=function(){
            confirm.style="display:block"
            num=this.getAttribute("date");
            leng=-(num*780);
            secondWrap.style.left=leng+"px";
        }
    }
    secondRemove.onclick=function(){
        confirm.style.display="none";
    }


    var secondWrap=document.getElementsByClassName("second_wrap")[0];
    var secondLeft=document.getElementsByClassName("secondLeft")[0];
    var secondRight=document.getElementsByClassName("secondRight")[0];
    secondLeft.onclick=function(){
        if(num==0){
            num=8;
            leng=-6240;
        }
        num--;
        leng=leng+780;
        secondWrap.style.left=leng+"px";
        secondWrap.style.transition="all 0.5s";

    }
    secondRight.onclick=function(){
        if(num==7){
            num=-1;
            leng=780;
        }
        num++;
        leng=leng-780;
        secondWrap.style.left=leng+"px";
        secondWrap.style.transition="all 0.5s";
    }
   var third1=document.getElementsByClassName("third")[0].getElementsByTagName("img")[0];
    var third2=document.getElementsByClassName("third")[0].getElementsByTagName("img")[1];
    var third3=document.getElementsByClassName("third")[1].getElementsByTagName("img")[0];
    var third4=document.getElementsByClassName("third")[1].getElementsByTagName("img")[1];
    var third5=document.getElementsByClassName("third")[2].getElementsByTagName("img")[0];
    var third6=document.getElementsByClassName("third")[2].getElementsByTagName("img")[1];
    var third7=document.getElementsByClassName("third")[3].getElementsByTagName("img")[0];
    var third8=document.getElementsByClassName("third")[3].getElementsByTagName("img")[1];
    var third9=document.getElementsByClassName("third")[4].getElementsByTagName("img")[0];
    var third10=document.getElementsByClassName("third")[4].getElementsByTagName("img")[1];
    var thirdChange=document.getElementsByClassName("thirdChange")[0];
    function  thirdone(){
        third1.style="left:260px";
        third1.style.transition="left 0.6s";
        third1.style.transitionDelay="1s"
        third2.style="right:50px";
        third2.style.transition="right 0.6s";
        third2.style.transitionDelay="0.8s"
    }
    function thirdtow(){
        third1.style="left:-700px";
        third1.style.transition="left 0.6s";
        third1.style.transitionDelay="1s"
        third2.style="right:-650px";
        third2.style.transition="right 0.6s";
        third2.style.transitionDelay="0.8s"
    }
    function thirdthree(){
        third3.style="left:260px;";
        third3.style.transition="left 0.6s";
        third3.style.transitionDelay="1s"
        third4.style="right:175px";
        third4.style.transition="right 0.6s";
        third4.style.transitionDelay="0.8s"
    }
    function thirdfour(){
        third3.style="left:-700px;";
        third3.style.transition="left 0.6s";
        third3.style.transitionDelay="1s"
        third4.style="right:-1000px";
        third4.style.transition="right 0.6s";
        third4.style.transitionDelay="0.8s"
    }
    function thirdfive(){
        third5.style="left:260px;";
        third5.style.transition="left 0.6s";
        third5.style.transitionDelay="1s"
        third6.style="right:100px";
        third6.style.transition="right 0.6s";
        third6.style.transitionDelay="1s"
    }
    function thirdsix(){
        third5.style="left:-700px;";
        third5.style.transition="left 0.6s";
        third5.style.transitionDelay="1s"
        third6.style="right:-650px";
        third6.style.transition="right 0.6s";
        third6.style.transitionDelay="1s"
    }
    function thirdSeven(){
        third7.style="left:260px;";
        third7.style.transition="left 0.6s";
        third7.style.transitionDelay="1s"
        third8.style="right:20px";
        third8.style.transition="right 0.6s";
        third8.style.transitionDelay="1s"
    }
    function thirdeight(){
        third7.style="left:-700px;";
        third7.style.transition="left 0.6s";
        third7.style.transitionDelay="1s"
        third8.style="right:-650px";
        third8.style.transition="right 0.6s";
        third8.style.transitionDelay="1s"
    }
    function thirdnight(){
        third9.style="left:260px;";
        third9.style.transition="left 0.6s";
        third9.style.transitionDelay="1s"
        third10.style="right:50px";
        third10.style.transition="right 0.6s";
        third10.style.transitionDelay="1s"
    }
    function thirdten(){
        third9.style="left:-700px;";
        third9.style.transition="left 0.6s";
        third9.style.transitionDelay="1s"
        third10.style="right:-650px";
        third10.style.transition="right 0.6s";
        third10.style.transitionDelay="1s"
    }
    third1.style="left:260px";
    third2.style="right:50px";
    thirdNum=0;
   var  thirdLength=0;
    function thirdStart(){
        thirdNum++;
        if(thirdNum==1){
            thirdten();
            thirdChange.style.left=thirdLength+"px";
            thirdChange.style.transition="all 0s";
            third1.style="left:260px";
            third2.style="right:50px";
            thirdthree();
            thirdtow();
        }else if(thirdNum==2){
            thirdfive();
            thirdfour()
        }else if(thirdNum==3){
            thirdSeven();
            thirdsix()
        }else if(thirdNum==4){
            thirdnight();
            thirdeight()
        }else{
            thirdone();
        }
        thirdLength=-thirdNum*1536;
        thirdChange.style.left=thirdLength+"px";
        thirdChange.style.transition="all 0.8s";
        if(thirdNum==4){
            setTimeout(function(){
                thirdNum=0;
                thirdLength=0;

            },1600)
        }
    }
    stopThird=setInterval(thirdStart
    ,5000)

    // thirdLeft.onclick=function(){
    //
    // }
    // thirdRight.onclick=function(){
    //     console.log(1);
    //     thirdNum++;
    //     if(thirdNum==1){
    //         thirdthree();
    //         thirdtow();
    //     }else if(thirdNum==2){
    //         thirdfive();
    //         thirdfour()
    //     }else if(thirdNum==3){
    //         thirdSeven();
    //         thirdsix()
    //     }else if(thirdNum==4){
    //         thirdnight();
    //         thirdeight()
    //     }else{
    //         thirdone();
    //     }
    // }
    var thirdRight=document.getElementsByClassName("thirdLeft")[0];
    var thirdLeft=document.getElementsByClassName("thirdRight")[0];
    thirdLeft.onclick=function(){
        //     thirdNum--;
        //     if(thirdNum==1){
        //         thirdthree();
        //         thirdtow();
        //     }else if(thirdNum==2){
        //         thirdfive();
        //         thirdfour()
        //     }else if(thirdNum==3){
        //         thirdSeven();
        //         thirdsix()
        //     }else if(thirdNum==4){
        //         thirdnight();
        //         thirdeight()
        //     }else{
        //         thirdone();
        //     }
        // thirdLength=-thirdNum*1536;
        // thirdChange.style.left=thirdLength+"px";
        // thirdChange.style.transition="all 0.8s";

    }
    thirdRight.onclick=function(){
            clearInterval(stopThird);
            thirdNum++;
            if(thirdNum==1){
                thirdthree();

            }else if(thirdNum==2){
                thirdfive();
                thirdfour()
            }else if(thirdNum==3){
                thirdSeven();
                thirdsix()
            }else if(thirdNum==4){
                thirdnight();
                thirdeight();
                setTimeout(function(){
                    thirdNum=0;
                    thirdLength=0;
                    thirdChange.style.left=thirdLength+"px";
                    thirdChange.style.transition="all 0s";
                    thirdten();
                    third1.style="left:260px";
                    third2.style="right:50px";
                },2400)
            }else{
                thirdone();
            }
        thirdLength=-thirdNum*1536;
        thirdChange.style.left=thirdLength+"px";
        thirdChange.style.transition="all 0.8s";
    }
   // var smallone=document.getElementsByClassName("smallone")[0];
   // var smalltow=document.getElementsByClassName("smalltow")[0];
   //  var smallthree=document.getElementsByClassName("smallthree")[0];
   //  var smallfour=document.getElementsByClassName("smallfour")[0];
   //  var smallfive=document.getElementsByClassName("smallfive")[0];
   //  smallone.onclick=function(){
   //  }
}
// thirdLeft.onclick=function(){
//
// }
// thirdRight.onclick=function(){
//     console.log(1);
//     // thirdNum++;
//     // if(thirdNum==1){
//     //     thirdthree();
//     //     thirdtow();
//     // }else if(thirdNum==2){
//     //     thirdfive();
//     //     thirdfour()
//     // }else if(thirdNum==3){
//     //     thirdSeven();
//     //     thirdsix()
//     // }else if(thirdNum==4){
//     //     thirdnight();
//     //     thirdeight()
//     // }else{
//     //     thirdone();
//     // }
// }

