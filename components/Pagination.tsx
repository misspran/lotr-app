import Link from "next/link";

export const Pagination = ({currentPage, totalPages, pathName}: {currentPage: number, totalPages: number, pathName: string}) => {
return (
    <div>
        <ul className="list-style-none flex my-5">
            <li>
                <Link
                href={{ pathname: `/${pathName}`, query: { page: currentPage === 1? 1: currentPage - 1 } }}
            
                className="relative block rounded bg-transparent px-3 py-1.5 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-100 dark:hover:bg-neutral-200"
                >Previous</Link>
            </li>
            <li>
                <Link
                href={{ pathname: `/${pathName}`, query: { page: 1 } }}
                className="relative block rounded bg-transparent px-3 py-1.5 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-100 dark:hover:bg-neutral-200"
                >1</Link>
            </li>
            <li aria-current="page">
                <Link
                href={{ pathname: `/${pathName}`, query: { page: 2 } }}
                className="relative block rounded bg-transparent px-3 py-1.5 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-100 dark:hover:bg-neutral-200"
                >2</Link>
            </li>
            <li>
                <Link
                href={{ pathname: `/${pathName}`, query: { page: 3 } }}
                className="relative block rounded bg-transparent px-3 py-1.5 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-100 dark:hover:bg-neutral-200"
                >3</Link>
            </li>
            {currentPage < 4 || currentPage === totalPages? null:
                <>
                    <li>
                        ...
                    </li>
                    <li>
                        <Link
                        href={{ pathname: `/${pathName}`, query: { page: currentPage } }}
                        className="relative block rounded bg-transparent px-3 py-1.5 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-100 dark:hover:bg-neutral-200"
    
                        >{currentPage}</Link>
                    </li>
                </>
            }
            <li>
                ...
            </li>
            <li>
                <Link
                href={{ pathname: `/${pathName}`, query: { page: totalPages } }}
                className="relative block rounded bg-transparent px-3 py-1.5 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-100 dark:hover:bg-neutral-200"
                >{totalPages}</Link>
            </li>
            <li>
            <Link
                href={{ pathname: `/${pathName}`, query: { page: currentPage === totalPages? totalPages: currentPage + 1 } }}
                className="relative block rounded bg-transparent px-3 py-1.5 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-100 dark:hover:bg-neutral-200"
                >Next</Link>
            </li>
        </ul>
    </div>
)}