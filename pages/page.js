class Page {
  constructor (page) {
    this.page = page
  }

  async open (path) {
    await this.page.goto(path == undefined ? '' : path)
    await this.page.waitForLoadState('load')
  }

  async ensureOnPage (path) {
    await this.page.waitForURL(path)
  }

  async getElement (element) {
    return await this.page.locator(element)
  }

  async clickElement (element) {
    await (await this.getElement(element)).click()
  }

  async fillInputField (element, value) {
    await (await this.getElement(element)).fill(value)
  }

  async handleVignette (path) {
    const vignette = '#google_vignette'
    const currentUrl = await this.page.url()
    if (currentUrl.includes(vignette)) {
      await this.page.goto(path)
    }
  }
}
module.exports = { Page }
