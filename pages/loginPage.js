const { expect } = require('@playwright/test')
const { Page } = require('./page.js')
const userNameInput = '//input[@id="username"]'
const passwordInput = '//input[@id="password"]'
const loginBtn = '//input[@id="login-submit"]'
const path = `login`
const errorMsg = '//div[@id="flash_error"]'

class LoginPage extends Page {
  constructor (page) {
    super(page)
  }

  async open () {
    await super.open(path)
  }

  async login (username, password) {
    await super.fillInputField(userNameInput, username)
    await super.fillInputField(passwordInput, password)
  }

  async clickLoginBtn () {
    await super.clickElement(loginBtn)
  }

  async checkingPswdType () {
    const passwordField = await super.getElement(passwordInput)
    await expect(passwordField).toHaveAttribute('type', 'password')
  }

  async ensureErrorMsgVisible () {
    const errorMessage = await super.getElement(errorMsg)
    await errorMessage.isVisible()
    await expect(errorMessage).toBeVisible()
    await expect(errorMessage).toHaveText('Invalid user or password')
  }
}

module.exports = { LoginPage }
