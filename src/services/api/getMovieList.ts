import { token } from "./keys";

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: token,
  },
};

const url = new URL("https://api.themoviedb.org/3/movie/popular");
url.searchParams.set("language", "ru-RU");

export default async function getMovieList() {
  const response = await fetch(url, options);
  const data = await response.json();
  return data;
}
