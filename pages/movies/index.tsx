'use client';

import { useState, useEffect, useContext } from "react";
import { getMovies } from '../../apis/movies';
import { IMovie } from '../../interfaces/interfaces'
import {QuotesIcon} from '../../images/quotesIcon'
import {Quotes} from '../quotes';
import type { GetStaticProps, NextPage } from 'next'
import { NavBar } from "../../components/NavBar";

export const Movies = () => {
const [movies, setMovies] = useState<IMovie[]>([]);
const [movie, setSelectedMovie] = useState<IMovie>({})
    useEffect(() => {
        const fetchData = async () => {
            const items = await getMovies();
            setMovies(items.docs)
        }
        fetchData().catch(console.error);
    }, []);
    return (
        <>
        <table className="table-fixed border-spacing-2 mx-5">
        <thead className="bg-gray-50 border-2">
            <tr>
            <th className="p-4 w-2/6">Name</th>
            <th className="p-4 w-1/6">Rotten Tomato Score</th>
            <th className="p-4 w-1/6">Runtime (Minutes)</th>
            <th className="p-4 w-1/6">Academy Awards (wins/nominations)</th>
            <th className="p-4 w-1/6">Budget/Box Office Revenue (millions)</th>
            <th className="p-4 w-1/6">Quotes</th>
            </tr>
        </thead>
        <tbody>
            {movies.map((lotrMovie, index) => {
                return <tr key={lotrMovie._id} className="border-b-2 border-gray-200">
                    <td className="p-2 text-left w-2/6">{lotrMovie.name}</td>
                    <td className="p-2 text-center w-1/6">{lotrMovie.rottenTomatoesScore? Math.round(lotrMovie.rottenTomatoesScore): 'n/a'}</td>
                    <td className="p-2 text-center w-1/6">{lotrMovie.runtimeInMinutes}</td>
                    <td className="p-2 text-center w-1/6">{lotrMovie.academyAwardWins}/{lotrMovie.academyAwardNominations}</td>
                    <td className="p-2 text-center w-1/6">{lotrMovie.budgetInMillions}/{lotrMovie.boxOfficeRevenueInMillions}</td>
                    <td className="p-2 text-center w-1/6">
                        {index > 4? <div className="w-[24px] h-[24px] mx-auto" onClick={() => setSelectedMovie(lotrMovie)}>
                        <Quotes movieId={movie._id} name={movie?.name}/>
                        </div>: null}
                    </td>
                </tr>}
            )}
        </tbody>
        </table>
        </>
    )
};

export default Movies;