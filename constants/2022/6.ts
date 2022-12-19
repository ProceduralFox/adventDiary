export const DAY6FIRST2022 = `const solution = (input:string) => {
  
  const positions = {
    first: input[3],
    second: input[2],
    third: input[1],
    fourth: input[0],
  }

  const set = new Set([input[0], input[1], input[2], input[3]])

  if(set.size===4) return 4

  for (let index = 4; index < input.length; index++) {
    const element = input[index]
    
    positions.fourth = positions.third
    positions.third = positions.second
    positions.second = positions.first
    positions.first = element

    const set = new Set([positions.first, positions.second, positions.third, positions.fourth])

    if(set.size===4) return index + 1

  }


  return "no signal in input"
}`

export const DAY6SECOND2022 = `const solution = (input:string) => {

  const characters:{[key:string]:number} = {}

  // the performance should be fine even without implementing it from scratch
  const lazyQueue = []

  for (let index = 0; index < 14; index++) {
    lazyQueue.push(input[index])
  }

  const set = new Set(lazyQueue)

  if(set.size===14) return 14

  for (let index = 14; index < input.length; index++) {
    const element = input[index];

    lazyQueue.shift()
    lazyQueue.push(element)

    if(new Set(lazyQueue).size===14) return index+1
    
  }

  return "no message in input"
}`