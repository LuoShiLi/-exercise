/**********************accordion 手风琴******************************/
jQuery.fn.accordion = function () {
    //this=>将来调用accordion的$对象
    var $parent = this
    //1.入侵html
    $parent.addClass("accordion")
         //奇数位置
        .children(":nth-child(odd)").addClass("title") //return all title
        .next().addClass("content fade") //return all content
        .first().addClass("in") //first content
    //2.绑定onclick
    $(".accordion").on("click", ".title", function () {
        //简化版冒泡
        //this=>e.target
        $(this).next(".content").toggleClass("in")
            .siblings(".content").removeClass("in")
    })
}

/**********************tabs 标签页******************************/
jQuery.fn.tabs=function () {
    //this=>将来调用tabs的$对象
    var $parent=this
    //1.侵入html
    $parent
        .children(":first-child").addClass("tabs")
        .children(":first-child").addClass("active")
        .children().attr("data-toggle","tab")
        .parent().next().children().attr("data-toggle","tab")
        .parent().next().children().attr("data-toggle","tab")
        .parent().parent().next().addClass("container")
        .children("div:first-child").addClass("active")
//2.绑定事件————利用冒泡优化代码
    var $ul=$parent.children(":first-child")
    $($ul)
        //简化版冒泡
        .on("click","[data-toggle=tab]",function () {
            //this=>e.target
            var $tar=$(this)
            if(!$tar.parent().is(".active")){
                $tar.parent().addClass("active")
                    .siblings().removeClass("active");
                var id=$tar.attr("href");
                $(id).addClass("active")
                    .siblings().removeClass("active");
            }
        })
}





















