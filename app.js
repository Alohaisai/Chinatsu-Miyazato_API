$( function () {
  // let img = result.rest[i].image_url.shop_image1
  // let name = result.rest[i].name
  // let time = result.rest[i].opentime
  // let address = result.rest[i].address
  // let tel = result.rest[i].tel
  // let site = result.rest[i].url
  function showResult( result ) {
    for ( let i in result.rest ) {
      let img = "<div class= card><div class= body><div class= card-img><img src= "+ result.rest[i].image_url.shop_image1 + " ></div>"
      let name = "<h5 class= card-title>" + result.rest[i].name + "</h5>"
      let time = "<li>" + result.rest[i].opentime + "</li>"
      let address = "<li>" + result.rest[i].address + "</li>"
      let tel = "<li>" + result.rest[i].tel + "</li>"
      // $("#table").append("<tr><td>" + "<img src= "+ result.rest[i].image_url.shop_image1 + " >" + "<tr><td>"+ result.rest[ i ].name + "</td><td>" + result.rest[ i ].opentime + "</td><td>" + result.rest[i].address + "</td><td>" + result.rest[i].tel + "</td><td>" + result.rest[i].url)
      $(".search-result").before(img);
      $(".card-body").append(name);
      $(".card-body").after("<ul>" + time + address + tel +"</ul></div></div>")
      

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

  $("#submit").on("click", function () {
    param.freeword = $("#search").val()
    $.getJSON( url, param, function( result ) {
      showResult( result )
    });
  });
});
