"use strict" ;

let site = {type_site: {
        "ВИЗИТКА": [2000, 5],
        "LANDING": [3000, 7],
        "МАГАЗИН": [4000, 10],
},
    design_site: {
        "ШАБЛОННЫЙ":  [2000, 2],
        "УНИКАЛЬНЫЙ": [3000, 4],
        "ШИКАРНЫЙ":   [4000, 7],
},
    adaptability_site: {
        "ПОЛНАЯ АДАПТИВНОСТЬ": [5000, 4],
        "ПОД ТЕЛЕФОНЫ":        [2000, 2],
        "ПОД КОМПЬЮТЕРЫ":      [2000, 2],
}};



if(confirm("Пройдите, пожалуйста, небольшой опрос для рассчёта стоимости и сроков выполнения вашего будущего сайта ♥ \n\n Выбирайте ответы из предложенных в скобках")){
    let answers = [];
    
    do{
       answers[0] = prompt("Вид сайта? \n (Визитка/Landing/Магазин)").toUpperCase(); 
    } while (!(["A","ВИЗИТКА","LANDING","МАГАЗИН"].includes(answers[0])));
    
    do{
       answers[1] = prompt("Дизайн сайта? \n (Шаблонный/Уникальный/Шикарный)").toUpperCase();
    } while (!(["ШАБЛОННЫЙ","УНИКАЛЬНЫЙ","ШИКАРНЫЙ"].includes(answers[1])));
    
    do{
       answers[2] = prompt("Адаптивность \n (Полная адаптивность/Под телефоны/Под компьютеры)").toUpperCase();
    }while (!(["ПОЛНАЯ АДАПТИВНОСТЬ","ПОД ТЕЛЕФОНЫ","ПОД КОМПЬЮТЕРЫ"].includes(answers[2])));
    
                    
    console.log(answers[0],answers[1],answers[2]) ;
    
    function sumic(index){
    let i = 0 , variable = 0;
    for (let key in site){
            variable+=site[key][answers[i]][index];
            i+=1;
        };
        return variable;
    };
    
    let itog_money = sumic(0), itog_time = sumic(1);
    
   
    console.log(itog_money, itog_time);
    
    
    let srok = String(Math.round(itog_time/7));
    
    alert(`Приблизительная стоимость такого сайта: ${itog_money} руб. 
\nМожем сделать за ${srok} недели \n\nЕсли заинтерисовало, оставьте заявку для уточнения всех деталей`);
    
    
    alert("Спасибо за посещение нашего сайта и хорошего вам дня :)");
}




