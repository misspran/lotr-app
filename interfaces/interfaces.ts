export interface ICharacter {
    _id?: string;
    name?: string;
    birth?: string;
    death?: string;
    gender?: 'Female' | 'Male';
    race?: string;
    realm?: string;
    spouse?: string;
    wikiUrl?: string;
}

export interface IMovie {
    _id?: string;
    name?: string;
    academyAwardNominations?: number;
    academyAwardWins?: number;
    boxOfficeRevenueInMillions?: number;
    budgetInMillions?: number;
    rottenTomatoesScore?: number;
    runtimeInMinutes?: number;
}

export interface IQuote {
    character: string;
    dialog: string;
    id: string; // this id refers to movieId
    movie: string;
    _id: string;
}

export interface IResponse {
    docs: ICharacter[]| IQuote[];
    limit: number;
    offset: number;
    page: number;
    pages: number;
    total: number;
}

export interface IQuotesWithName extends IQuote {
    characterName?: string,
}