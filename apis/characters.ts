import { HEADERS, url } from "./constants";


export const getCharacters = async (limit=50, page?:number) => {
    const charactersUrl = page === 1?`${url}/character?limit=${limit}`: `${url}/character?limit=${limit}&page=${page}`
    let res = await fetch(charactersUrl, {
        headers: HEADERS,
    });
    return await res.json()
}

export const getCharacter = async (id: string) => {
    const characterUrl = `${url}/character/${id}`
    let res = await fetch(characterUrl, {
        headers: HEADERS,
    });
    return await res.json()

}

export const getCharacterQuotes = async (id: string) => {
   const characterQuoteUrl =  `${url}/character/${id}/quote`;
   let res = await fetch(characterQuoteUrl, {
    headers: HEADERS,
    });
    return res.json()
}