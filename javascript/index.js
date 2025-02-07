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
let titleOne = document.querySelector("h4.title");
let titleTwo = document.querySelector("h4.title-2");
let titleThree = document.querySelector("h4.title-3");
let ratingOne = document.querySelector("p.rating");
let ratingTwo = document.querySelector("p.rating-2");
let ratingThree = document.querySelector("p.rating-3");
let overviewOne = document.querySelector("p.overview");
let overviewTwo = document.querySelector("p.overview-2");
let overviewThree = document.querySelector("p.overview-3");
let releaseDateOne = document.querySelector("p.release_date");
let releaseDateTwo = document.querySelector("p.release_date-2");
let releaseDateThree = document.querySelector("p.release_date-3");
async function getData() {
  let myResponse = await fetch(
    "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc",
    options
  );
  let myData = await myResponse.json();
  // Use first movie's poster
  const firstMovie = myData.results[8];
  const secondMovie = myData.results[9];
  const thirdMovie = myData.results[11];
  imageOne.src = `https://image.tmdb.org/t/p/w500${firstMovie.poster_path}`;
  imageTwo.src = `https://image.tmdb.org/t/p/w500${secondMovie.poster_path}`;
  imageThree.src = `https://image.tmdb.org/t/p/w500${thirdMovie.poster_path}`;
  titleOne.innerHTML = `${firstMovie.title}`;
  titleTwo.innerHTML = `${secondMovie.title}`;
  titleThree.innerHTML = `${thirdMovie.title}`;
  ratingOne.innerHTML = ` Rating: ${Number(firstMovie.vote_average).toFixed(1)}`;
  ratingTwo.innerHTML = ` Rating: ${Number(secondMovie.vote_average).toFixed(1)}`;
  ratingThree.innerHTML = ` Rating: ${Number(thirdMovie.vote_average).toFixed(1)}`;
  overviewOne.innerHTML = `${firstMovie.overview}`;
  overviewTwo.innerHTML = `${secondMovie.overview}`;
  overviewThree.innerHTML = `${thirdMovie.overview}`;
  releaseDateOne.innerHTML = `Release-Date: ${firstMovie.release_date}`;
  releaseDateTwo.innerHTML = `Release-Date: ${secondMovie.release_date}`;
  releaseDateThree.innerHTML = `Release-Date: ${thirdMovie.release_date}`;
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
