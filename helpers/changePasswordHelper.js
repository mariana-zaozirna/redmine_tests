const { MyAccountPage } = require('../pages/myAccountPage')
const { MyPasswordPage } = require('../pages/myPassword')

class ChangePasswordHelper {
  constructor (page) {
    this.myAccountPage = new MyAccountPage(page)
    this.myPasswordPage = new MyPasswordPage(page)
  }

  async changePassword (oldPassword, newPassword) {
    await this.myAccountPage.open()
    await this.myAccountPage.handleVignette()
    await this.myAccountPage.clickChangePswdBtn()
    await this.myPasswordPage.handleVignette()
    await this.myPasswordPage.fillPswdChangingField(
      oldPassword,
      newPassword,
      newPassword
    )
    await this.myPasswordPage.clickApplyBtn()
    await this.myAccountPage.ensureOnPage()
    await this.myAccountPage.changePswdMsg()
    await this.myAccountPage.clickLogoutBtn()
  }
}

module.exports = { ChangePasswordHelper }
