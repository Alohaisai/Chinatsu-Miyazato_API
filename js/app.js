$(function(){
  // スムーズスクロール トップに戻る
  $('.btn-wrapper').on('click',function(){
    $('body,html').animate({scrollTop: 0},500);
    return false;
  });

  // 検索ボタンで.found（We found good restaurants!）までスクロール
  $('.submit').on('click',function(){
    $('.container').slideDown(800);
    $("html,body").animate({scrollTop:$('.found').offset().top}, 2000);
    return false;
  });

// .readmoreを押すと.readmoreにon-clickが適用されてREAD MOREボタンが透明なる＆.hideで隠していた要素を表示する
  $(".readmore").on("click", function() {
    $(this).toggleClass("on-click");
    $(".hide").slideToggle(1000);
  });

  $('head').append(
    '<style>.fadein{display:none;}'
    );
    $(window).on("load", function() {
    $('.fadein').delay(1000).fadeIn("slow");
    });
});