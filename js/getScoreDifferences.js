const compareValues = (inputData, jobData) => {
  return Math.abs(Number((inputData - jobData).toFixed(1)))
}

export const getScoreDifferences = (parsedInputData, jobData) => {
  const {
    parsedOutdoorsExtent,
    parsedHandsOnExtent,
    parsedTechnologyExtent,
    parsedCurrentSalary,
  } = parsedInputData

  let comparedScores = []

  jobData.forEach((job, i) => {
    const parsedJobSalary = Number(
      ((job.salaryRange.medium / 100000) * 2).toFixed(1)
    )

    const jobScoreDifference = {
      name: job.name,
      outdoorsExtent: compareValues(parsedOutdoorsExtent, job.outdoorsExtent),
      handsOnExtent: compareValues(parsedHandsOnExtent, job.handsOnExtent),
      technologyExtent: compareValues(
        parsedTechnologyExtent,
        job.technologyExtent
      ),
      currentSalary: compareValues(parsedCurrentSalary, parsedJobSalary),
      overalMatchPercent: null,
    }

    const totalJobScore =
      jobScoreDifference.outdoorsExtent +
      jobScoreDifference.handsOnExtent +
      jobScoreDifference.technologyExtent +
      jobScoreDifference.currentSalary

    jobScoreDifference.overalMatchPercent =
      (1 - Number((totalJobScore / 4).toFixed(1))) * 100

    ///////////////////////////////////////////////////
    //TODO - if uncommented this will throw an error
    // if the overalMatchPercent is > 100
    // or the overalMatchPercent is < 0
    // I think we need to look at getting conistent
    // input data for the jobs

    // if (
    //   jobScoreDifference.overalMatchPercent > 100 ||
    //   jobScoreDifference.overalMatchPercent < 0
    // )
    //   throw new Error('overalMatchPercent > 100')

    comparedScores.push(jobScoreDifference)
  })

  return comparedScores
}
