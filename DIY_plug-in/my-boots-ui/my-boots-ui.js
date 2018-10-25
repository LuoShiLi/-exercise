/**********************tabs 标签页******************************/
//自动匹配[data-toggle=tab]的父元素
$(".tabs:has([data-toggle=tab])")
    .on("click","[data-toggle=tab]",function (e) {
        e.preventDefault()//阻止默认行为
        //冒泡简化 this=>e.target（含有[data-toggle=tab]的标签）
        var $tar=$(this);
        if(!$tar.parent().is(".active")){
            $tar.parent().addClass("active")
                .siblings().removeClass("active");
            var id=$tar.attr("href");//获取当前标签的href属性值
            $(id).addClass("active")
                .siblings().removeClass("active");
        }
    })

/**********************accordion 手风琴******************************/
//自动匹配父元素
$(".accordion")
    .on("click","div.title",function (e) {
        e.preventDefault() //阻止默认行为
        //冒泡简化 this=>e.target（div.title）
        var $tar=$(this);
       $tar.next(".content").toggleClass("in")
         .siblings(".content").removeClass("in")

    })
