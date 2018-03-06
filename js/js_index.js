$(function () {
    $('.carousel').carousel();
    $('#demo').on('slid.bs.carousel', function (e) {
        console.log(e.to);
        switch(e.to)
        {
            case 0:
                $("#ch1").animate(function(){
                    "opacity","0"
                },900);

                break;
            case 1:
                $("#ch2").animate(800);
                console.log("b");
                break;
            case 3:
                $("#ch3").animate(800);
                break;
        }
        });
        jQuery("#gallery").unitegallery({
            gallery_theme: "tiles",
             tiles_type: "nested"						
        });
      });

