import { dummyInputData } from './data/dummyInputData.js'
import { parseInputData } from './js/parseInputData.js'
import { jobData } from './data/jobData.js'
import { getScoreDifferences } from './js/getScoreDifferences.js'

const parsedInputData = parseInputData(dummyInputData)

const scoreDifferences = getScoreDifferences(parsedInputData, jobData)
console.log('scoreDifferences', scoreDifferences)

const getScoredUserMatches = (parsedInputData) => {}

getScoredUserMatches(parsedInputData)
