const {
    test,
    expect
} = require('@playwright/test');

// Add a new test suite
test.describe('Team management', () => {

    test('should allow creating a new team', async ({
        page
    }) => {

        await page.goto('https://h.hr.dmerej.info/add_team');
        await page.locator('#id_name').fill('Team Rocket');
        await page.locator('button:has-text("Add")').click();
        await expect(page).toHaveURL('https://h.hr.dmerej.info/teams');

    });

});