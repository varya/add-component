const getTemplate = require('./get-template')

module.exports = PureComponent

function PureComponent (rootDirectory, name, toImport) {
  return getTemplate(rootDirectory, name, toImport, 'functional-component')
}
