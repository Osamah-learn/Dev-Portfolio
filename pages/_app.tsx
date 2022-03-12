import '../styles/globals.css'
import type { AppProps } from 'next/app'
import NavBar from "../components/NavBar"
import { SideBar } from '../components/SideBar'
import { ThemeProvider } from 'next-themes'


function MyApp({ Component, pageProps }: AppProps) {

  return (
    <ThemeProvider attribute="class">
      <div className="grid grid-cols-12 gap-6 p-4 px-5 lg:px-48 my-14 sm:px-20 md:px-32">
        <div className="col-span-12 text-center bg-white dark:bg-zinc-700 rounded-2xl lg:col-span-3">
          <SideBar />
        </div>
        <div className="flex flex-col col-span-12 bg-white dark:bg-zinc-700 dark:text-white flecol-span-12 rounded-2xl round lg:col-span-9">
          <NavBar />
          <Component {...pageProps} />
        </div>
      </div>
    </ThemeProvider>
  )



}

export default MyApp
