import { HEADERS, url } from "./constants";

export const getMovies: any = async () => {
    const moviesUrl = `${url}/movie`
    let res = await fetch(moviesUrl, {
        headers: HEADERS,
    });
    return await res.json();

}

export const getMovie = async (id: string) => {
    const movieUrl = `${url}/movie/${id}`
    let res = await fetch(movieUrl, {
        headers: HEADERS,
    });
    return await res.json();
}

export const getMovieQuotes = async (id: string, page: number) => {
    const movieQuoteUrl =  `${url}/movie/${id}/quote?limit=20&page=${page}`;
    let res = await fetch(movieQuoteUrl, {
     headers: HEADERS,
     });
     res = await res.json();
     return { ...res.json(), loaded: true }
}