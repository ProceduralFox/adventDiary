import { DAY1FIRST2022, DAY1SECOND2022 } from "./2022/1";
import { Years, Days} from "../components/runner/functions/solutionsDirectory"


const codeSnippets: {[key in Years]:{[key in Days]:{first: string, second: string}}} = {
  "2022": {
    "1": {
      first: DAY1FIRST2022,
      second: DAY1SECOND2022,
    },
    "2": {
      first: ``,
      second: ``
    },
    "3": {
      first: ``,
      second: ``
    },
    "4": {
      first: ``,
      second: ``
    }
  }
}

export default codeSnippets;