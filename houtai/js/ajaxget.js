
$(function() {
    $(".left h2").click(function(){
        var sId = $(this).data("id"); //获取data-id的值
        window.location.hash = sId; //设置锚点
        loadInner(sId);
    })

    function loadInner(sId) {
        var sId = window.location.hash;
        var pathn, i;
        switch(sId) {
            case "#usermanage":
                pathn = "./childpage/usermanage.html";
                i = 0;
                break;
            case "#projectmanage":
                pathn = "./childpage/projectmanage.html";
                i = 1;
                break;
            case "#binding":
                pathn = "./childpage/binding.html";
                i = 2;
                break;
            case "#video":
                pathn = "./childpage/video.html";
                i = 3;
                break;
            case "#devicemanage":
                pathn = "./childpage/devicemanage.html";
                i = 4;
                break;
            case "#crame":
                pathn = "./childpage/crame.html";
                i = 5;
                break;
            default:
                pathn = "./childpage/usermanage.html";
                i = 0;
                break;
        }
        $(".right").load(pathn); //加载相对应的内容
        // $(".userMenu li").eq(i).addClass("current").siblings().removeClass("current"); //当前列表高亮
    }
    var sId = window.location.hash;
    loadInner(sId);
});