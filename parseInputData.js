export const parseInputData = (inputData) => {
  const { outdoorsExtent, handsOnExtent, technologyExtent, currentSalary } =
    inputData

  const parsedOutdoorsExtent = (outdoorsExtent / 10) * 2
  const parsedHandsOnExtent = (handsOnExtent / 10) * 2
  const parsedTechnologyExtent = (technologyExtent / 10) * 2
  const parsedCurrentSalary = currentSalary / 1000

  return {
    parsedOutdoorsExtent,
    parsedHandsOnExtent,
    parsedTechnologyExtent,
    parsedCurrentSalary,
  }
}
