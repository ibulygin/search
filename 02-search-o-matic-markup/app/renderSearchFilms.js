import {mapMovie} from "../helpers/mapMovie.js";
import {render} from "./render.js";
import {clearNode} from "../helpers/clearNode.js";
import {renderHistory} from "./render.js";
import {getUnique} from "../helpers/getUnique.js";
import {numberOfFilms} from "../helpers/numberOfFilms.js";

export const renderSearchFilms = () => {
    let history = [];

    function getFilms(nameFilm)  {
        return fetch('http://www.omdbapi.com/?type=movie&apikey=7ea4aa35&s=' + nameFilm)
            .then(rez => {
                    return rez.json()
                }
            )
            .then((result) => {
                return result.Search.map(mapMovie);

            })
            .then((rezu) => {
                console.log(rezu.length);
                numberOfFilms(rezu.length);
                render(rezu);
                }
            )
            .catch((e) => {
                console.log(e);
                // document.querySelector(".search-block__result").innerHTML = `<p>Фильмы не найдены</p>`
            });

    };

    function start(){
        document.querySelector(".search-block__field-label__wrapper--input").addEventListener("keydown", function (e) {
            let conteinerFilms = document.querySelector(".search-block__films");
            let containerHistory = document.querySelector(".search-block__history");
            if (e.keyCode === 13) {
                clearNode(containerHistory);
                clearNode(conteinerFilms);
                let request = document.querySelector(".search-block__field-label__wrapper--input");
                history.push(request.value);
                let err = getUnique(history);
                renderHistory(err);
                getFilms(request.value);

                let arr = document.querySelectorAll(".search-block__history--item");
                if(arr.length){
                    Array
                        .from(arr)
                        .forEach((element) => {
                            this.element = element;
                            console.log(element.innerText);
                            element.addEventListener("click", () => {
                                document.querySelector(".search-block__field-label__wrapper--input").value = element.innerText;
                        })})
                };
            };
        });


    };

    return start();
};
