const { test } = require('@playwright/test')
const { MyAccountPage } = require('../pages/myAccountPage.js')
const { MyPasswordPage } = require('../pages/myPassword.js')
const { LoginHelper } = require('../helpers/loginHelper.js')
const { ChangePasswordHelper } = require('../helpers/changePasswordHelper.js')
const { editAccount, accountToEdit } = require('../helpers/testDataHelper.js')

let myAccountPage
let myPasswordPage
let loginHelper

test.describe('Account', () => {
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

  test('TC_3: Editing My Account', async () => {
    let filledData = await myAccountPage.fillFormData()
    await myAccountPage.selectLanguage(editAccount.newLanguage)
    await myAccountPage.clickSaveBtn()
    await myAccountPage.ensureDisplayedSuccesMsgInUa()
    await myAccountPage.verifySavedData(filledData)

    //postcondition
    await myAccountPage.selectLanguage(editAccount.language)
    await myAccountPage.clickSaveBtn()
  })

  test('TC_4: Password changing', async ({ page }) => {
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

    //postcondition
    await new ChangePasswordHelper(page).changePassword(
      editAccount.newPassword,
      accountToEdit.password
    )
  })
})
