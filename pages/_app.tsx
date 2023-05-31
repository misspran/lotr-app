import "../globals.css";
import { useEffect } from 'react';
import { useRouter } from "next/router";


import {NavBar} from "../components/NavBar"
const App = ({ Component }: { Component: any}) => {
  const {pathname, push}  = useRouter();
  useEffect(() => {
    if(pathname === '/'){
      push('/movies');
    }
 });

  return (
    <main className="flex min-h-screen flex-col items-center justify-between py-24">
      <NavBar />
      <Component />
    </main>
  )
}
export default App