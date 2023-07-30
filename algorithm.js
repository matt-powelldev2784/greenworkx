import { dummyInputData } from './dummyInputData.js'
import { parseInputData } from './parseInputData.js'
import { jobData } from './jobData.js'
import { getScoreDifferences } from './getScoreDifferences.js'

const parsedInputData = parseInputData(dummyInputData)

const scoreDifferences = getScoreDifferences(parsedInputData, jobData)
console.log('scoreDifferences', scoreDifferences)

const getScoredUserMatches = (parsedInputData) => {}

getScoredUserMatches(parsedInputData)
