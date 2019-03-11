(function ($) {

    $(document).ready(function () {
        new WOW().init();

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

        //табулятор
        $('.portf-items').hide();
        $('.portf-items').eq(0).fadeIn(250);
        $('.tab-nav li').on('click',function(){  
            var curNav = $('.tab-nav').find('li.active-portf');
            var curTab = $('.container-tabs').find('.portf-items').eq(curNav.index());
            if(!curNav.hasClass('changing')){
                curNav.addClass('changing');
                if( !$(this).hasClass('active-portf')){
                    var nextNav = $(this);
                    nextNav.addClass('active-portf');
                    var nextTab = $(this).index();
                    curNav.removeClass('active-portf');
                    curTab.fadeOut(500, function(){
                        $('.portf-items').eq(nextTab).fadeIn(500,function(){   
                        curNav.removeClass('changing');
                        });
                    }); 
                 };
            };

        });
/* 

         // Помещаем в переменную набор заголовков вкладок
    var tabsTitlesItems = tabsTitles.find('ul li');
    // Добавляем класс "active" первому заголовку
    tabsTitlesItems.eq(0).addClass('active');
    // Добавляем класс "active" первой вкладке и отображаем ее
    tabsContentTabs.eq(0).addClass('active').show();
    // Устанавливаем высоту div с содержимым вкладок равной высоте первой вкладки
    tabsContent.height(tabsContent.find('.active').outerHeight());
    // По клику на заголовке вкладки
    tabsTitlesItems.on('click', function () {
        // Проверяем, не находится ли табулятор в переходном состоянии
        if (!tabs.hasClass('changing')) {
            // Если нет, то добавляем класс "changing", обозначающий переходное состояние
            tabs.addClass('changing');
            // Убираем класс "active" у активного заголовка
            tabsTitlesItems.removeClass('active');
            // Добавляем класс "active" заголовку, по которому кликнули
            $(this).addClass('active');
            // Помещаем в переменные:
            var curTab = tabsContent.find('.active'), // Активную вкладку
                nextTab = tabsContentTabs.eq($(this).index()); // Следующую вкладку
            // Помещаем в переменную текущую высоту контента
            var curHeight = curTab.outerHeight();
            // Отображаем следующую вкладку
            nextTab.show();
            // Помещаем в переменную высоту контента следующей вкладки
            var nextHeight = nextTab.outerHeight();
            // Прячем следующую вкладку, пока никто ее не увидел
            nextTab.hide();
            // Если высота контента следующей вкладки больше
            if (curHeight < nextHeight) {
                // То плавно увеличиваем высоту блока с контентом до нужной высоты
                tabsContent.animate({
                    height: nextHeight
                }, 500);
            }
            // И параллельно прячем текщую вкладку
            curTab.fadeOut(500, function () {
                // По окончании анимации
                // Если высота контента следующей вкладки меньше
                if (curHeight > nextHeight) {
                    // То плавно уменьшаем высоту блока с контентом до нужной высоты
                    tabsContent.animate({
                        height: nextHeight
                    }, 500);
                }
                // И параллельно отображаем следующую вкладку
                nextTab.fadeIn(500, function () {
                    // По окончании анимации
                    // Удаляем класс "active" у текущей (уже прошлой) вкладки
                    curTab.removeClass('active');
                    // Добавляем класс "active" следующей (уже текущей) вкладке
                    nextTab.addClass('active');
                    // Выводим табулятор из переходного состояния
                    tabs.removeClass('changing');
                });
            });

        }
    });
    // При изменении размера окна
    $(window).on('load resize', function () {
        // Устанавливаем высоту div с содержимым вкладок равной высоте активной вкладки
        tabsContent.height(tabsContent.find('.active').outerHeight());
    }); */
    })
})(jQuery);


// ДОБАВЬ WOW.JS И ANIMATE
//портфолио - табы
//форму обратной связи рили что бы работала