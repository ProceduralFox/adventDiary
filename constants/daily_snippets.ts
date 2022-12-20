import { DAY1FIRST2022, DAY1SECOND2022 } from "./2022/1";
import { Years, Days} from "../components/runner/functions/solutionsDirectory"
import { DAY2FIRST2022, DAY2SECOND2022 } from "./2022/2";
import { DAY3FIRST2022, DAY3SECOND2022 } from "./2022/3";
import { DAY4FIRST2022, DAY4SECOND2022 } from "./2022/4";
import { DAY5FIRST2022, DAY5SECOND2022 } from "./2022/5";
import { DAY6FIRST2022, DAY6SECOND2022 } from "./2022/6";


const codeSnippets: {[key in Years]:{[key in Days]:{first: string, second: string}}} = {
  "2022": {
    "1": {
      first: DAY1FIRST2022,
      second: DAY1SECOND2022,
    },
    "2": {
      first: DAY2FIRST2022,
      second: DAY2SECOND2022
    },
    "3": {
      first: DAY3FIRST2022,
      second: DAY3SECOND2022
    },
    "4": {
      first: DAY4FIRST2022,
      second: DAY4SECOND2022
    },
    "5": {
      first: DAY5FIRST2022,
      second: DAY5SECOND2022
    },
    "6": {
      first: DAY6FIRST2022,
      second: DAY6SECOND2022
    },
    "7": {
      first: " ",
      second: " "
    }
  }
}

export default codeSnippets;