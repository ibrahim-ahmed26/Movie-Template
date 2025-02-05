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
async function getData() {
  let myResponse = await fetch(
    "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc",
    options
  );
  let myData = await myResponse.json();
  myData.results.forEach((element) => {
    console.log(element);
  });
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
  root.removeAttribute("data-theme");  // Remove light theme
  body.classList.remove("light-mode");
  logo.src = "images/LogoWhite.png";
}

function enableLightMode() {
  root.setAttribute("data-theme", "light");
  body.classList.add("light-mode");
  logo.src = "images/LogoBlack.png";
}