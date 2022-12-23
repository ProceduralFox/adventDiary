export const DAY10FIRST2022 = `const solution = (input:string) => {
  const lines = input.split(String.fromCharCode(10))

  let cycle = 1
  let value = 1
  let signalStrength = 0

  const solutionCycles = new Set([20, 60, 100, 140, 180, 220])

  for (let index = 0; index < lines.length; index++) {
    const command = lines[index];

    if(command==="noop"){
      cycle++
      if(solutionCycles.has(cycle)) signalStrength += cycle*value
      continue
    }

    const spaceIndex = command.indexOf(" ")

    const commandName = command.slice(0, spaceIndex)

    if(commandName==="addx"){
      const addValue = parseInt(command.slice(spaceIndex))

      cycle++
      if(solutionCycles.has(cycle)) signalStrength += cycle*value
      cycle++
      value += addValue
      if(solutionCycles.has(cycle)) signalStrength += cycle*value
    }
    
  }

  return signalStrength
}
`


export const DAY10SECOND2022 = `const solution = (input:string) => {
  const lines = input.split(String.fromCharCode(10))
  // TODO : this is off by one line but otherwise correct

  let cycle = 0
  let value = 1
  const monitor: string[][] = [[]]

  const renderScreen = (spriteCenter: number, cycle: number) => {

    const rowPixel = cycle - 1 - ((monitor.length-1)*40)

    const spritePosition = new Set([spriteCenter-1, spriteCenter, spriteCenter+1])

    const render = spritePosition.has(rowPixel)

    monitor[monitor.length-1].push(render?"#":".")
    if((cycle-1)%40===0 && cycle!==1) monitor.push([])
  }

  for (let index = 0; index < lines.length; index++) {
    const command = lines[index];

    if(command==="noop"){
      cycle++
      renderScreen(value-1, cycle)
      continue
    }

    const spaceIndex = command.indexOf(" ")

    const commandName = command.slice(0, spaceIndex)

    if(commandName==="addx"){
      const addValue = parseInt(command.slice(spaceIndex))

      cycle++
      renderScreen(value-1, cycle)
      cycle++
      value += addValue
      renderScreen(value-1, cycle)
    }
    
  }

  monitor.forEach((row)=>{
    console.log(row.toString())
  })
  console.log(monitor)
  return "Check console"
}`