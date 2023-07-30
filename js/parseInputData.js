export const parseInputData = (inputData) => {
  const { outdoorsExtent, handsOnExtent, technologyExtent, currentSalary } =
    inputData

  const parsedOutdoorsExtent = (outdoorsExtent / 10) * 2
  const parsedHandsOnExtent = (handsOnExtent / 10) * 2
  const parsedTechnologyExtent = (technologyExtent / 10) * 2
  let parsedCurrentSalary = Number(((currentSalary / 100000) * 2).toFixed(1))

  if (parsedCurrentSalary > 1) parsedCurrentSalary = 1

  return {
    parsedOutdoorsExtent,
    parsedHandsOnExtent,
    parsedTechnologyExtent,
    parsedCurrentSalary,
  }
}
