import { dummyInputData } from './dummyInputData.js'
import { parseInputData } from './parseInputData.js'

const parsedInputData = parseInputData(dummyInputData)

const getScoreUserMatches = (parsedInputData) => {
  console.log('parsedInputData', parsedInputData)
}

getScoreUserMatches(parsedInputData)
