export const DAY7FIRST2022 = `const solution = (input:string) => {
  
  const parsed = input.split(String.fromCharCode(10));

  type DirectoryNode = {
    name: string,
    type: "DIR", // this allows for cleaner looking tree traversal imo
    children: number[]
    parentId: number // I used this just to more easily double check that the tree was generating properly
  }

  type FileNode = {
    name: string,
    type: "FILE",
    size: number,
    parentId: number
  }

  type TreeNode = (DirectoryNode | FileNode)

  const tree: TreeNode[] = []

  const root: DirectoryNode = {name: "/", type: "DIR", children: [], parentId: -1}
  const visitedDirectoriesIds:number[] = []

  tree.push(root)
  visitedDirectoriesIds.push(0)

  for (let index = 0; index < parsed.length; index++) {
    const line = parsed[index].replace(String.fromCharCode(13), "");
    // the replace accounts for possible differences in input copying
    if(line.slice(0, 4)==="$ ls") continue
    if(line==="") continue 

    const currentDirectory = tree[visitedDirectoriesIds[visitedDirectoriesIds.length-1]] as DirectoryNode 
    // I think the type assertion here is fair as visitedDirectories will be ids of directories

    if(line.slice(0, 4)==="$ cd"){
      const directoryName = line.slice(4)

      if(directoryName===" /") continue
      if(directoryName===" .."){
        visitedDirectoriesIds.pop()
        continue
      } else {

        for (let childIndex = 0; childIndex < currentDirectory.children.length; childIndex++) {

          const childId = currentDirectory.children[childIndex];

          if((tree[childId]).name===directoryName){
            visitedDirectoriesIds.push(childId)
          }
        }
        continue
      }
    }

    const childIndex = tree.length

    currentDirectory.children.push(childIndex)

    const spaceIndex = line.indexOf(" ");

    if(line.slice(0, spaceIndex)==="dir"){ // all directories start with "dir "
      const child: DirectoryNode = { 
        name: line.slice(3),
        type: "DIR",  
        children: [], 
        parentId:visitedDirectoriesIds[visitedDirectoriesIds.length-1] 
      }
      tree.push(child)
    } else { // options other than the child format already got escaped from in loop above
      const child: FileNode = {
        name: line.slice(spaceIndex+1),
        type: "FILE",
        size: parseInt(line.slice(0, spaceIndex)),
        parentId: visitedDirectoriesIds[visitedDirectoriesIds.length-1],
      }
      tree.push(child)
    }
  }

  let solution = 0;

  const traverseTree = (node: TreeNode) => {
    let fullSize = 0
    if(node.type==="DIR"){
      node.children.forEach((childId)=>{
        fullSize += traverseTree(tree[childId])
      })
    }

    if(node.type==="FILE"){
      return node.size
    }

    if(fullSize<=100000){
      solution+=fullSize
    }
    
    return fullSize
    
  }

  traverseTree(tree[0])

  return solution
}`


export const DAY7SECOND2022 = `const solution = (input:string) => {
  
  // same tree generation as above

  let currentMinimum = -1
  
  const traverseTree = (node: TreeNode, requiredSize?:number) => {
    let fullSize = 0
    if(node.type==="DIR"){
      node.children.forEach((childId)=>{
        fullSize += traverseTree(tree[childId], requiredSize)
      })
    }

    if(node.type==="FILE"){
      return node.size
    }

    if(requiredSize){
      if(fullSize>=requiredSize){
        if(currentMinimum < 0 || fullSize<currentMinimum) currentMinimum = fullSize
      }
    }
    
    return fullSize
    
  }

  const TOTAL_SIZE = 70000000
  const UPDATE_SIZE = 30000000
  const rootSize = traverseTree(tree[0])

  const remainingSize = TOTAL_SIZE - rootSize
  const requiredSize = UPDATE_SIZE - remainingSize

 
  traverseTree(tree[0], requiredSize)

  return currentMinimum
}`