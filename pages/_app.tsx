import '../styles/globals.css'
import type { AppProps } from 'next/app'
import 'highlight.js/styles/base16/edge-dark.css'
import Header from '../components/header/header'
import { DAYS_ENUM, YEARS_ENUM } from '../components/runner/functions/solutionsDirectory'
import { useRouter } from 'next/router'


export default function App({ Component, pageProps }: AppProps) {

  const router = useRouter();
  const { day: selectedDay, year:selectedYear } = router.query

  // TODO: this feels overly verbose plus the layout of the consts is bad and I don't it doesn't even work
  // if there is different days done in different years

  if(typeof selectedDay !== "string" || typeof selectedYear !== "string"){
    return (
    <>
      <Header></Header>
      <div>Haven't solved such a year / day combo</div>
    </> 
    )
  }
  if ( !YEARS_ENUM.has(selectedYear) || !DAYS_ENUM.has(selectedDay)){
    return (
      <>
        <Header></Header>
        <div>Haven't solved such a year / day combo</div>
      </> 
      )
  } 

  return ( 
    <>
      <Header></Header>
      <Component {...pageProps} />
    </> 
)}
