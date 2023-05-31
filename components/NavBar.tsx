import Image from 'next/image'
import Link from 'next/link';
import logo from '../images/lord-of-the-rings-logo.png';

export const NavBar = () => 
    <header className="absolute inset-x-0 top-0 z-2 bg-slate-200">
        <nav className="flex items-center justify-between px-6" aria-label="Global">
            <Image src={logo} alt={'lotr logo'} width="110" height="20"/>
            <div className="lg:flex lg:gap-x-12">
            <Link href="/movies" className="text-sm font-semibold leading-6 text-gray-900 mx-10">Movies</Link>
            <Link href="/characters" as="/characters" className="text-sm font-semibold leading-6 text-gray-900 mx-10" >Characters</Link>
            </div>
        </nav>
    </header>