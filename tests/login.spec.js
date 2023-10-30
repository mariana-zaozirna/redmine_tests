const { test, expect } = require('@playwright/test')
const { LoginPage } = require('../pages/loginPage.js')
const { MyPage } = require('../pages/myPage.js')
const { account } = require('../helpers/testDataHelper.js')
const { faker } = require('@faker-js/faker')
let loginPage
let myPage

test.describe('Login', () => {
  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page)
    myPage = new MyPage(page)
    await loginPage.open()
  })

  test('TC_1:Sign in with valid credentials', async () => {
    await loginPage.login(account.login, account.password)
    await expect(await loginPage.getPasswordType()).toHaveAttribute(
      'type',
      'password'
    )
    await loginPage.clickLoginBtn()
    await myPage.ensureOnPage()
    await expect(await myPage.getMyAccountBtn()).toBeVisible()
    await expect(await myPage.getLogoutBtn()).toBeVisible()
  })

  test('TC_2:Sign in with invalid "Password" field', async () => {
    await loginPage.login(account.login, faker.internet.password())
    await expect(await loginPage.getPasswordType()).toHaveAttribute(
      'type',
      'password'
    )
    await loginPage.clickLoginBtn()
    await expect(await loginPage.getErrorMsg()).toBeVisible()
    await expect(await loginPage.getErrorMsg()).toHaveText(
      'Invalid user or password'
    )
  })
})
