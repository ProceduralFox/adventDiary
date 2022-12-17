export const DAY4FIRST2022 = `const solution = (input:string)=>{
  const parsed = input.split(String.fromCharCode(10))

  let fullOverlaps = 0

  for (let index = 0; index < parsed.length - 1; index++) {
    // early loop termination due to last element of parsed array being empty string

    const pairs = parsed[index].split(",");

    const first = pairs[0].split("-")
    const second = pairs[1].split("-")

    const firstStart = parseInt(first[0])
    const firstEnd = parseInt(first[1])

    const secondStart = parseInt(second[0])
    const secondEnd = parseInt(second[1])

    if(firstStart <= secondEnd && firstEnd <= secondEnd){
      if(firstStart >= secondStart){
        fullOverlaps++
        continue
      }
    }

    if(secondStart <= firstEnd && secondEnd <= firstEnd){
      if(secondStart >= firstStart){
        fullOverlaps++
        continue
      }
    }
  }
  return fullOverlaps
}`

export const DAY4SECOND2022 = `const solution = (input:string)=>{
  const parsed = input.split(String.fromCharCode(10))

  let partialOverlaps = 0

  for (let index = 0; index < parsed.length - 1; index++) {
    // early loop termination due to last element of parsed array being empty string

    const pairs = parsed[index].split(",");

    const first = pairs[0].split("-")
    const second = pairs[1].split("-")

    const firstStart = parseInt(first[0])
    const firstEnd = parseInt(first[1])

    const secondStart = parseInt(second[0])
    const secondEnd = parseInt(second[1])


    if(firstStart<=secondEnd && firstStart>=secondStart){
      partialOverlaps++
      continue
    }

    if(secondStart<=firstEnd && secondStart>=firstStart){
      partialOverlaps++
      continue
    }
  }
  return partialOverlaps
}`