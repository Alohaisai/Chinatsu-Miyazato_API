

  function showResult( result ) {
    for ( let i in result.rest ) {
      $("#table").append("<tr><td>" + result.rest[ i ].name + "</td><td>" + result.rest[ i ].opentime )
    }
  }

  $( function () {
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
