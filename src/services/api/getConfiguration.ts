import { token } from "./keys";

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: token,
  },
};

interface ImagesConfiguration {
  base_url: string;
  secure_base_url: string;
  backdrop_sizes: string[];
  logo_sizes: string[];
  poster_sizes: string[];
  profile_sizes: string[];
  still_sizes: string[];
}

interface Configuration {
  change_keys: string[];
  images: ImagesConfiguration;
}

const url = new URL("https://api.themoviedb.org/3/configuration");

export default async function getConfiguration(): Promise<Configuration | null> {
  const response = await fetch(url, options);
  const data = await response.json();
  return data;
}
