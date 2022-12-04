import '../styles/globals.css'
import type { AppProps } from 'next/app'
import 'highlight.js/styles/base16/edge-dark.css'
import Header from '../components/header/header'

export default function App({ Component, pageProps }: AppProps) {
  return ( 
    <>
      <Header></Header>
      <Component {...pageProps} />
    </> 
)}
