import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useState } from 'react'

type Props = {}

const ArrayMaker = (size: number, start: number) => {
  const array = []

  for (let i=start; i < size+start; i++) {
    array.push(i.toString());
  }

  return array
}

const Header = (props: Props) => {

  const [days, setDays] = useState(ArrayMaker(31, 1));
  const [years, setYears] = useState(ArrayMaker(2, 2021));
  const router = useRouter();

  const { day: selectedDay, year: selectedYear } = router.query

  return (
    <div>
      <div>
        {
          years.map((year, index)=>{
            if(year!==selectedYear){
              return <Link key={year} href={`/${year}/1`}>{year}</Link>
            }
            return <span key={year}>{year}</span>
          })
        }
      </div>
      <div>
        {
          days.map((day, index)=>{
            if(day!==selectedDay){
              return <Link key={day} href={`/${selectedYear}/${day}`}>{day}</Link>
            }
            return <span key={day}>{day}</span>
          })
        }
        <Link key={"thisIsStillUnique"} href={`/${selectedYear}/${selectedDay}/run`}>Run this ~~</Link>
        <Link key={"thisIsStillUnique"} href={`/${selectedYear}/${selectedDay}`}>@@ Go back</Link>
      </div>
    </div>
  )
}

export default Header