const fs = require('fs')
const jsonFileAccount = 'environments/account.json'
const jsonFileEditAccount = 'environments/editAccount.json'
const jsonFileAccountToEdit = 'environments/accountToEdit.json'

const jsonAccount = fs.readFileSync(jsonFileAccount, 'utf-8')
const jsonDataEditAccount = fs.readFileSync(jsonFileEditAccount, 'utf-8')
const jsonDataAccountToEdit = fs.readFileSync(jsonFileAccountToEdit, 'utf-8')

module.exports.account = JSON.parse(jsonAccount)
module.exports.editAccount = JSON.parse(jsonDataEditAccount)
module.exports.accountToEdit = JSON.parse(jsonDataAccountToEdit)
