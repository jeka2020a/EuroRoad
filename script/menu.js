$('document').ready( function(){

    $(".header__burger").click("on",function(){
        $(".header__menu-mobile").css(
            "display","block"
        );
    });
    $(".close__menu").click("on",function(){
        $(".header__menu-mobile").css(
            "display","none"
        );
    });


    $(".path__filter").click("on",function(){
        $(".catalog__filter-mobile").css(
            "display","block"
        );
    });
});