const { HomePage } = require('../pages/homePage.js')
const { LoginPage } = require('../pages/loginPage.js')
const { account } = require('./testDataHelper.js')

class LoginHelper {
  constructor (page) {
    this.loginPage = new LoginPage(page)
    this.homePage = new HomePage(page)
  }

  async loginWithCredentials (userName, password) {
    await this.loginPage.open()
    await this.loginPage.login(userName, password)
    await this.loginPage.clickLoginBtn()
  }

  async login () {
    await this.loginWithCredentials(account.login, account.password)
  }

  async ensureCredentialChanged (userName, password) {
    await this.loginWithCredentials(userName, password)
    await this.homePage.ensureOnPage()
  }
}

module.exports = { LoginHelper }
