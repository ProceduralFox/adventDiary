export const DAY2FIRST2022 = `const solution = (input: string) => {

  // the lax typing here assumes correct input only but that seems like fair assumption

  const possiblePoints: {[key:string]:{[key:string]:number}} = {
    "A": {
      "X": 3+1,
      "Y": 6+2,
      "Z": 0+3,
    },
    "B": {
      "X": 0+1,
      "Y": 3+2,
      "Z": 6+3,
    },
    "C": {
      "X": 6+1,
      "Y": 0+2,
      "Z": 3+3,
    },
  }

  let total = 0
  let opponentSelection = ""
  let playerSelection = ""
  let nextChar: "opponent" | "player" = "opponent"

  for (let index = 0; index < input.length; index++) {
    const character = input[index];
    const uniCode = input.charCodeAt(index)

    
    if(uniCode===32){ // space
      nextChar = "player"
      continue
    }
    if(uniCode===10){ // line break
      nextChar = "opponent"

      total += possiblePoints[opponentSelection][playerSelection]
      opponentSelection = ""
      playerSelection = ""
      continue
    }

    if(nextChar === "opponent"){
      opponentSelection = character
      continue
    } 

    if(nextChar === "player"){
      playerSelection = character
    }

  }

  return total
}
`

export const DAY2SECOND2022 =`const solution = (input: string) => {

  const possiblePoints: {[key:string]:{[key:string]:number}} = {
    "A": {
      "X": 0+3,
      "Y": 3+1,
      "Z": 6+2,
    },
    "B": {
      "X": 0+1,
      "Y": 3+2,
      "Z": 6+3,
    },
    "C": {
      "X": 0+2,
      "Y": 3+3,
      "Z": 6+1,
    },
  }

  let total = 0
  let opponentSelection = ""
  let playerSelection = ""
  let nextChar: "opponent" | "player" = "opponent"

  for (let index = 0; index < input.length; index++) {
    const character = input[index];
    const uniCode = input.charCodeAt(index)
    
    if(uniCode===32){ // space
      nextChar = "player"
      continue
    }
    if(uniCode===10){ // line break
      nextChar = "opponent"

      total += possiblePoints[opponentSelection][playerSelection]
      opponentSelection = ""
      playerSelection = ""
      continue
    }

    if(nextChar === "opponent"){
      opponentSelection = character
      continue
    } 

    if(nextChar === "player"){
      playerSelection = character
    }

  }

  return total
}`