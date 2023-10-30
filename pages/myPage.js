const { Page } = require('./page.js')
const myAccountBtn = '//a[@class="my-account"]'
const logoutBtn = '//a[@class="logout"]'

class MyPage extends Page {
  path = 'my/page'

  constructor (page) {
    super(page)
  }

  async ensureOnPage () {
    await super.ensureOnPage(this.path)
  }

  async getMyAccountBtn () {
    return super.getElement(myAccountBtn)
  }

  async getLogoutBtn () {
    return super.getElement(logoutBtn)
  }

  async clickMyAccountBtn () {
    await super.clickElement(myAccountBtn)
  }
}

module.exports = { MyPage }
