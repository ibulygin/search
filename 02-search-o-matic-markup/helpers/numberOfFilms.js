import {declensionWord} from "./declensionWord.js";

export function numberOfFilms(num) {
    let declensio = declensionWord(num);
    document.querySelector(".search-block__result").innerHTML =`Нашли ${num} ${declensio}`;
}