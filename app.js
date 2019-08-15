$( function () {

  function showResult( result ) {
    for ( let i in result.rest) {

      let card ='<div class= card >' + '<div class= card-body >' +'<div class= card-img > '+'<img src=' + result.rest[i].image_url.shop_image1 + ' ></div>'+'<h5 class= card-title>' + result.rest[i].name + '</h5>'+'<ul class= card-list><li>' + result.rest[i].opentime + '</li>'+'<li>' + result.rest[i].address + '</li>'+'<li>' + result.rest[i].tel + '</li></ul>'

      $('.result').prepend(card);

    }
  }
  let url = 'https://api.gnavi.co.jp/RestSearchAPI/v3/'
  let param = {
    keyid:'ca4a4dd4f35d46a67dee1144cdaf0292',
    range:'3',
    latitude:'26.316166',
    longitude:'127.757899',
    // hit_per_page: '100',
    freeword:''
  }

  $('#submit').on('click', function () {
    param.freeword = $('#search').val()
    $.getJSON( url, param, function( result ) {
      showResult( result )
    });
  });
});
