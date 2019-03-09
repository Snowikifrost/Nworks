(function ($) {

    $(document).ready(function () {
        //прозрачная навигация вверху страницы
        function Header(){
            if($(window).scrollTop() == 0){
                $('nav').addClass('top');
            } else {
                $('nav').removeClass('top');
            }
        };
        Header();
        $(window).on('load scroll', Header);


        var lpNav = $('nav .container ul');
        lpNav.find('li a').on('click', function (e) {
            var linkTrgt = $($(this).attr('href'));
            if (linkTrgt.length > 0) {
                e.preventDefault(); 
                var offset = linkTrgt.offset().top; 
                $('body, html').animate({
                    scrollTop: offset - 44
                }, 750); 
            }
        });
        $('.footer-top').on('click',function(){
            $('html, body').animate({scrollTop: '0px'}, 800);
        });
        /* Отслеживание активного экрана */
        
        function lpSetNavActive() {
            var curItem = '';
            $('section').each(function () {
                if ($(window).scrollTop() > $(this).offset().top - 60) {
                    curItem = $(this).attr('id'); 
                }
            });
            if (lpNav.find('li a.active').attr('href') != '#' + curItem || lpNav.find('li a.active').length == 0) {  
                lpNav.find('li a.active').removeClass('active');
                lpNav.find('li a[href="#' + curItem + '"]').addClass('active');
            }
        }
        lpSetNavActive();
        $(window).on('load scroll', lpSetNavActive); 


        //задаем функции слайдера, из-за инициализации до объявления
        $('.sl-comments').on('changed.owl.carousel initialized.owl.carousel', function (e) {
            $('.sl-icons .sl-icon-dot img').removeClass('active');
            $('.sl-icons .sl-icon-dot img').eq(e.item.index).addClass('active');
        });
        //сам слайдер комментариев
        $('.sl-comments').owlCarousel({
            items: 1,
            autoplay: true
        });
        //клики по картиночкам
        $('.sl-icons .sl-icon-dot').on('click', function () {
            $('.sl-comments').trigger('to.owl.carousel', $(this).index());
        });


    })
})(jQuery);


// ДОБАВЬ WOW.JS И ANIMATE
//портфолио - табы
//форму обратной связи рили что бы работала