'use client';

import { useState } from "react";
import { getCharacter, getCharacterQuotes } from '../apis/characters';
import { getMovieQuotes } from '../apis/movies';
import { IQuote, IQuotesWithName } from "../interfaces/interfaces";
import {QuotesIcon} from '../images/quotesIcon'

export const Quotes = ({movieId, characterId, name }: { movieId?: string, characterId?: string, name?: string }) => {
const [quotes, setQuotes] = useState<IQuote[]>([]);
const [showModal, setShowModal] = useState(false);
const [page, setPage] = useState({current: 1, total: 1})
    return (
    <>
    <div onClick={() => {
        setShowModal(true)
        const fetchData = async () => {
            if(movieId){
                const items = await getMovieQuotes(movieId, page.current);
                const quotes = items.docs;
                const quotesWithNames = await Promise.all(quotes.map(async (quote: any) => await getCharacter(quote.character))).then(res => res.map((res, index) => { return {...items.docs[index], characterName: res.docs[0].name}}))
                setQuotes(quotesWithNames);
                setPage({current: items.page, total: items.pages})
                
            } else if (characterId){
                const items = await getCharacterQuotes(characterId);
                setQuotes(items.docs);
            }
        }
        fetchData().catch(console.error);
        }}><QuotesIcon /></div>

        {showModal ? (
            <div className="flex justify-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none top-0 max-h-[100vh]">
                <div className="relative w-auto my-6 mx-auto max-w-3xl">
                    <div className="border-0 rounded-lg shadow-lg flex flex-col w-full bg-white outline-none focus:outline-none">
                        <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t ">
                        <h3 className="text-lg font-semibold">{name} Quotes</h3>
                        <button
                            className="bg-transparent border-0 text-black float-right"
                            onClick={() => setShowModal(false)}
                        >
                            <span className="text-black opacity-7 h-6 w-6 text-xl block py-0 rounded-full">
                            x
                            </span>
                        </button>
                        </div>
                        <div className="p-6 relative flex-auto">
                        { quotes?.length ? 
                        <div> 
                        {quotes.map((lotrQuotes: IQuotesWithName) => 
                            <div key={lotrQuotes._id} className="border-spacing-2">
                                <div className="p-2 text-left">{lotrQuotes.dialog} {lotrQuotes.characterName? `- ${lotrQuotes.characterName}`: null}</div>
                            </div>
                        )}
                        <button onClick={
                            async () => { 
                                    if(movieId && page.current<=page.total){
                                        const items = await getMovieQuotes(movieId, page.current + 1);
                                        const quotesWithNames = await Promise.all(items.docs.map(async (quote: any) => await getCharacter(quote.character))).then(res => res.map((res, index) => { return {...items.docs[index], characterName: res.docs[0].name}}))
                                        setQuotes([ ...quotes, ...quotesWithNames]);
                                        setPage({current: items.page, total: items.pages})
                                        
                                    } else if (characterId){
                                        const items = await getCharacterQuotes(characterId);
                                        setQuotes(items.docs);
                                    }
                                }
                            }
                            className="rounded-md bg-slate-200 px-4 py-2"
                        >Show More</button>
                        </div>: <div>{movieId? `loading...`: `Sorry, there are no quotes.`}</div>}
                        </div>


                        <div className="flex items-center justify-end p-4 border-t border-solid border-blueGray-200 rounded-b mx-2">
                        <button
                            className="background-transparent font-semibold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 rounded-b"
                            type="button"
                            onClick={() => setShowModal(false)}
                        >
                            Close
                        </button>
                        </div>
                    </div>
                </div>
            </div>
        ) : null}
        </>
    )
};
export default Quotes;