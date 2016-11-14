// $(document).ready(function(){
//     var count = 0;
//     var images = ("images/slide_1.png","images/slide_2.png","images/slide_3.png");
//     var image = $("header");
//
//     image.css("background-image","url("+images[count]+")");
//
//     setInterval(function(){
//         image.fadeOut(500,function(){
//            image.css("background-image","url("+images[count++]+")");
//             image.fadeIn(500);
//         });
//         if(count == images.length)
//         {
//             count = 0;
//         }
//         },3000);
//
//
// });
//











// /**
//  * Created by bakebwajonathan on 11/12/16.
//  */
// $(function() {
//
//     $('a[href*=#]:not([href=#])').click(function() {
//         if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
//             var target = $(this.hash);
//             target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
//             if (target.length) {
//                 $('html,body').animate({
//                     scrollTop: target.offset().top
//                 }, 1000);
//                 return false;
//             }
//         }
//     });
//
// });
//Array of images which you want to show: Use path you want.
