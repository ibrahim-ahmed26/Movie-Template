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
  let myData =  await myResponse.json();
  myData.results.forEach((element) => {
    console.log(element);
  });
}
getData()
