export const DAY1FIRST2022 = `
let highest = 0
let current = ""
let currentNumeric = 0
let lastCharWasBreak = false
for (let index = 0; index < text.length; index++) {
  const character = text[index]
  const uniCode = text.charCodeAt(index)
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
const router = useRouter();
`

export const DAY1SECOND2022 = `
let highest = 0
let current = ""
let currentNumeric = 0
let lastCharWasBreak = false
for (let index = 0; index < text.length; index++) {
  const character = text[index]
  const uniCode = text.charCodeAt(index)
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
const router = useRouter();
`