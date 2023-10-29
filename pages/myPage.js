const { expect } = require('@playwright/test')
const { Page } = require('./page.js')
const myAccountBtn = '//a[@class="my-account"]'
const logoutBtn = '//a[@class="logout"]'

class MyPage extends Page {
  path = 'my/page'
  constructor (page) {
    super(page)
    this.page = page
  }
  async ensureOnPage () {
    await super.ensureOnPage(this.path)
  }
  async isMyAccountBtnVisible () {
    const accountBtn = await super.getElement(myAccountBtn)
    await accountBtn.isVisible()
    await expect(accountBtn).toBeVisible()
  }
  async isLogoutBtnVisible () {
    const logout = await super.getElement(logoutBtn)
    await logout.isVisible()
    await expect(logout).toBeVisible()
  }
  async clickMyAccountBtn () {
    await super.clickElement(myAccountBtn)
  }
}

module.exports = { MyPage }
