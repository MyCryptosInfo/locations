const { domainName } = require('./domains.js')
const { paramName } = require('./params.js')

function enterAccountUrl ({ redirectTo = `https://${domainName.app}` } = {}) {
  const url = new URL(`https://${domainName.auth}/enter`)

  url.searchParams.append(paramName.redirectTo, redirectTo)

  return url
}

module.exports = { enterAccountUrl }
