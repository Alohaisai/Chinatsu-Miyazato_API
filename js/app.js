$( function () {
  // let timeIcon = '<i class="far fa-clock"></i>'
  // let addressIcon = '<i class="fas fa-map-marker-alt"></i>'
  // let telIcon = '<i class="fas fa-voicemail"></i>'


  function showResult( result ) {

    for ( let i in result.rest) {

      let src = '';
      if(result.rest[i].image_url.shop_image1 !== ''){
        // console.log(result.rest[i].image_url.shop_image1);
        src = result.rest[i].image_url.shop_image1;
      }else{
        src = "img/noimage.jpg";
      }


      let resultCard ='<div class= col-lg-4 ><div class= card><div class= card-body ><div class= text-center ><img src=' + src + '></div><div class= text-center> <div class=mt-3><h5 class= card-title>' + result.rest[i].name + '</h5></div></div>'+'<ul class= pl-0><li class= list-group>' + result.rest[i].opentime + '</li><li class= list-group>' + result.rest[i].address + '</li><li class= list-group>' + result.rest[i].tel + '</li></ul></div></div></div></div>'

      // $('img').attr('class','shop-img')
      if(i <= 5){
        $('.row.first').append(resultCard);
      }else{
        $('.hide .row').append(resultCard);

      }
    }

  }
  let url = 'https://api.gnavi.co.jp/RestSearchAPI/v3/'
  let param = {
    keyid:'ca4a4dd4f35d46a67dee1144cdaf0292',
    range:'3',
    latitude:'26.316166',
    longitude:'127.757899',
    hit_per_page: '100',
    freeword:''
  }

  $('#submit').on('click', function () {
    $('.row').empty()

    param.freeword = $('#search').val()
    $.getJSON( url, param, function( result ) {
      showResult( result )

    });

  });
});
