import { DAY1FIRST2022, DAY1SECOND2022 } from "./2022/1";
import { Years, Days} from "../components/runner/functions/solutionsDirectory"
import { DAY2FIRST2022, DAY2SECOND2022 } from "./2022/2";
import { DAY3FIRST2022, DAY3SECOND2022 } from "./2022/3";
import { DAY4FIRST2022, DAY4SECOND2022 } from "./2022/4";
import { DAY5FIRST2022, DAY5SECOND2022 } from "./2022/5";
import { DAY6FIRST2022, DAY6SECOND2022 } from "./2022/6";
import { DAY8FIRST2022, DAY8SECOND2022 } from "./2022/8";
import { DAY7FIRST2022, DAY7SECOND2022 } from "./2022/7";
import { DAY9FIRST2022, DAY9SECOND2022 } from "./2022/9";
import { DAY10FIRST2022, DAY10SECOND2022 } from "./2022/10";


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
      first: DAY7FIRST2022,
      second: DAY7SECOND2022
    },
    "8": {
      first: DAY8FIRST2022,
      second: DAY8SECOND2022
    },
    "9": {
      first: DAY9FIRST2022,
      second: DAY9SECOND2022,
    },
    "10": {
      first: DAY10FIRST2022,
      second: DAY10SECOND2022
    },
    "11": {
      first: ``,
      second: ``,
    },
    "12": {
      first: ``,
      second: ``
    },
    "13": {
      first: ``,
      second: ``
    },
    "14": {
      first: ``,
      second: ``
    },
    "15": {
      first: ``,
      second: ``
    },
    "16": {
      first: ``,
      second: ``
    },
    "17": {
      first: ``,
      second: ``
    },
    "18": {
      first: ``,
      second: ``
    },
    "19": {
      first: ``,
      second: ``,
    },
    "20": {
      first: ``,
      second: ``
    },
    "21": {
      first: ``,
      second: ``,
    },
    "22": {
      first: ``,
      second: ``
    },
    "23": {
      first: ``,
      second: ``
    },
    "24": {
      first: ``,
      second: ``
    },
    "25": {
      first: ``,
      second: ``
    },
  }
}

export default codeSnippets;