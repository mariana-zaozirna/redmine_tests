const { test } = require('@playwright/test')
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
    await loginPage.checkingPswdType()
    await loginPage.clickLoginBtn()
    await myPage.ensureOnPage()
    await myPage.isMyAccountBtnVisible()
    await myPage.isLogoutBtnVisible()
  })

  test('TC_2:Sign in with invalid "Password" field', async () => {
    await loginPage.login(account.login, faker.internet.password())
    await loginPage.checkingPswdType()
    await loginPage.clickLoginBtn()
    await loginPage.ensureErrorMsgVisible()
  })
})
