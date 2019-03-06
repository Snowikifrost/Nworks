(function($){
    
    $(document).ready(function(){

        var lpNav = $('nav .container ul');
        // При клике на ссылку в меню
        lpNav.find('li a').on('click', function (e) {
            // Определяем элемент на странице, на который ссылается ссылка по ID
            var linkTrgt = $($(this).attr('href'));
            if (linkTrgt.length > 0) { // Если такой элемент присутствует
                e.preventDefault(); // Отменяем переход по умолчанию
                var offset = linkTrgt.offset().top; // Определяем отступ целевого элемента от начала документа
                $('body, html').animate({
                    scrollTop: offset - 44
                }, 750); // Плавно скролим документ к этому месту
            }
        });
        /* Отслеживание активного экрана */
// Описываем функцию, которая вычисляет активный экран
function lpSetNavActive() {
    // В этой переменной в конце each будет ID активного экрана
    var curItem = '';
    // Чтобы он туда попал, перебираем все экраны
    $('section').each(function () {
        // И если положение экрана от начала страницы меньше текущего скролла
        if ($(window).scrollTop() > $(this).offset().top - 150) {
            curItem = $(this).attr('id'); // В переменную вносим ID этого экрана
        }
    });
    // Далее, если href ссылки внутри активного пункта меню не совпадает с ID найденного нами активного экрана
    // Либо активные элементы отсутствуют в меню
    if (lpNav.find('li a.active').attr('href') != '#' + curItem || lpNav.find('li a.active').length == 0) {
        // Удаляем класс у текущего активного элемента
        lpNav.find('li a.active').removeClass('active');
        // И добавляем класс active пункту, внутри которого лежит ссылка, у которой href совпал с ID активного экрана 
        lpNav.find('li a[href="#' + curItem + '"]').addClass('active');
   
    }
}
// Вызываем эту функцию
lpSetNavActive(); // Единожды при загрузке страницы
$(window).on('load scroll', lpSetNavActive); // И каждый раз при скролле


    })
})(jQuery);


// ДОБАВЬ WOW.JS И ANIMATE
//портфолио - табы
//отзывы - слайдер
//форму обратной связи рили что бы работала
