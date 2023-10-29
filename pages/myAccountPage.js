const { Page } = require('./page.js')
const { faker } = require('@faker-js/faker')
const { expect } = require('@playwright/test')
const firstNameInput = '//input[@id="user_firstname"]'
const lastNameInput = '//input[@id="user_lastname"]'
const languageDropdown = '//select[@id="user_language"]'
const nick = '//input[@id="user_custom_field_values_3"]'
const saveBtn = '//p[@class="mobile-hide"]/input[@type="submit"]'
const successMsg = '//div[@id="flash_notice"]'
const changePswdBtn = '//a[@class="icon icon-passwd"]'
const successPswdChangeMsg = '//div[@id="flash_notice"]'
const logoutBtn = '//a[@class="logout"]'

class MyAccountPage extends Page {
  path = 'my/account'
  constructor (page) {
    super(page)
    this.page = page
  }

  async open () {
    await super.open(this.path)
  }

  async ensureOnPage () {
    await super.ensureOnPage(this.path)
  }

  async fillFormData () {
    const fakerData = {
      firstName: faker.internet.userName(),
      lastName: faker.person.lastName(),
      nickName: faker.internet.userName()
    }

    await super.fillInputField(firstNameInput, fakerData.firstName)
    await super.fillInputField(lastNameInput, fakerData.lastName)
    await super.fillInputField(nick, fakerData.nickName)

    return fakerData
  }

  async verifySavedData (data) {
    const actualFirstName = await (
      await super.getElement(firstNameInput)
    ).inputValue()
    const actualLastName = await (
      await super.getElement(lastNameInput)
    ).inputValue()
    const actualNick = await (await super.getElement(nick)).inputValue()
    expect(data.firstName).toBe(actualFirstName)
    expect(data.lastName).toBe(actualLastName)
    expect(data.nickName).toBe(actualNick)
  }

  async selectLanguage (lang) {
    const dropdownLanguage = await super.getElement(languageDropdown)
    await dropdownLanguage.selectOption(lang)
  }

  async clickSaveBtn () {
    await super.clickElement(saveBtn)
  }

  async ensureDisplayedSuccesMsgInUa () {
    const msg = await super.getElement(successMsg)
    await msg.isVisible()
    await expect(msg).toBeVisible()
    await expect(msg).toHaveText('Обліковий запис успішно оновлений.')
  }

  async clickChangePswdBtn () {
    await super.clickElement(changePswdBtn)
  }

  async changePswdMsg () {
    const msg = await super.getElement(successPswdChangeMsg)
    await expect(msg).toBeVisible()
    await expect(msg).toHaveText('Password was successfully updated.')
  }

  async clickLogoutBtn () {
    await super.clickElement(logoutBtn)
  }

  async handleVignette () {
    super.handleVignette(this.path)
  }
}

module.exports = { MyAccountPage }
