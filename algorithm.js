import { dummyInputData } from './dummyInputData.js'

const getScoreUserMatches = (userData) => {
  const {
    willingnessToWorkOutdoors,
    willingnessToLearnHandsOnSkills,
    willingnessToWorkWithTechnology,
    currentAnnualSalaryEquivalent,
  } = userData

  console.log('userData', userData)
}

getScoreUserMatches(dummyInputData)
