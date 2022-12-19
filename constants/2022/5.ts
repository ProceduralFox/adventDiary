export const DAY5FIRST2022 = `const solution = (input:string)=>{
  let stacksLineLength = 0
  let lineCounting = true
  let numberOfStacks = 0
  let stacksFormation = []
  let lastChar = 0
  const stacks:{[key:string]:string[]} = {}

  let parsing: "stacks" | "instructions" = "stacks"

  let index = 0

  // split the vertical part describing the initial state of the stacks
  // iterate backwards over it to populate the stacks
  // go over the part describing the instructions and execute them

  while(parsing==="stacks"){
    const element = input[index];
    const uniCode = element.charCodeAt(0)

    if(uniCode===13 && lastChar===10){
      parsing="instructions"

      let counter = numberOfStacks
      while(counter>0){
        stacks[counter] = []
        counter--
      }

      let iteration = 2
      const length = stacksFormation.length
      while(iteration<=numberOfStacks){
        const slice = stacksFormation.slice((length)-37*(iteration), (length)-37*(iteration-1))

        Object.keys(stacks).forEach((key:string)=>{
          const stack = stacks[key]
          const letter = slice[1+((parseInt(key)-1)*4)]
          if(letter!==" "){
            stack.push(letter)
          }
        })
        iteration++
      }

    }
    if(uniCode===10){
      if(lineCounting){
        lineCounting = false
        numberOfStacks = stacksLineLength / 4
      }
    }

    lastChar = uniCode
    stacksFormation.push(element)

    if(lineCounting) stacksLineLength++
  
    index++
  }

  const instructions = input.slice(index+1).split("\r\n")

  index = 0
  const length = instructions.length

  while(index<length){
    const line = instructions[index]
    const splitLine = line.split(" from ")

    let amountToMove = parseInt(splitLine[0].slice(4))
    let from = splitLine[1].split(" ")[0]
    let to = splitLine[1].split(" ")[2]

    while(amountToMove>0){
      const pop = stacks[from].pop()

      if(pop) stacks[to].push(pop)
      amountToMove--
    }
    index++
  }

  const answer: (string | undefined)[] = []

  Object.keys(stacks).forEach((key)=>{
    const pop = stacks[key].pop()
    answer.push(pop)
  })

  return answer
}
`


export const DAY5SECOND2022 = `const solution = (input:string)=>{
  let stacksLineLength = 0
  let lineCounting = true
  let numberOfStacks = 0
  let stacksFormation = []
  let lastChar = 0
  const stacks:{[key:string]:string[]} = {}

  let parsing: "stacks" | "instructions" = "stacks"


  let index = 0

  while(parsing==="stacks"){
    const element = input[index];
    const uniCode = element.charCodeAt(0)

    if(uniCode===13 && lastChar===10){
      parsing="instructions"

      let counter = numberOfStacks
      while(counter>0){
        stacks[counter] = []
        counter--
      }

      let iteration = 2
      const length = stacksFormation.length
      while(iteration<=numberOfStacks){
        const slice = stacksFormation.slice((length)-37*(iteration), (length)-37*(iteration-1))

        Object.keys(stacks).forEach((key:string)=>{
          const stack = stacks[key]
          const letter = slice[1+((parseInt(key)-1)*4)]
          if(letter!==" "){
            stack.push(letter)
          }
        })
        iteration++
      }

    }
    if(uniCode===10){
      if(lineCounting){
        lineCounting = false
        numberOfStacks = stacksLineLength / 4
      }
    }

    lastChar = uniCode
    stacksFormation.push(element)

    if(lineCounting) stacksLineLength++
  
    index++
  }

  const instructions = input.slice(index+1).split("\r\n")

  index = 0
  const length = instructions.length

  while(index<length){
    const line = instructions[index]
    const splitLine = line.split(" from ")

    let amountToMove = parseInt(splitLine[0].slice(4))
    let from = splitLine[1].split(" ")[0]
    let to = splitLine[1].split(" ")[2]

    const pop = stacks[from].splice(stacks[from].length-amountToMove, amountToMove)

    pop.forEach((crate)=>{
      stacks[to].push(crate)
    })

    index++
  }

  const answer: (string | undefined)[] = []

  Object.keys(stacks).forEach((key)=>{
    const pop = stacks[key].pop()
    answer.push(pop)
  })

  return answer
}`