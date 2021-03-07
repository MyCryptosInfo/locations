const domains = require('./domains.js')
const params = require('./params.js')
const urls = require('./urls.js')

module.exports = { ...domains, ...params, ...urls }
