"use strict";

{
    let name = prompt("Ваше ім'я?");
    let place = prompt("Ваше місто?");
    let like_color = prompt("Ваш улюблений колір?");
    let doyou_work = prompt("Ви працюєте?");
    let i = Number(prompt("Ваш вік?")); // одразу перетворюємо

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