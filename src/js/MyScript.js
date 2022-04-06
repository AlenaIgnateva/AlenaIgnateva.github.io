"use strict" ;


                    //Всё, что после загрузки страницы//

$(document).ready(function(){   
  
                        /*Активный пункт навигации*/
$(window).scroll(() => {
    let scrollDist = $(window).scrollTop();
    $("section").each((i, el) =>{
        if($(el).offset().top - ($("nav").outerHeight()+ 100) <= scrollDist){
            
            $('nav a').each((ii, elem) => {
                if ($(elem).hasClass('active')){
                    $(elem).removeClass('active');
                };
            });
            
            let idAct = $(el).attr("id");
            
//Без переменной в ссылке РАБОТАЕТ:
            if(idAct == 'about_me0'){$('a[href = "#about_me0"]').addClass('active')};
            if(idAct == 'my_skills0'){$('a[href = "#my_skills0"]').addClass('active')};
            if(idAct == 'case1'){$('a[href = "#case1"]').addClass('active')};
            if(idAct == 'calc1'){ $('a[href = "#calc1"]').addClass('active')};
            if(idAct == 'reviews0'){$('a[href = "#reviews0"]').addClass('active')};
            if(idAct == 'feedback0'){$('a[href = "#feedback0"]').addClass('active')};
                                    
//С ней не работает 
//            hrefAct = '#' + idAct;
//      ни так   $('a[href = hrefAct]').addClass('active');
//      ни так   $('a[href = `${hrefAct}`]').addClass('active');
        }
    });
});
    
                    /*Анимация цифр статистики*/
let observer1 = new IntersectionObserver(onEntry, {threshold: [0.7]});
let elem_anim = $('.number');
elem_anim.each((i,el) =>{
    observer1.observe(el);
});
       

                        /*Калькулятор*/
var sale = 1;
$('.calculation').click(function(){
    var re = /\s*,\s*/
    
    let val = [];
    
    val[0] = ($('#list1').val().split(re)),
    val[1] = ($('#list2').val().split(re)),
    val[2] = ($('#list3').val().split(re));
    
    
    let itog_money = sumik(val,0)*sale, srok = sumik(val,1);
    console.log(itog_money, sale);
    
    if (sale == 0.8){
        $('.sale').text(itog_money);
        $('.sale').attr('style','font-size : 20px; background: #d17700');
        $('.money').text("    " + sumik(val,0) + '  руб.');
        $('.money').attr('style','text-decoration: line-through;');
    } else{
        $('.num').attr('style','font-size : 20px; background: #d17700');
        $('.money').text(itog_money + '  руб.');
    }
    $('.time').text(srok + '  дн.');
    
    
});
                        /*Модальное окно*/
let timerId = setTimeout(modal_vis, 1000);

$('.closing').click(function(){
    $('#exampleModal').removeClass('show');
    $('#exampleModal').attr('style','display : none');
    $("body").removeClass("fixed");
});
    
$('.modal_btn').click(function(){
    sale = 0.8;
    $('#exampleModal').removeClass('show');
    $('#exampleModal').attr('style','display : none');
    $("body").removeClass("fixed");
});
                    /*Прогрузка фото*/
let observer2 = new IntersectionObserver(GoodFoto, {threshold: [0.6]});
$('.bad_foto').each((i,el) =>{
    observer2.observe(el);
});
    
$('.image-link').magnificPopup({type:'image'});
    
});
//////////////////////////////////////////////////

function onEntry (entry){
    entry.forEach(change =>{
        if (change.isIntersecting){
            change.target.classList.add('visibility');
        }
    });
};

function sumik(arrr,index){
    let variable = 0;
    for (let i = 0;i<3;i++){
            variable+=Number(arrr[i][index]);
        };
        return variable;
    };
    
function modal_vis(){
    $('#exampleModal').addClass('show');
    $('#exampleModal').attr({'aria-modal':"true",role:"dialog",style:"display: block; padding-right: 21px;"});
    $("body").addClass("fixed");
};

function GoodFoto (entry){
    entry.forEach(change =>{
        if (change.isIntersecting){
            change.target.src = change.target.dataset.src;
        }
    });
};

$('a[href$="1"]').click(function(){
            let hreff = $(this).attr("href");
            $('html, body').animate({scrollTop: $(hreff).offset().top});
        });
$('a[href$="0"]').click(function(){
            let hreff = $(this).attr("href");
            $('html, body').animate({scrollTop: $(hreff).offset().top - 100 + "px"});
        });