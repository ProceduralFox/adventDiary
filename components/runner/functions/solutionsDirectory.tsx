import { Day1First2022, Day1Second2022 } from "./2022/1"
import { Day10First2022, Day10Second2022 } from "./2022/10"
import { Day2First2022, Day2Second2022 } from "./2022/2"
import { Day3First2022, Day3Second2022 } from "./2022/3"
import { Day4First2022, Day4Second2022 } from "./2022/4"
import { Day5First2022, Day5Second2022 } from "./2022/5"
import { Day6First2022, Day6Second2022} from "./2022/6"
import { Day7First2022, Day7Second2022 } from "./2022/7"
import { Day8First2022, Day8Second2022 } from "./2022/8"
import { Day9First2022, Day9Second2022 } from "./2022/9"

export type Years = "2022"

export type Days = "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | 
"11" | "12" | "13" | "14" | "15" | "16" | "17" | "18" | "19" | "20" | 
"21" | "22" | "23" | "24" | "25"

export const YEARS_ENUM = new Set(["2022"])

export const DAYS_ENUM = new Set(["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", 
"11", "12", "13", "14", "15", "16", "17", "18", "19", "20", 
"21", "22", "23", "24", "25"])


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
    },
    "5": {
      first: Day5First2022,
      second: Day5Second2022
    },
    "6": {
      first: Day6First2022,
      second: Day6Second2022
    },
    "7": {
      first: Day7First2022,
      second: Day7Second2022
    },
    "8": {
      first: Day8First2022,
      second: Day8Second2022
    },
    "9": {
      first: Day9First2022,
      second: Day9Second2022
    },
    "10": {
      first: Day10First2022,
      second: Day10Second2022
    },
    "11": {
      first: ()=>"placeholder",
      second: ()=>"placeholder",
    },
    "12": {
      first: ()=>"placeholder",
      second: ()=>"placeholder"
    },
    "13": {
      first: ()=>"placeholder",
      second: ()=>"placeholder"
    },
    "14": {
      first: ()=>"placeholder",
      second: ()=>"placeholder"
    },
    "15": {
      first: ()=>"placeholder",
      second: ()=>"placeholder"
    },
    "16": {
      first: ()=>"placeholder",
      second: ()=>"placeholder"
    },
    "17": {
      first: ()=>"placeholder",
      second: ()=>"placeholder"
    },
    "18": {
      first: ()=>"placeholder",
      second: ()=>"placeholder"
    },
    "19": {
      first: ()=>"placeholder",
      second: ()=>"placeholder",
    },
    "20": {
      first: ()=>"placeholder",
      second: ()=>"placeholder"
    },
    "21": {
      first: ()=>"placeholder",
      second: ()=>"placeholder",
    },
    "22": {
      first: ()=>"placeholder",
      second: ()=>"placeholder"
    },
    "23": {
      first: ()=>"placeholder",
      second: ()=>"placeholder"
    },
    "24": {
      first: ()=>"placeholder",
      second: ()=>"placeholder"
    },
    "25": {
      first: ()=>"placeholder",
      second: ()=>"placeholder"
    },
  }
}


export default solutionsDirectory;