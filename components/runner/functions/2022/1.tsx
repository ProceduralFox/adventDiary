export const Day1First2022 = (input:string) => {
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
    console.log(current, parseInt(current), currentNumeric)
    current = ""

    lastCharWasBreak = true
  }

  return highest
}