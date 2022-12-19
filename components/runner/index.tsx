import Router, { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import solutionsDirectory, { Days, Years } from './functions/solutionsDirectory'

type Props = {}

const Runner = (props: Props) => {

  const router = useRouter()

  const { day: selectedDay, year:selectedYear } = router.query as {day: Days, year: Years}
  // this is valid type casting I think due to there existing checkers upwards in the tree
  // that would prevent this component rendering if the given query params were something else

  const [solution, setSolution] = useState<{first:string, second: string}>()

  const handleInput = (selectedYear: Years, selectedDay: Days, input:string)=>{
    if(!selectedDay || !selectedYear){
      return
    }

    const newSolution: {first:string, second: string} = {first: "", second: ""}

    newSolution.first = solutionsDirectory[selectedYear][selectedDay]?.first(input)
    newSolution.second = solutionsDirectory[selectedYear][selectedDay]?.second(input)
    
    // console.log("testing")

    setSolution(newSolution)
  }

  return (
    <div>
      <h2>We are running day {selectedDay}, year { selectedYear}</h2>
      <div>
        Part 1 solution: {solution?.first}
      </div>
      <div>
        Part 2 solution: {solution?.second}
      </div>
      <div>
        Run on your own input? Could be cool idk.
        <input type="file" onChange={async (e)=>{
          if(e.target.files?.length===0 || !e.target.files){
            setSolution({first:"",second:""})
            return
          }
          const text = await e.target.files[0].text()
          handleInput(selectedYear, selectedDay, text)
        }} />
      </div>
    </div>
  )
}

export default Runner 