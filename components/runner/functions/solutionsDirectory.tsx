import { Day1First2022 } from "./2022/1"

export type Years = "2022"

export type Days = "1" | "2" | "3" | "4"

export const YEARS_ENUM = new Set(["2022"])

export const DAYS_ENUM = new Set(["1", "2", "3", "4"])


const solutionsDirectory: {[key in Years]: {[key in Days]?: {first: Function, second: Function}}} = {
  "2022": {
    "1": {
      first: Day1First2022,
      second: Day1First2022
    }
  }
}


export default solutionsDirectory;