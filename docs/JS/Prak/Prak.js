"use strict";

{
    let name = prompt("Ваше ім'я?");
    let place = prompt("Ваше місто?");
    let like_color = prompt("Ваш улюблений колір?");
    let doyou_work = prompt("Ви працюєте?");
    let i = Number(prompt("Ваш вік?"));
    let s = Boolean(prompt("Ви студент?"));
     // одразу перетворюємо
     console.log(typeof(name));
     console.log(typeof(place));
     console.log(typeof(like_color));
     console.log(typeof(doyou_work));
     console.log(typeof(i));
     console.log(typeof(s));

    if (i < 18) {
        alert("Ви не досягли повноліття, доступ заборонено!");
    } else {
        alert(
            "Результат: " + name +
            " - Місто: " + place +
            " - Колір: " + like_color +
            " - Працюєте: " + doyou_work +
            " - Вік: " + i
        );
    }
}