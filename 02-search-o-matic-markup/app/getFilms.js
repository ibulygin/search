import {mapMovie} from "../helpers/mapMovie";
import {renderFilms} from "../modules/renderFilms";

export const getFilms = (nameFilm)=>{
    return fetch('http://www.omdbapi.com/?type=movie&apikey=7ea4aa35&s='+ url)
        .then(rez => rez.json())
        .then((result) => {
            return result.Search.map(mapMovie);
        })
        .then((rezu) => {
                console.log(rezu);
                renderFilms(rezu);
            }
        )
        .catch(()=>{
            // document.querySelector(".search-block__result").innerHTML = `<p>Фильмы не найдены</p>`
        });
}