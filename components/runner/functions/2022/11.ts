export const Day11First2022 = (input:string)=>{
  const monkeys = input.split(`${String.fromCharCode(10)}${String.fromCharCode(10)}`).map((monkey)=>{
    return monkey.split(String.fromCharCode(10))
  })

  type Monkey = {
    currentItems:number[], 
    operation:string[], 
    divisibleByTest:number,
    trueTarget: number,
    falseTarget: number
  }

  const parsedMonkeys: Monkey[] = []


  monkeys.forEach((monkey)=>{
    const parsedMonkey: Monkey = {
      currentItems: monkey[1].slice(monkey[1].indexOf(":")+1).split(",").map((item)=>parseInt(item)),
      operation: monkey[2].slice(monkey[2].indexOf("=")+1,).split(" ").filter((element)=>element!==""),
      divisibleByTest: 0,
      trueTarget: 0,
      falseTarget: 0
    }

    const divisibleByTest = monkey[3].split(" ").pop()

    if(divisibleByTest) parsedMonkey.divisibleByTest = parseInt(divisibleByTest)
    
    const trueTarget = monkey[4].split(" ").pop()
    const falseTarget = monkey[5].split(" ").pop()

    if(trueTarget) parsedMonkey.trueTarget = parseInt(trueTarget)
    if(falseTarget) parsedMonkey.falseTarget = parseInt(falseTarget)

    parsedMonkeys.push(parsedMonkey)
  })

  const monkeyItemInspections: {[key:number]:number} = {}

  let counter = 20

  while(counter>0){

    parsedMonkeys.forEach((monkey, monkeyIndex)=>{
      let itemsToThrow = monkey.currentItems.length
      
      while(itemsToThrow>0){
        let itemToThrow = monkey.currentItems.shift()
        if(!itemToThrow) break


        if(monkey.operation[1]==="+") itemToThrow = itemToThrow + (monkey.operation[2]==="old"? itemToThrow : parseInt(monkey.operation[2]))
        if(monkey.operation[1]==="*") itemToThrow = itemToThrow * (monkey.operation[2]==="old"? itemToThrow : parseInt(monkey.operation[2]))
        // not sure if these operations can even appear in the input but like just to be sure
        if(monkey.operation[1]==="-") itemToThrow = itemToThrow - (monkey.operation[2]==="old"? itemToThrow : parseInt(monkey.operation[2]))
        if(monkey.operation[1]==="/") itemToThrow = itemToThrow / (monkey.operation[2]==="old"? itemToThrow : parseInt(monkey.operation[2]))

        itemToThrow = Math.floor(itemToThrow / 3)

        if(itemToThrow%monkey.divisibleByTest===0) {
          parsedMonkeys[monkey.trueTarget].currentItems.push(itemToThrow)
        } else {
          parsedMonkeys[monkey.falseTarget].currentItems.push(itemToThrow)
        }
        
        monkeyItemInspections[monkeyIndex] = monkeyItemInspections[monkeyIndex] ? monkeyItemInspections[monkeyIndex] + 1 : 1
        itemsToThrow--
      }
    })

    counter--
  }

  
  let highest = 0
  let secondHighest = 0

  for (const monkeyInspections of Object.entries(monkeyItemInspections)){
    if(monkeyInspections[1]>secondHighest) secondHighest = monkeyInspections[1]
    if(secondHighest>highest) {
      secondHighest = highest;
      highest = monkeyInspections[1] 
    } 
  }

  return highest*secondHighest
}

export const Day11Second2022 = (input:string)=>{

  // I have no idea what is even being asked, time to take a maths class it seems

}