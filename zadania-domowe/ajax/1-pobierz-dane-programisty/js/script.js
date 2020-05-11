"use strict";

$(function () {
    console.log("Pobierz dane programisty");
})

let btn = $("#btn");


btn.click(function () {

    fetch("https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php")
        .then(response => response.json())
        .then(response => {
            console.log(response);

            let div = $(`<div id='dane-programisty'></div>`).html(`<br> Imię: ${response.imie},<br> Nazwisko: ${response.nazwisko}, <br> Zawód: ${response.zawod}, <br> Firma: ${response.firma}`)
            btn.after(div);
        })
})