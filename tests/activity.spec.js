const { test, expect } = require('@playwright/test')
const { HomePage } = require('../pages/homePage.js')
const { Activity } = require('../pages/activity.js')
const { UserPage } = require('../pages/userPage.js')

let activityPage
let homePage
let userPage

test.describe('Login', () => {
  test('TC_5:Redirect to User page', async ({ page }) => {
    activityPage = new Activity(page)
    homePage = new HomePage(page)
    userPage = new UserPage(page)
    await homePage.open()
    await homePage.clickActivity()
    await activityPage.handleVignette()
    await expect(await activityPage.getActivity()).toHaveClass(/selected/)
    let userNameOnActivity = await activityPage.clickOnUser(0)
    await userPage.ensureOnPage()
    let userNameOnUserPage = await userPage.getUserName()
    expect(userNameOnActivity).toBe(userNameOnUserPage)
    await expect(await userPage.getIssueBlock()).toBeVisible()
  })
})
