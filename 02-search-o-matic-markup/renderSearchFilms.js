import {mapMovie} from "./mapMovie.js";
import {render} from "./render.js";

export const renderSearchFilms = () => {
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
            if (e.keyCode === 13) {
                let request = document.querySelector(".search-block__field-label__wrapper--input").value;
                getFilms(request);
            }

        })
    };
    return start();
};

