const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwYjE1NzMwZWNkMjg5NjE0YjE3NTE4YjVkNTA4MTQ1NiIsIm5iZiI6MTczODQ4MzQ2Ni41NTEsInN1YiI6IjY3OWYyNzBhMjhiYjk3ZGRkMzk1NWQ0YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.V6PY489UxECTh9oS8wPU7qhnvbWp5PWhduH4ANg8LP4",
  },
};
// API LINK --   "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc" -- \\
// Image for the website - poster_path
// rate vote_average
// title title
// Language original_language
// text overview
// release_date
let imageOne = document.querySelector("img#product-1");
let imageTwo = document.querySelector("img#product-2");
let imageThree = document.querySelector("img#product-3");
let titleOne = document.querySelector(".action-movies h4.title");
let titleTwo = document.querySelector(".action-movies h4.title-2");
let titleThree = document.querySelector(".action-movies h4.title-3");
let ratingOne = document.querySelector(".action-movies p.rating");
let ratingTwo = document.querySelector(".action-movies p.rating-2");
let ratingThree = document.querySelector(".action-movies p.rating-3");
let overviewOne = document.querySelector(".action-movies p.overview");
let overviewTwo = document.querySelector(".action-movies p.overview-2");
let overviewThree = document.querySelector(".action-movies p.overview-3");
let releaseDateOne = document.querySelector(".action-movies p.release_date");
let releaseDateTwo = document.querySelector(".action-movies p.release_date-2");
let releaseDateThree = document.querySelector(
  ".action-movies p.release_date-3"
);
let animeOneImage = document.querySelector(".anime-movies img#product-anime");
let animeTwoImage = document.querySelector(".anime-movies img#product-anime2");
let animeThreeImage = document.querySelector(
  ".anime-movies img#product-anime3"
);
let titleOneAnime = document.querySelector(".anime-movies h4.title");
let titleTwoAnime = document.querySelector(".anime-movies h4.title-2");
let titleThreeAnime = document.querySelector(".anime-movies h4.title-3");
let ratingOneAnime = document.querySelector(".anime-movies p.rating");
let ratingTwoAnime = document.querySelector(".anime-movies p.rating-2");
let ratingThreeAnime = document.querySelector(".anime-movies p.rating-3");
let overviewOneAnime = document.querySelector(".anime-movies p.overview");
let overviewTwoAnime = document.querySelector(".anime-movies p.overview-2");
let overviewThreeAnime = document.querySelector(".anime-movies p.overview-3");
let releaseDateOneAnime = document.querySelector(
  ".anime-movies p.release_date"
);
let releaseDateTwoAnime = document.querySelector(
  ".anime-movies p.release_date-2"
);
let releaseDateThreeAnime = document.querySelector(
  ".anime-movies p.release_date-3"
);
let horrorOneImage = document.querySelector(
  ".horror-movies img#product-horror"
);
let horrorTwoImage = document.querySelector(
  ".horror-movies img#product-horror2"
);
let horrorThreeImage = document.querySelector(
  ".horror-movies img#product-horror3"
);
let titleOneHorror = document.querySelector(".horror-movies h4.title");
let titleTwoHorror = document.querySelector(".horror-movies h4.title-2");
let titleThreeHorror = document.querySelector(".horror-movies h4.title-3");
let ratingOneHorror = document.querySelector(".horror-movies p.rating");
let ratingTwoHorror = document.querySelector(".horror-movies p.rating-2");
let ratingThreeHorror = document.querySelector(".horror-movies p.rating-3");
let overviewOneHorror = document.querySelector(".horror-movies p.overview");
let overviewTwoHorror = document.querySelector(".horror-movies p.overview-2");
let overviewThreeHorror = document.querySelector(".horror-movies p.overview-3");
let releaseDateOneHorror = document.querySelector(
  ".horror-movies p.release_date"
);
let releaseDateTwoHorror = document.querySelector(
  ".horror-movies p.release_date-2"
);
let releaseDateThreeHorror = document.querySelector(
  ".horror-movies p.release_date-3"
);
async function getData() {
  let myResponse = await fetch(
    "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc",
    options
  );
  let myData = await myResponse.json();
  const firstMovie = myData.results[8];
  const secondMovie = myData.results[11];
  const thirdMovie = myData.results[7];
  const fourthMovie = myData.results[0];
  const fifthMoive = myData.results[3];
  const sixthMovie = myData.results[1];
  const seventhMovie = myData.results[4];
  const eigthMovie = myData.results[13];
  const ninethMovie = myData.results[12];
  imageOne.src = `https://image.tmdb.org/t/p/w500${firstMovie.poster_path}`;
  imageTwo.src = `https://image.tmdb.org/t/p/w500${secondMovie.poster_path}`;
  imageThree.src = `https://image.tmdb.org/t/p/w500${thirdMovie.poster_path}`;
  animeOneImage.src = `https://image.tmdb.org/t/p/w500${fourthMovie.poster_path}`;
  animeTwoImage.src = `https://image.tmdb.org/t/p/w500${fifthMoive.poster_path}`;
  animeThreeImage.src = `https://image.tmdb.org/t/p/w500${sixthMovie.poster_path}`;
  horrorOneImage.src = `https://image.tmdb.org/t/p/w500${seventhMovie.poster_path}`;
  horrorTwoImage.src = `https://image.tmdb.org/t/p/w500${eigthMovie.poster_path}`;
  horrorThreeImage.src = `https://image.tmdb.org/t/p/w500${ninethMovie.poster_path}`;
  titleOne.innerHTML = `${firstMovie.title}`;
  titleTwo.innerHTML = `${secondMovie.title}`;
  titleThree.innerHTML = `${thirdMovie.title}`;
  ratingOne.innerHTML = ` Rating: ${Number(firstMovie.vote_average).toFixed(
    1
  )}`;
  ratingTwo.innerHTML = ` Rating: ${Number(secondMovie.vote_average).toFixed(
    1
  )}`;
  ratingThree.innerHTML = ` Rating: ${Number(thirdMovie.vote_average).toFixed(
    1
  )}`;
  overviewOne.innerHTML = `${firstMovie.overview}`;
  overviewTwo.innerHTML = `${secondMovie.overview}`;
  overviewThree.innerHTML = `${thirdMovie.overview}`;
  releaseDateOne.innerHTML = `Release-Date: ${firstMovie.release_date}`;
  releaseDateTwo.innerHTML = `Release-Date: ${secondMovie.release_date}`;
  releaseDateThree.innerHTML = `Release-Date: ${thirdMovie.release_date}`;
  /// Anime Api
  titleOneAnime.innerHTML = `${fourthMovie.title}`;
  titleTwoAnime.innerHTML = `${fifthMoive.title}`;
  titleThreeAnime.innerHTML = `${sixthMovie.title}`;
  ratingOneAnime.innerHTML = ` Rating: ${Number(
    fourthMovie.vote_average
  ).toFixed(1)}`;
  ratingTwoAnime.innerHTML = ` Rating: ${Number(
    fifthMoive.vote_average
  ).toFixed(1)}`;
  ratingThreeAnime.innerHTML = ` Rating: ${Number(
    sixthMovie.vote_average
  ).toFixed(1)}`;
  overviewOneAnime.innerHTML = `${fourthMovie.overview}`;
  overviewTwoAnime.innerHTML = `${fifthMoive.overview}`;
  overviewThreeAnime.innerHTML = `${sixthMovie.overview}`;
  releaseDateOneAnime.innerHTML = `Release-Date: ${fourthMovie.release_date}`;
  releaseDateTwoAnime.innerHTML = `Release-Date: ${fifthMoive.release_date}`;
  releaseDateThreeAnime.innerHTML = `Release-Date: ${sixthMovie.release_date}`;
  //Horror Movies - API
  titleOneHorror.innerHTML = `${seventhMovie.title}`;
  titleTwoHorror.innerHTML = `${eigthMovie.title}`;
  titleThreeHorror.innerHTML = `${ninethMovie.title}`;
  ratingOneHorror.innerHTML = ` Rating: ${Number(
    seventhMovie.vote_average
  ).toFixed(1)}`;
  ratingTwoHorror.innerHTML = ` Rating: ${Number(
    eigthMovie.vote_average
  ).toFixed(1)}`;
  ratingThreeHorror.innerHTML = ` Rating: ${Number(
    ninethMovie.vote_average
  ).toFixed(1)}`;
  overviewOneHorror.innerHTML = `${seventhMovie.overview}`;
  overviewTwoHorror.innerHTML = `${eigthMovie.overview}`;
  overviewThreeHorror.innerHTML = `${ninethMovie.overview}`;
  releaseDateOneHorror.innerHTML = `Release-Date: ${seventhMovie.release_date}`;
  releaseDateTwoHorror.innerHTML = `Release-Date: ${eigthMovie.release_date}`;
  releaseDateThreeHorror.innerHTML = `Release-Date: ${ninethMovie.release_date}`;
}
getData();

let myBar = document.querySelector("i#clicked");
let myHeader = document.querySelector("ul.list");
function toggleMenu() {
  if (window.matchMedia("(max-width: 768px)").matches) {
    if (myHeader.style.display === "none" || myHeader.style.display === "") {
      myHeader.style.display = "block";
    } else {
      myHeader.style.display = "none";
    }
  }
}

// Add event listener for clicking the bar icon
myBar.addEventListener("click", toggleMenu);

// Ensure menu is visible if resized to larger screen
window.addEventListener("resize", () => {
  if (!window.matchMedia("(max-width: 768px)").matches) {
    myHeader.style.display = "flex"; // Show menu on larger screens
  } else {
    myHeader.style.display = "none"; // Hide when switching back to mobile
  }
});
const themeToggle = document.querySelector(".fa-circle-half-stroke");
const body = document.body;
const logo = document.querySelector(".logo img");
const root = document.documentElement;

// Check for saved theme
if (localStorage.getItem("theme") === "light") {
  enableLightMode();
}

themeToggle.addEventListener("click", () => {
  if (root.getAttribute("data-theme") === "light") {
    enableDarkMode();
    localStorage.setItem("theme", "dark");
  } else {
    enableLightMode();
    localStorage.setItem("theme", "light");
  }
});

function enableDarkMode() {
  root.removeAttribute("data-theme"); // Remove light theme
  body.classList.remove("light-mode");
  logo.src = "images/LogoWhite.png";
}

function enableLightMode() {
  root.setAttribute("data-theme", "light");
  body.classList.add("light-mode");
  logo.src = "images/LogoBlack.png";
}
