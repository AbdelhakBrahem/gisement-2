// $('document').ready(function(){
//     var count = 0;
//     $('.step').each(function(){
//       count++;
     
//     });
     
    var i = 0;
    //NEXT
    document.getElementById('#next').on('click', function(){
      if(count > i +1 ){
          i++;
          document.getElementsByClassName('.active').removeClass('active');
          document.getElementsByClassName('.step').eq(i).addClass('active');
         }
    });
      //PREV
    // $('#prev').on('click', function(){
    //  if(i > 0 ){
    //   i--;
    //   $('.active').removeClass('active');
    //   $('.step').eq(i).addClass('active');
    //  }
    // });
//   });