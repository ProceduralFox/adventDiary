export const Day9First2022 = (input: string) =>{

  const lines = input.split(String.fromCharCode(10))

  const tailVisited = new Set<string>(["0-0"])

  let currentHeadX = 0
  let currentHeadY = 0

  let currentTailX = 0
  let currentTailY = 0

  for (let index = 0; index < lines.length; index++) {
    const instruction = lines[index];

    const direction = instruction[0]
    let distance = parseInt(instruction.slice(1))

    while(distance>0){
      if(direction==="R") currentHeadX++
      if(direction==="L") currentHeadX--
      if(direction==="U") currentHeadY++
      if(direction==="D") currentHeadY--

      const differenceX = Math.abs(currentHeadX-currentTailX)
      const differenceY = Math.abs(currentHeadY-currentTailY)

      if(differenceX > 1 || differenceY > 1) { 

        if(differenceX > 0) {
          currentTailX = currentHeadX > currentTailX ? currentTailX + 1 : currentTailX - 1
        }

        if(differenceY > 0) {
          currentTailY = currentHeadY > currentTailY ? currentTailY + 1 : currentTailY - 1
        }

        tailVisited.add(`${currentTailX}-${currentTailY}`)

      }

      distance--
    }
    
  }

  return tailVisited.size
}


export const Day9Second2022 = (input: string) =>{

  const lines = input.split(String.fromCharCode(10))

  const tailVisited = new Set<string>(["0-0"])

  type SnakeSegment = {positionX: number, positionY: number}

  const snake: SnakeSegment[] = []

  let segmentsNumber = 10

  while(segmentsNumber>0){
    snake.push({positionX:0, positionY: 0})
    segmentsNumber--
  }
  
  console.log(snake.length)
  const moveSegment = (parent: SnakeSegment, current: SnakeSegment) => {
    const differenceX = Math.abs(parent.positionX-current.positionX)
    const differenceY = Math.abs(parent.positionY-current.positionY)

    if(differenceX > 1 || differenceY > 1) { 

      if(differenceX > 0) {
        current.positionX = parent.positionX > current.positionX ? current.positionX + 1 : current.positionX - 1
      }

      if(differenceY > 0) {
        current.positionY = parent.positionY > current.positionY ? current.positionY + 1 : current.positionY - 1
      }

    }
  }

  for (let index = 0; index < lines.length; index++) {
    const instruction = lines[index];
    
    
    const direction = instruction[0]
    let distance = parseInt(instruction.slice(1))

    while(distance>0){
      if(direction==="R") snake[0].positionX++
      if(direction==="L") snake[0].positionX--
      if(direction==="U") snake[0].positionY++
      if(direction==="D") snake[0].positionY--

      for (let segmentIndex = 1; segmentIndex < snake.length; segmentIndex++) {
        moveSegment(snake[segmentIndex-1], snake[segmentIndex])
      }


      tailVisited.add(`${snake[snake.length-1].positionX}-${snake[snake.length-1].positionY}`)
      distance--

    }
  }


  return tailVisited.size
}