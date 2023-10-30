const { Page } = require('./page.js')
const loginBtn = '//a[@class ="login"]'
const myAccountBtn = '//a[@class="my-account"]'
const activityTab = '.activity'

class HomePage extends Page {
  constructor (page) {
    super(page)
  }

  async clickLoginBtn () {
    await super.clickElement(loginBtn)
  }

  async open () {
    await super.open()
  }

  async clickActivity () {
    await super.clickElement(activityTab)
  }

  async ensureOnPage () {
    await super.ensureOnPage('')
  }

  async clickMyAccountBtn () {
    await super.clickElement(myAccountBtn)
  }
}
module.exports = { HomePage }
