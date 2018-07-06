/**
 * Created by Administrator on 2018/6/5.
 */
$(function(){
    var mousenum=0;
    var timestamp1=0;
    var timestamp2;
    var wrapclass=document.getElementsByClassName('wrap1')[0];
    window.onmousewheel=function(e){
        timestamp2 = Date.parse(new Date());
        console.log(e.wheelDelta)
        // console.log(timestamp2);
        // console.log(e.wheelDelta);
        if(timestamp2-timestamp1>0){
           timestamp1=timestamp2;
           if(e.deltaY>0 || e.wheelDelta < 0){
            console.log(e.wheelDelta)
                  mousenum++;
                  if(mousenum>=8){
                    mousenum=8
                  }
                  if(mousenum%2==0){
                    // console.log(1)
                    wrapclass.style.top=(mousenum/2)*(-750)+"px";
                    wrapclass.style.transition="0.2s all ease"
                  }
               
           }else{
                  mousenum--;
                  if(mousenum<=0){
                    mousenum=0
                  }
                  if(mousenum%2==0){
                    wrapclass.style.top=(mousenum/2)*(-750)+"px";
                    wrapclass.style.transition="0.2s all ease"
                  }
           }
        }else{
            return false;
        }
        return false;
    }
    var timestamp11=0;
    var timestamp22;
    var mousenum1=0;
    document.body.addEventListener("DOMMouseScroll", function(e) {

        timestamp22 = Date.parse(new Date());
        if(timestamp22-timestamp11>0){
            timestamp11=timestamp22;
         if(e.detail>0){
               mousenum1++;
               if (mousenum1>=8) {
                   mousenum1=8
               }
               if(mousenum1%2==0){
                    wrapclass.style="top:"+(mousenum1/2)*(-750)+"px";
                    wrapclass.style.transition="0.2s all ease"
                  }
               console.log(mousenum1)
            }else{
                mousenum1--;
                if (mousenum1<=0) {
                   mousenum1=0
               }
               if(mousenum1%2==0){
                    wrapclass.style="top:"+(mousenum1/2)*(-750)+"px";
                    wrapclass.style.transition="0.2s all ease"
                  }
            }
        }    
        return false;
    });
})