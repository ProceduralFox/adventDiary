import Router, { useRouter } from 'next/router'
import React from 'react'

type Props = {}


const Run = (props: Props) => {

  const router = useRouter()

  const { day: selectedDay, year:selectedYear } = router.query
  return (
    <div>We are running</div>
  )
}

export default Run