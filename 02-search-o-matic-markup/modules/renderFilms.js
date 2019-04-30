export const renderFilms = (dsts) => {
    let fragment = document.createDocumentFragment();
    let container = document.querySelector(".search-block__films");
    data.forEach((data)=>{
        let element = document.createElement("movie");
        element.innerHTML = `
        <div class="search-block__films__tile">
            <img class="search-block__films__tile--content-film" src="${data.poster}" alt="${data.Title}">
            <div class="search-block__films__tile--content-about">
                <p class="search-block__films__tile--content-about-film">${data.Title}</p>
                <p class="search-block__films__tile--content-about-autor">${data.year}</p>
            </div>
        </div>`;
        fragment.appendChild(element);
    });
    return container.appendChild(fragment);
}