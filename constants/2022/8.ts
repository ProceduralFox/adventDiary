export const DAY8FIRST2022 = `const solution = (input:string)=>{
  const grid = input.split(String.fromCharCode(10))

  const visibleTreeIndexes = new Set<string>([])

  let currentTallest = -1

  // a tree is visible from a given direction if it is taller than the previous tallest
  // tree in that direction, so I just check every row and column from both directions
  // and note those trees that are taller than current tallest, set takes care of repeats for me

  // check right to left
  for (let rowIndex = 0; rowIndex < grid.length; rowIndex++) {
    const row = grid[rowIndex];
    currentTallest = -1

    for (let colIndex = 0; colIndex < row.length; colIndex++) {
      const treeHeight = parseInt(row[colIndex]);

      if(treeHeight>currentTallest){
        visibleTreeIndexes.add("$"{rowIndex}-"$"{colIndex}) // template literal rendering issue
        currentTallest = treeHeight
      }

      if(treeHeight===9){
        break // no others will be visible after this one from this direction
      }
    }
  }

  // check left to right
  for (let rowIndex = 0; rowIndex < grid.length; rowIndex++) {
    const row = grid[rowIndex];
    currentTallest = -1

    for (let colIndex = row.length-1; colIndex > -1; colIndex--) {
      const treeHeight = parseInt(row[colIndex]);

      if(treeHeight>currentTallest){
        visibleTreeIndexes.add("$"{rowIndex}-"$"{colIndex}) // template literal rendering issue
        currentTallest = treeHeight
      }

      if(treeHeight===9){
        break // no others will be visible after this one from this direction
      }
    }
  }

  // check up to down
  // i'm making an assumption here that the grid is even, but the inputs always are
  for (let columnIndex = 0; columnIndex < grid[0].length; columnIndex++) {
    currentTallest = -1
    
    for (let rowIndex = 0; rowIndex < grid.length; rowIndex++) {
      const treeHeight = parseInt(grid[rowIndex][columnIndex]);

      if(treeHeight>currentTallest){
        visibleTreeIndexes.add("$"{rowIndex}-"$"{columnIndex}) // template literal rendering issue
        currentTallest = treeHeight
      }

      if(treeHeight===9){
        break // no others will be visible after this one from this direction
      }
    }
  }

  // check down to up
  // i'm making an assumption here that the grid is even
  for (let columnIndex = 0; columnIndex < grid[0].length; columnIndex++) {
    currentTallest = -1
    
    for (let rowIndex = grid.length-1; rowIndex > -1; rowIndex--) {
      const treeHeight = parseInt(grid[rowIndex][columnIndex]);

      if(treeHeight>currentTallest){
        visibleTreeIndexes.add("$"{rowIndex}-"$"{columnIndex}) // template literal rendering issue
        currentTallest = treeHeight
      }

      if(treeHeight===9){
        break // no others will be visible after this one from this direction
      }
    }
  }

  return visibleTreeIndexes.size
}`

export const DAY8SECOND2022 = `const solution = (input:string)=>{
  const grid = input.split(String.fromCharCode(10)).map((stringLine)=>{
    return Array.from(stringLine)
  }).slice(0, -1);


  // just gonna brute force this one
  // skipping the edges because they all have 0 scenic value

  let currentHighest = 0

  for (let rowIndex = 1; rowIndex < grid.length ; rowIndex++) {
    const row = grid[rowIndex];
    
    for (let columnIndex = 1; columnIndex < row.length; columnIndex++) {
      const currentTree = row[columnIndex];
      
      let up = 0
      let down = 0
      let right = 0
      let left = 0

      // check right
      for (let rightIndex = columnIndex+1; rightIndex < grid.length; rightIndex++) {
        const comparisonTree = row[rightIndex];

        right++

        if(currentTree<=comparisonTree) break

      }

      // check left
      for (let leftIndex = columnIndex-1; leftIndex > -1 ; leftIndex--) {
        const comparisonTree = row[leftIndex];

        left++

        if(currentTree<=comparisonTree) break

      }

      // check down
      for (let downIndex = rowIndex+1; downIndex < grid.length ; downIndex++) {
        const comparisonTree = grid[downIndex][columnIndex];

        down++

        if(currentTree<=comparisonTree) break
      }

      // check up - not done
      for (let upIndex = rowIndex-1; upIndex > -1 ; upIndex--) {
        const comparisonTree = grid[upIndex][columnIndex];

        up++

        if(currentTree<=comparisonTree) break

      }

      const scenicScore = right*left*up*down

      if(scenicScore>currentHighest) currentHighest = scenicScore
    }
  }

  return currentHighest
}`