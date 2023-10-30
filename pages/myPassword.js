const { Page } = require('./page.js')
const passwordField = '//input[@id="password"]'
const newPasswordField = '//input[@id="new_password"]'
const confirmationPassword = '//input[@id="new_password_confirmation"]'
const applyBtn = '//input[@type="submit"]'

class MyPasswordPage extends Page {
  path = 'my/password'

  constructor (page) {
    super(page)
  }

  async ensureOnPage () {
    await super.ensureOnPage(this.path)
  }

  async fillPswdChangingField (password, newPassword, confirmation) {
    await super.fillInputField(passwordField, password)
    await super.fillInputField(newPasswordField, newPassword)
    await super.fillInputField(confirmationPassword, confirmation)
  }

  async clickApplyBtn () {
    await super.clickElement(applyBtn)
  }

  async handleVignette () {
    super.handleVignette(this.path)
  }
}

module.exports = { MyPasswordPage }
