  //焦点图轮换图js
    jQuery.focus = function(slid) {
        var sWidth = $(slid).width(); //获取焦点图的宽度（显示面积）
        var len = $(slid).find("ul li").length; //获取焦点图个数
        var index = 0;
        var picTimer;

        //以下代码添加数字按钮和按钮后的半透明条，还有上一页、下一页两个按钮
        var btn = "<div class='btnBg'></div><div class='btn'>";
        for (var i = 0; i < len; i++) {
            var ii = i + 1;
            btn += "<span>" + ii + "</span>";
        }
        btn += "</div><div class='preNext pre'></div><div class='preNext next'></div>";
        $(slid).append(btn);
        $(slid).find("div.btnBg").css("opacity", 0.5);

        //为小按钮添加鼠标滑入事件，以显示相应的内容
        $(slid + " div.btn span").css("opacity", 0.4).mouseenter(function() {
            index = $(slid + " .btn span").index(this);
            showPics(index);
        }).eq(0).trigger("mouseenter");

        //上一页、下一页按钮透明度处理
        $(slid + " .preNext").css("opacity", 0.2).hover(function() {
            $(this).stop(true, false).animate({
                "opacity": "0.5"
            }, 300);
        }, function() {
            $(this).stop(true, false).animate({
                "opacity": "0.2"
            }, 300);
        });

        //上一页按钮
        $(slid + " .pre").click(function() {
            index -= 1;
            if (index == -1) {
                index = len - 1;
            }
            showPics(index);
        });

        //下一页按钮
        $(slid + " .next").click(function() {
            index += 1;
            if (index == len) {
                index = 0;
            }
            showPics(index);
        });

        //本例为左右滚动，即所有li元素都是在同一排向左浮动，所以这里需要计算出外围ul元素的宽度
        $(slid + " ul").css("width", sWidth * (len));

        //鼠标滑上焦点图时停止自动播放，滑出时开始自动播放
        $(slid).hover(function() {
            clearInterval(picTimer);
        }, function() {
            picTimer = setInterval(function() {
                showPics(index);
                index++;
                if (index == len) {
                    index = 0;
                }
            }, 4000); //此4000代表自动播放的间隔，单位：毫秒
        }).trigger("mouseleave");

        //显示图片函数，根据接收的index值显示相应的内容
        function showPics(index) { //普通切换
            var nowLeft = -index * sWidth; //根据index值计算ul元素的left值
            $(slid + " ul").stop(true, false).animate({
                "left": nowLeft
            }, 300); //通过animate()调整ul元素滚动到计算出的position
            $(slid + " .btn span").removeClass("on").eq(index).addClass("on"); //为当前的按钮切换到选中的效果
            $(slid + " .btn span").stop(true, false).animate({
                "opacity": "0.4"
            }, 300).eq(index).stop(true, false).animate({
                "opacity": "1"
            }, 300); //为当前的按钮切换到选中的效果
        }
    };
    // 轮播图结束！
// ---------------------------------


$(document).ready(function() {
    // 重点新闻处切换
    $("#lanmu1 li").bind("mouseover", function() {
        var index = $(this).index();
        var divs = $("#tabs1> div");
        $(this).parent().children("li").attr("class", ""); //将所有选项置为未选中
        $(this).attr("class", "hover"); //设置当前选中项为选中样式
        divs.hide(); //隐藏所有选中项内容
        divs.eq(index).show(); //显示选中项对应内容
    });

    $("#lanmu2 li").bind("mouseover", function() {
        var index = $(this).index();
        var divs = $("#tabs2 > div");
        $(this).parent().children("li").attr("class", ""); //将所有选项置为未选中
        $(this).attr("class", "hover"); //设置当前选中项为选中样式
        divs.hide(); //隐藏所有选中项内容
        divs.eq(index).show(); //显示选中项对应内容
    });

    $("#lanmu3 li").bind("mouseover", function() {
        var index = $(this).index();
        var divs = $("#tabs3 > div");
        $(this).parent().children("li").attr("class", ""); //将所有选项置为未选中
        $(this).attr("class", "hover"); //设置当前选中项为选中样式
        divs.hide(); //隐藏所有选中项内容
        divs.eq(index).show(); //显示选中项对应内容
    });

    $("#lanmu-shipin li").bind("mouseover", function() {
        var index = $(this).index();
        var divs = $("#tabs-shipin > div");
        $(this).parent().children("li").attr("class", ""); //将所有选项置为未选中
        $(this).attr("class", "hover"); //设置当前选中项为选中样式
        divs.hide(); //隐藏所有选中项内容
        divs.eq(index).show(); //显示选中项对应内容
    });

     $("#lanmu-image li").bind("mouseover", function() {
        var index = $(this).index();
        var divs = $("#tabs-image > div");
        $(this).parent().children("li").attr("class", ""); //将所有选项置为未选中
        $(this).attr("class", "hover"); //设置当前选中项为选中样式
        divs.hide(); //隐藏所有选中项内容
        divs.eq(index).show(); //显示选中项对应内容
    });


    // 滚动新闻开始 代码来源http://www.cnblogs.com/ngnetboy/archive/2012/09/23/2699021.html
    $(function() {
        var settime;
        $(".mroll").hover(function() {
            clearInterval(settime);
        }, function() {
            settime = setInterval(function() {
                var $first = $(".mroll ul:first"); //选取div下的第一个ul 而不是li；
                var height = $first.find("li:first").height(); //获取第一个li的高度，为ul向上移动做准备；
                $first.animate({
                    "marginTop": -height + "px"
                }, 1000, function() {
                    $first.css({
                        marginTop: 0
                    }).find("li:first").appendTo($first); //设置上边距为零，为了下一次移动做准备
                });
            }, 3000);
        }).trigger("mouseleave"); //trigger()方法的作用是触发被选元素的制定事件类型
    });
    // 滚动新闻结束------------------



 
});
 