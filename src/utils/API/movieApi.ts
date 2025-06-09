const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const AUTH_BEARER = import.meta.env.VITE_TMDB_AUTHORIZATION_BEARER_KEY;

export const getMoviesData = async () => {
  try {
    const url = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}`;
    const res = await fetch(url);
    const data = await res.json();
    return data.results;
  } catch (err) {
    console.error("Fetch error (getMoviesData):", err);
    return [];
  }
};

export const getSeriesData = async () => {
  try {
    const url = `https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}`;
    const res = await fetch(url);
    const data = await res.json();
    return data.results;
  } catch (err) {
    console.error("Fetch error (getSeriesData):", err);
    return [];
  }
};

export const getJustReleaseData = async () => {
  try {
    const url = "https://api.themoviedb.org/3/movie/latest";
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${AUTH_BEARER}`,
      },
    };
    const res = await fetch(url, options);
    const data = await res.json();
    return [data];
  } catch (err) {
    console.error("Fetch error (getJustReleaseData):", err);
    return [];
  }
};
