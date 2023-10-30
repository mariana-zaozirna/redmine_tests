const { Page } = require('./page.js')
const activityTab = '.activity'
const activeUsers = '//a[@class="user active"]'

class Activity extends Page {
  path = 'projects/redmine/activity'

  constructor (page) {
    super(page)
  }

  async getActivity () {
    return super.getElement(activityTab)
  }

  async clickOnUser (index) {
    const allActiveUsers = await super.getElement(activeUsers)
    let name = await allActiveUsers.nth(index).textContent()
    await allActiveUsers.nth(index).click()
    return name
  }

  async handleVignette () {
    super.handleVignette(this.path)
  }
}

module.exports = { Activity }
