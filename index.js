import { dummyInputData } from './data/dummyInputData.js'
import { parseInputData } from './js/parseInputData.js'
import { jobData } from './data/jobData.js'
import { getScoreDifferences } from './js/getScoreDifferences.js'

const parsedInputData = parseInputData(dummyInputData)

const scoreDifferences = getScoreDifferences(parsedInputData, jobData)

const getScoredUserMatches = (scoreDifferences) => {
  const topThreeMatchedResults = scoreDifferences
    .map((job) => {
      return {
        name: job.name,
        score: job.overalMatchPercent,
      }
    })
    .sort((a, b) => {
      return b.score - a.score
    })
    .slice(0, 3)

  return topThreeMatchedResults
}

const scoredUserMatches = getScoredUserMatches(scoreDifferences)
console.log('scoredUserMatches', scoredUserMatches)
