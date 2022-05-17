function printDate(selector,initValue,count) {
   let container = document.getElementById(selector);
   for (let i= initValue; i <= count; i++) {
       let option =document.createElement("option");
       let optionText = document.createTextNode(i);
       option.appendChild(optionText);
       container.appendChild(option);
   }
}
printDate('day',1,31)
printDate('month',1,12)
printDate('year',1989,2022)




$(function(){
   

   $(window).on('scroll', function(){
     // $('#backToTop').show();

    var scrollSize = $(window).scrollTop()
      //console.log(scrollSize)

    if (scrollSize > 700) {
       $('#backToTop').css({
          bottom: '40px',
          opacity:1
       });
    } else {
       $('#backToTop').css({
          bottom: '500px',
          opacity:0
       });
    }


   })
   $('#backToTop').on('click', function (){
      $('html, body').animate({
         scrollTop:0,
      },1000)
   }) 
    
    //MENU ANIMATION

    $(window).on('scroll', function() {
       var scrollSize = $(window).scrollTop()



       if (scrollSize > 65) {
          $('#header').addClass('active_menu')
       } else {
          $('#header').removeClass('active_menu')
       }
    })




    //PRELOADER
    $(window).on('load', function(){
       $('.preloader').fadeOut(900);
    })

   


    $('.banner_slider').slick({
       prevArrow:'<i class="fa-solid fa-arrow-left banner_slick_arrow"></i>',
       nextArrow:'<i class="fa-solid fa-arrow-right banner_slick_arrow"></i>',
       dots:true,
       dotsClass:'banner_slider_dots',
       fade: true,
       autoplay: true,
       autoplaySpeed:1000,
       speed:1000,
    });


    //Countdown


    $('.count_down').countdown('2022/10/10', function(event) {
      var $this = $(this).html(event.strftime(''
        + '<div class="count_down_item"><span>%D</span><span>days</span></div>'
        + '<div class="count_down_item"><span>%H</span><span>hr</span></div>'
        + '<div class="count_down_item"><span>%M</span><span>min</span></div>'
        + '<div class="count_down_item"><span>%S</span><span>sec</span></div>'
       ));
    });
    $('.test').counterUp({
       delay: 50,
       time: 2000
    });
    new VenoBox({
      spinner: 'plane',
      spinColor: 'red',
      titleattr:'title',
    });




   var typed = new Typed('.type', {
  strings: [
     'Graphics Design', 
     'Web Term',
     'Digital Marketing ',
     'Web Design',
   ],
     typeSpeed:100,
     loop:true,
});
})







