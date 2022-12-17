export const DAY1FIRST2022 = `const solution = (input:string) => {
let highest = 0
let current = ""
let currentNumeric = 0
let lastCharWasBreak = false

for (let index = 0; index < input.length; index++) {
  const character = input[index]
  const uniCode = input.charCodeAt(index)
  if(uniCode !== 10){
    current += character
    lastCharWasBreak = false
    continue
  }
  if(lastCharWasBreak){
    if(currentNumeric > highest){
      highest = currentNumeric
    }
    currentNumeric = 0
    current = ""
    continue
  }
  currentNumeric += parseInt(current)
  current = ""

  lastCharWasBreak = true
}

return highest
}
`

export const DAY1SECOND2022 = `const solution = (input:string) => {
  let highest = 0
  let second = 0
  let third = 0 

  let current = ""
  let currentNumeric = 0
  let lastCharWasBreak = false

  for (let index = 0; index < input.length; index++) {
    const character = input[index]
    const uniCode = input.charCodeAt(index)
    if(uniCode !== 10){
      current += character
      lastCharWasBreak = false
      continue
    }
    if(lastCharWasBreak){
      if(currentNumeric > third) {
        const values = [highest, second, third, currentNumeric]
        values.sort((a, b)=>b-a)
        highest = values[0]
        second = values[1]
        third = values[2]
      }

      currentNumeric = 0
      current = ""
      continue
    }
    currentNumeric += parseInt(current)
    current = ""

    lastCharWasBreak = true
  }

  return highest + second + third
}
`