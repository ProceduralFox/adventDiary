export const DAY3FIRST2022 = `const solution = (input: string) => {
  let totalPrios = 0

  let currentLineLen = 0;
  let currentLine:string[] = []

  for (let index = 0; index < input.length; index++) {
    const element = input[index];
    const uniCode = input.charCodeAt(index)
    
    if(uniCode===10){ // line break)
      
      const middle = currentLineLen / 2 // line is always even number

      const firstHalf = new Set(currentLine.slice(0, middle))
      const alreadyAdded = new Set<string>([])

      for (let index = middle; index < currentLineLen; index++) {
        const lineElement = currentLine[index];
        const lineElementCode = lineElement.charCodeAt(0)
        
        if(firstHalf.has(lineElement) && !alreadyAdded.has(lineElement)){
          alreadyAdded.add(lineElement)

          if(65 <= lineElementCode && lineElementCode <= 90) {
            totalPrios += lineElementCode - 38
          }
          else if(97 <= lineElementCode && lineElementCode<= 122){
            totalPrios += lineElementCode - 96
          } 
        }
      }

      currentLineLen = 0
      currentLine = []
      continue
    }

    currentLine.push(element)

    currentLineLen ++

  }

  return totalPrios
}`


export const DAY3SECOND2022 = `const solution = (input: string) => {
  const parsed = input.split(String.fromCharCode(10)) 
  // solving the problem as I parse the input is getting a bit too messy

  let totalPrios = 0

  for (let index = 0; index + 3 < parsed.length; index+=3) {
    const backpack = new Set(parsed[index]); // make a set immediatly for comparison
    const secondBackpack = parsed[index+1];
    const thirdBackpack = parsed[index+2];

    const repeatElements = new Set<string>()

    for (let index = 0; index < secondBackpack.length; index++) { 
      const element = secondBackpack[index];

      if(backpack.has(element)){
        repeatElements.add(element)
      }
    }

    for (let index = 0; index < thirdBackpack.length; index++) {
      const element = thirdBackpack[index];
      const uniCode = element.charCodeAt(0)

      if(repeatElements.has(element)){ 
        // only 1 item is common to all 3 backpacks so can add priority here and move on
        if(65 <= uniCode && uniCode <= 90) {
          totalPrios += uniCode - 38
        }
        else if(97 <= uniCode && uniCode<= 122){
          totalPrios += uniCode - 96
        } 

        break
      }
    }
  }

  return totalPrios
}`