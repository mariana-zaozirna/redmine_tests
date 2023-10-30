const fs = require('fs')
const jsonFileAccount = 'environments/account.json'
const jsonFileEditAccount = 'environments/editAccount.json'
const jsonFileAccountToEdit = 'environments/accountToEdit.json'

module.exports.account = readFile(jsonFileAccount)
module.exports.editAccount = readFile(jsonFileEditAccount)
module.exports.accountToEdit = readFile(jsonFileAccountToEdit)

function readFile (path) {
  return JSON.parse(fs.readFileSync(path, 'utf-8'))
}
