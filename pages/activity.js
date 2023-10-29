const { Page } = require('./page.js')
const { expect } = require('@playwright/test')
const activityTab = '.activity'
const activeUsers = '//a[@class="user active"]'

class Activity extends Page {
  path = 'projects/redmine/activity'
  constructor (page) {
    super(page)
    this.page = page
  }

  async ensureSelected () {
    const activity = await super.getElement(activityTab)
    await expect(activity).toHaveClass(/selected/)
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
