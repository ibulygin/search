export function render(data){
    let fragment = document.createDocumentFragment();
    let container = document.querySelector('.search-block__films');
    data.forEach((data) => {
        let div = document.createElement("div");
        div.classList.add("search-block__films__tile");
        div.innerHTML = `<img class="search-block__films__tile--content-film" src="${data.poster}" alt="${data.Title}">
            <div class="search-block__films__tile--content-about">
                <p class="search-block__films__tile--content-about-film">${data.Title}</p>
                <p class="search-block__films__tile--content-about-autor">${data.year}</p>
            </div>`;
        fragment.appendChild(div);
    });
    container.appendChild(fragment);
}