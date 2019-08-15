$( function () {

  function showResult( result ) {
    for ( let i in result.rest) {

      // let cardTag = '<div class= card >'
      // let cardBodyTag = '<div class= card-body >'
      // let cardImgTag = '<div class= card-img > '
      // let img ='<img src=' + result.rest[i].image_url.shop_image1 + ' ></div>'
      // let name = '<h5 class= card-title>' + result.rest[i].name + '</h5>'
      // let time = '<ul class= card-list><li>' + result.rest[i].opentime + '</li>'
      // let address = '<li>' + result.rest[i].address + '</li>'
      // let tel = '<li>' + result.rest[i].tel + '</li></ul>'

      // $('.result').prepend(cardTag);
      // $('.card').prepend(cardBodyTag);
      // $('.card-body').prepend(cardImgTag);
      // $('.card-img').prepend(img);
      // $('.card-body').prepend(name);
      // $('.card-title').after(time);
      // $('.card-list').prepend(address);
      // $('.card-list').append(tel);
      // $('.card-list').after('</div></div>');
      let card ='<div class= card >' + '<div class= card-body >' +'<div class= card-img > '+'<img src=' + result.rest[i].image_url.shop_image1 + ' ></div>'+'<h5 class= card-title>' + result.rest[i].name + '</h5>'+'<ul class= card-list><li>' + result.rest[i].opentime + '</li>'+'<li>' + result.rest[i].address + '</li>'+'<li>' + result.rest[i].tel + '</li></ul>'
      
      $('.result').prepend(card);


      // 最初のテーブル出力タグ
      //$("#table").append("<tr><td>" + "<img src= "+ result.rest[i].image_url.shop_image1 + " >" + "<tr><td>"+ result.rest[ i ].name + "</td><td>" + result.rest[ i ].opentime + "</td><td>" + result.rest[i].address + "</td><td>" + result.rest[i].tel + "</td><td>" + result.rest[i].url)
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
