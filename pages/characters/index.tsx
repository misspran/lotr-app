'use client';

import { useState, useEffect } from "react";
import { getCharacters } from '../../apis/characters';
import { ICharacter } from "../../interfaces/interfaces";
import { Quotes } from "../quotes";
import { Pagination} from "../../components/Pagination";
import { useRouter } from "next/router";

export const Characters = () => {
const [characters, setCharacters] = useState<ICharacter[]>([]);
const [page, setPage] = useState({current: 1, total: 1})
const [character, setSelectedChar] = useState<ICharacter>({})
    const router = useRouter()
    useEffect(() => {
        const fetchData = async () => {
            const pageNum = router.query.page? Number(router.query.page) : 1;
            const items = await getCharacters(50, pageNum as number);
            const pages = items.pages;
            setCharacters(items.docs)
            setPage({current: pageNum as number, total: pages})
        }
        fetchData().catch(console.error);
    }, [router.query.page]);
    
    return (
        <>
        <table className="table-fixed border-spacing-2 mx-8">
        <thead className="bg-gray-50 border-2">
            <tr>
            <th className="p-4 w-2/8">Name</th>
            <th className="p-4 w-2/8">Race</th>
            <th className="p-4 w-2/8">Birth</th>
            <th className="p-4 w-2/8">death</th>
            <th className="p-4 w-2/8">Spouse</th>
            <th className="p-4 w-2/8">Realm</th>
            <th className="p-4 w-2/8">Quotes</th>
            </tr>
        </thead>
        <tbody>
            {characters.map(lotrCharacter => 
            <tr key={lotrCharacter._id} className="border-b-2 border-gray-200">
                <td className="p-2 text-center w-2/8"><a href={lotrCharacter.wikiUrl} target="_blank" >{lotrCharacter.name}</a></td>
                <td className="p-2 text-center w-1/8">{lotrCharacter.race}</td>
                <td className="p-2 text-center w-1/8">{lotrCharacter.birth}</td>
                <td className="p-2 text-center w-1/8">{lotrCharacter.death}</td>
                <td className="p-2 text-center w-1/8">{lotrCharacter.spouse}</td>
                <td className="p-2 text-center w-1/8">{lotrCharacter.realm}</td>
                <td className="p-2 text-center w-1/8">
                    {<div className="w-[24px] h-[24px] mx-auto" onClick={() => setSelectedChar(lotrCharacter)}>
                        <Quotes characterId={character._id} name={character?.name}/>
                    </div>}
                </td>
            </tr>
            )}
        </tbody>
        </table>
        <Pagination currentPage={page.current} totalPages={page.total} pathName="characters" />
        </>
    )
};

export default Characters;