"use strict";
{    
    let name = prompt("Ваше ім'я?");
    let plece = prompt("Ваше місто?");
    let like_color = prompt("Ваш улюблений колір?");
    let doyou_work = prompt("Ви працюєте?");
    let i = prompt("Ваш вік?");
        if (i < 18) {
            alert("Ви не досягли повноліття, доступ заборонено!");
        }
        Number(i);
        
    alert("Результат:"+name+"-"+"Місто:"+plece+"-"+"Колір:"+like_color+"-"+"Працюєте:"+doyou_work+"-"+"Вік:"+i);
    
}