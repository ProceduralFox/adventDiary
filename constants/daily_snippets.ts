const codeSnippets: {[key:string]:{[key:string]:string}} = {
  "2022": {
    "1": `
    const router = useRouter();
    `,
    "2": `
      const router = useRouter();
      const data = await fetch("some endpoint");
    `
  },
  "2021": {
    "1": `
    const router = useRouter();
    `,
    "2": `
      const router = useRouter();
      const data = await fetch("some endpoint");
    `
  }

}

export default codeSnippets;