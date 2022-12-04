import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import CodeView from '../../../components/code_view/code_view'
import codeSnippets from '../../../constants/daily_snippets'

type Props = {}



const DailyView = (props: Props) => {
  const router = useRouter();
  const { day: selectedDay, year:selectedYear } = router.query
  
  const dailySnippets = typeof selectedYear === "string" ? codeSnippets[selectedYear] : false

  if(!dailySnippets){
    return <div>Haven't done advent of code that year</div>
  }

  const snippet = typeof selectedDay === "string" ? dailySnippets[selectedDay]: false;

  if(!snippet){
    return <div>There is no such day in december</div>
  }

  return (
    <div>
      <a target="_blank" href={`https://adventofcode.com/${selectedYear}/day/${selectedDay}`} rel="noopener noreferrer">
        Read Description
      </a>
      <CodeView>{snippet}</CodeView>
    </div>
  )
}

export default DailyView