const domains = require('./domains')
const params = require('./params')
const urls = require('./urls')

module.exports = { ...domains, ...params, ...urls }
