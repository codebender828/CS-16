/**
 * Created by bakebwajonathan on 11/14/16.
 */
$(document).ready(function(){
    var count = 0;
    var images = ["images/slide_1.png","images/slide_2.png","images/slide_3.png"];
    var image = $("header");

    image.css("background-image","url("+images[count]+")");

    setInterval(function(){
        image.fadeOut(500,function(){
            image.css("background-image","url("+images[count++]+")");
            image.fadeIn(500);
        });
        if(count == images.length)
        {
            count = 0;
        }
    },3000);
});
