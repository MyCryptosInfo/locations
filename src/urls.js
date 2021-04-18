const { stagePhase, stagePhases, InvalidParameterError } = require('mycryptos-api')

const { domainName } = require('./domains')
const { paramName } = require('./params')

function enterAccountUrl ({ redirectTo , stage }) {
  if (!stagePhases.includes(stage)) {
    throw new InvalidParameterError('stage')
  }

  const baseUrl = `https://${domainName.auth}${stage === stagePhase.test ? '/test' : ''}`

  const url = new URL(`${baseUrl}/enter`)

  if (redirectTo) {
  url.searchParams.append(paramName.redirectTo, redirectTo)
  }

  return url
}

module.exports = { enterAccountUrl }
