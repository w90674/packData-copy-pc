$(document).ready(function () {
    // 异步加载页头页尾
    $(".header").load("header.html");
    $(".footer").load("footer.html");
    // $(".indexHeader").load("tpl/header.html");
    // $(".footer").load("tpl/footer.html");
    /****************第二屏*******************/
    // 改变图片src
/*    $('.pagerTwo-block').on('mouseenter', function () {
        // 获取src
        var src = $(this).find('img').attr('src')
        // 获取src2
        var src2 = $(this).find('img').attr('src2');
        // 让src=src2
        $(this).find('img').attr('src', src2);
        // 让src2=src
        $(this).find('img').attr('src2', src);
    });
    // 鼠标移开
    $('.pagerTwo-block').on('mouseleave', function () {
        var src = $(this).find('img').attr('src')
        // 获取src2
        var src2 = $(this).find('img').attr('src2');
        // 让src=src2
        $(this).find('img').attr('src', src2);
        // 让src2=src
        $(this).find('img').attr('src2', src);
    })*/
    // 改变图片背景色:
    $('.pagerTwo-block').hover(function () {
       $(this).find('img').css({background:'orange'});
    },function () {
        $(this).find('img').css({background:'transparent'});
    });


    /******************导航affix**********************/
    window.onscroll=function() {
        var aboutTop = $(".about-pagerOne-p").offset().top + $(".about-pagerOne-p").height();
        var scrollTop = $(this).scrollTop();
        if(aboutTop < scrollTop){
            $(".header1").addClass('header2').removeClass('header1')
        }else {
            $(".header2").addClass('header1').removeClass('header2')
        }
    }
})