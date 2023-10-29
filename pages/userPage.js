const { Page } = require('./page.js');
const { expect } = require('@playwright/test');
const name = '//div[@id="content"] //h2';
const issueBlock = '//table[@class="list issue-report"]';


class UserPage  extends Page {

    constructor(page) {
        super(page);
        this.page = page;
    }
    async ensureOnPage() {
        await super.ensureOnPage(/\/users\/\d+$/)

    }
    async getUserName() {
       const userName = await super.getElement(name);
       const userNameOnUserPage = await userName.textContent();
       return userNameOnUserPage.trim();
       
    }
    async isVisibleIssueBlock() {
        const blockIssue = await super.getElement(issueBlock);
        await expect(blockIssue).toBeVisible();
    }
}
module.exports = { UserPage };