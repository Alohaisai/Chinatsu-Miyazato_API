$(function(){
  // スムーズスクロール トップに戻る
  $('.js-scroll').on('click',function(){
    $('body,html').animate({scrollTop: 0},500);
    return false;
  });
  
  // 検索ボタンでfoundまでスクロール
  $('.submit').on('click',function(){
    $('.container').slideDown(1000);
    $("html,body").animate({scrollTop:$('.found').offset().top}, 2000);
    return false;
  });
  
  // $('.submit').on('click',function(){
  //   $('.container').slideDown(1000);
  // });
  
  });