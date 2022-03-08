import '../styles/globals.css'
import type { AppProps } from 'next/app'
import {SideBar} from '../components/SideBar'
function MyApp({ Component, pageProps }: AppProps) {

  return (<div className="grid grid-cols-12 gap-6 p-4 px-5 text-center lg:px-48 my-14 sm:px-20 md:px-32">
    <div className="col-span-12 bg-white rounded-2xl lg:col-span-3">
      <SideBar/>
    </div>
    <div className="col-span-12 bg-white rounded-2xl round lg:col-span-9">
      <Component {...pageProps} />
    </div>

  </div>
  )



}

export default MyApp
