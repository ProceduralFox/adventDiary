import { Day1First2022, Day1Second2022 } from "./2022/1"
import { Day2First2022, Day2Second2022 } from "./2022/2"
import { Day3First2022, Day3Second2022 } from "./2022/3"
import { Day4First2022, Day4Second2022 } from "./2022/4"

export type Years = "2022"

export type Days = "1" | "2" | "3" | "4"

export const YEARS_ENUM = new Set(["2022"])

export const DAYS_ENUM = new Set(["1", "2", "3", "4"])


const solutionsDirectory: {[key in Years]: {[key in Days]?: {first: Function, second: Function}}} = {
  "2022": {
    "1": {
      first: Day1First2022,
      second: Day1Second2022
    },
    "2": {
      first: Day2First2022,
      second: Day2Second2022
    },
    "3": {
      first: Day3First2022,
      second: Day3Second2022
    },
    "4": {
      first: Day4First2022,
      second: Day4Second2022
    }
  }
}


export default solutionsDirectory;