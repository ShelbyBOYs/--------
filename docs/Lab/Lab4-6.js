"use strict";
let Movies = [];
const getMovies = async () => {
 try {
    const response = await fetch("https://api.tvmaze.com/shows");
    if (!response.ok) {
        throw new Error("Помилка при завантаженні даних");

    }
    const data = await response.json();
    Movies = data;
    displayMovies(Movies);


 } catch (error) {
    console.error(error.message);
 }
};

const displayMovies = (moviesArray) => {
    const container = document.getElementById("movies");
    container.innerHTML = "";
    moviesArray.forEach(movie => {
        const{name, rating, genres, image} = movie;
        const movieHTML = `
        <div>
         <h2>${name}</h2>
         <p>Рейтинг: ${rating?.average ?? "немає рейтингу"}</p>
         <p>Жанри: ${genres.join(", ")}</p>
         <img src="${image?.medium ?? ""}">
        </div>
        `;
        container.innerHTML += movieHTML;
    });
};

getMovies();

const searchInput = document.getElementById("search");
 searchInput.addEventListener("input", (event) => {
    const value = event.target.value.toLowerCase();
    const  filtered = Movies.filter(movie => movie.name.toLowerCase().includes(value));
    displayMovies(filtered);

 });

const sortByNameBtn = document.getElementById("sort-name");
const sortByRatingBtn = document.getElementById("sort-rating");

sortByNameBtn.addEventListener("click", () => {
    const sorted = [...Movies].sort((a, b) => a.name.localeCompare(b.name));
    displayMovies(sorted);
});
sortByRatingBtn.addEventListener("click", () => {
    const sorted = [...Movies].sort((a, b) =>
        (b.rating?.average ?? 0) - (a.rating?.average ?? 0)
    );

    displayMovies(sorted);
});