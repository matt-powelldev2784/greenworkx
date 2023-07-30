import { dummyInputData } from './dummyInputData.js'
import { parseInputData } from './parseInputData.js'

const parsedInputData = parseInputData(dummyInputData)

const getScoredUserMatches = (parsedInputData) => {
  console.log('parsedInputData', parsedInputData)
}

getScoredUserMatches(parsedInputData)
