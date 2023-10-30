const { test, expect } = require('@playwright/test')
const { MyAccountPage } = require('../pages/myAccountPage.js')
const { MyPasswordPage } = require('../pages/myPassword.js')
const { LoginHelper } = require('../helpers/loginHelper.js')
const { ChangePasswordHelper } = require('../helpers/changePasswordHelper.js')
const { editAccount, accountToEdit } = require('../helpers/testDataHelper.js')

test.describe('Account', () => {
  let myAccountPage
  let myPasswordPage
  let loginHelper
  
  test.beforeEach(async ({ page }) => {
    myAccountPage = new MyAccountPage(page)
    myPasswordPage = new MyPasswordPage(page)

    loginHelper = new LoginHelper(page)
    await loginHelper.login()
    await myAccountPage.open()
    await page.waitForLoadState()
    await myAccountPage.handleVignette()
  })

  test('TC_3: Editing My Account', async () => {
    const filledData = await myAccountPage.fillFormData()
    await myAccountPage.selectLanguage(editAccount.newLanguage)
    await myAccountPage.clickSaveBtn()
    await expect(await myAccountPage.getSuccessMsgInUK()).toBeVisible()
    await expect(await myAccountPage.getSuccessMsgInUK()).toHaveText(
      'Обліковий запис успішно оновлений.'
    )
    expect(filledData.firstName).toBe(
      await myAccountPage.getFirstNameInputValue()
    )
    expect(filledData.lastName).toBe(
      await myAccountPage.getLastNameInputValue()
    )
    expect(filledData.nickName).toBe(await myAccountPage.getNickInputValue())
  })

  test.afterEach(async () => {
    await myAccountPage.selectLanguage(editAccount.language)
    await myAccountPage.clickSaveBtn()
  })
})

test.describe('Account', () => {
  let myAccountPage
  let myPasswordPage
  let loginHelper

  test.beforeEach(async ({ page }) => {
    myAccountPage = new MyAccountPage(page)
    myPasswordPage = new MyPasswordPage(page)

    loginHelper = new LoginHelper(page)
    await loginHelper.loginWithCredentials(
      accountToEdit.login,
      accountToEdit.password
    )

    await myAccountPage.open()
    await page.waitForLoadState()
    await myAccountPage.handleVignette()
  })

  test('TC_4: Password changing', async () => {
    await myAccountPage.clickChangePswdBtn()
    await myPasswordPage.handleVignette()
    await myPasswordPage.ensureOnPage()
    await myPasswordPage.fillPswdChangingField(
      accountToEdit.password,
      editAccount.newPassword,
      editAccount.newPassword
    )
    await myPasswordPage.clickApplyBtn()
    await myAccountPage.ensureOnPage()
    await myAccountPage.changePswdMsg()
    await myAccountPage.clickLogoutBtn()
    await loginHelper.ensureCredentialChanged(
      accountToEdit.login,
      editAccount.newPassword
    )
  })

  test.afterEach(async ({ page }) => {
    await new ChangePasswordHelper(page).changePassword(
      editAccount.newPassword,
      accountToEdit.password
    )
  })
})
