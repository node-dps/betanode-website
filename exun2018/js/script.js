function navUpdate(){
    if (window.pageYOffset > window.innerHeight/8){
        $('nav').css({
            /*'box-shadow': '0 10px 5px -10px rgba(20,20,20,0.7)',*/
            'background-color': 'white',
            'color': 'black'
        });
        /*$('.sub-container').css({
            'background': 'white',
            'color': 'black'
        });*/
        $('nav.main a.nav-item').hover(function(){
            $(this).css('border-color', 'black');
        }, function(){
            $(this).css('border-color', 'transparent');
        });
        $('.mi').css({
            'background-color': 'white',
            'color': 'black'
        });
    }else{
        $('nav').css({
            /*'box-shadow': '0 10px 5px -10px transparent',*/
            'background-color': 'transparent',
            'color': 'white'
        });
        /*$('.sub-container').css({
            'background': 'linear-gradient(to bottom, rgb(105, 127, 255), rgb(202, 226, 255))',
            'color': 'white'
        });*/
        $('nav.main a.nav-item').hover(function(){
            $(this).css('border-color', 'white');
        }, function(){
            $(this).css('border-color', 'transparent');
        });
        $('.mi').css({
            'background-color': 'transparent',
            'color': 'white'
        });
    }
}

$(document).ready(function(){
    $('.la, .lb').css({ 'right' : 0, 'opacity' : 1 });
    $('.ra, .rb').css({ 'left': 0, 'opacity': 1 });

    navUpdate();
    $('section.home').css('background-position', 'calc(100%)');


    $('nav a').click(function(){
        $(this).toggleClass('active');
        if(this.hash.slice(1) != ''){
            var name = '.' + this.hash.slice(1) + '';
            $('html, body').animate({scrollTop: $(name).offset().top - 80}, 400);
            $('.sub-container').toggleClass('show');
            $('.sub-container').animate({height: '0px'}, 300);
        }
    });
    
    $(window).scroll(function(){
        navUpdate();
        
        $('.yeet').css('transform', 'translateY(' +  $(window).scrollTop()*0.2  + 'px)');
        $('.yes').css('transform', 'translateY(' +  $(window).scrollTop()*0.5  + 'px)');
        $('.balloon').css('transform', 'translateY(' +  $(window).scrollTop()*0.4  + 'px)');
        $('section.home').css('background-position-y', 'translateY(' +  $(window).scrollTop()*0.3  + 'px)');
    });

    $('.mi').click(function(){
        if ($('.sub-container').hasClass('show')){
            $('.sub-container').toggleClass('show');
            $('.sub-container').animate({height: '0px', opacity: 0}, 300);
            if(window.pageYOffset <= 10){
                $('nav.sub').css('background-color', 'transparent');
                $('.mi').css('color', 'white');
            }
        }else{
            $('.sub-container').toggleClass('show');
            $('.sub-container').animate({height: '440px', opacity: 1}, 300);
            $('nav.sub').css('background-color', 'white');
            $('.mi').css('color', 'black');
        }
    });

    /*$('.financeSection .btn').click(function(){
        $('.f1').animate({opacity: 0}, 200);
        $('.f1').css('display', 'none');
        $('.ico').css('display', 'flex');
        $('.ico').animate({opacity: 1}, 200);
    });

    $('.financeSection .icon.back').click(function(){
        $('.ico').animate({opacity: 0}, 200);
        $('.ico').css('display', 'none');
        $('.f1').css('display', 'block');
        $('.f1').animate({opacity: 1}, 200);
    });

    $('.knowPlaceSection .btn').click(function(){
        $('.abt').animate({opacity: 0}, 200);
        $('.abt').css('display', 'none');
        $('.map').css('display', 'flex');
        $('.map').animate({opacity: 1}, 200);
    });

    $('.knowPlaceSection .icon.back').click(function(){
        $('.map').animate({opacity: 0}, 200);
        $('.map').css('display', 'none');
        $('.abt').css('display', 'block');
        $('.abt').animate({opacity: 1}, 200);
    });*/

    $('input, textarea').focus(function(){
        $(this).next().css('transform', 'translate(-120px, -50%)');
    });
    $('input, textarea').focusout(function(){
        $(this).next().css('transform', 'translate(0, -50%)');
    });

    $('.island').on('click', function(){
        if(window.innerWidth > 650){
            window.open('../source/P5/index.html', '_blank');
        }
    });

    $(window).keydown(function(event){
        if(event.keyCode == 13) {
            event.preventDefault();
            return false;
        }
    });

});