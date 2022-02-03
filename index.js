$(document).ready(function(){

    $.get('https://fakestoreapi.com/products', function(data, status){
      console.log(data)

      for (let i = 0; i<data.length; i++) {
        $('.rows').append("<div class='col-lg-3 col-md-3 col-sm-12 singleProduct'><img class='images' style='width:100%; height:150px;' src='"+data[i].image+"'><div class='bottom'><h1 class='head1'>"+data[i].category+"</h1><h4 class='head2'>"+data[i].title.slice(0, 15)+"</h4><h6 class='head3'>"+data[i].price+"</h6></div></div>")
      }
    });

    
    $.get('https://fakestoreapi.com/products?limit=8&sort=desc', function(data, status){
      console.log(data)

      for (let i = 0; i<data.length; i++) {
        $('.roots').append("<div class='col-lg-3 col-md-3 col-sm-12 singleProduct'><img class='images' style='width:100%; height:150px;' src='"+data[i].image+"'><div class='bottom'><h1 class='head1'>"+data[i].category+"</h1><a href='file:///C:/Users/DigiTrends/Desktop/aroma%20web/shirts.html/"+data[i].id+"'><h4 class='head2'>"+data[i].title.slice(0, 15)+"</h4><h6 class='head3'>"+data[i].price+"</h6></div></div>")
      }
    });

})

