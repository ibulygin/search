import { clearNode } from "../helpers/clearNode";
import { getFilms } from "./getFilms";

export let lisntners = () =>{
    document.querySelector(".search-block__field-label__wrapper--input")
        .addEventListener("keydown", function (){
        let requestStart = null;
        let request = document.querySelector(".search-block__field-label__wrapper--input").value;
        let tut = document.querySelector(".search-block__films");
        if(request!==requestStart ) {
            clearNode(tut);
            getFilms(request);
        }
    })
};