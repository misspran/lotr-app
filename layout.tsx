import "../globals.css";
// import Image from 'next/image'
// import Link from 'next/link';
// import logo from '../lord-of-the-rings-logo.png';
import { ReactElement, createContext } from 'react';

import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

const metadata = {
  title: 'Lord of The Rings App',
  description: 'Find Lord of the Rings Movie, Characters, and Quotes info.',
}

export default function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {(
        <html lang="en">
          <body className={inter.className}>{children}</body>
        </html>
    )
}
