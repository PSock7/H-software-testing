// Tests for adding an employee
const {
    test,
    expect
} = require('@playwright/test');

// Add a new test suite
test.describe('Employee management', () => {
    
    // Add an employee
    async function addEmployee(page) {
        await page.goto('https://h.hr.dmerej.info/add_employee');
        await page.locator('#id_name').fill('Jane Doe');
        await page.locator('#id_email').fill('jane.doe@example.com');
        await page.locator('#id_address_line1').fill('123 Main St');
        await page.locator('#id_address_line2').fill('Apt 4B');
        await page.locator('#id_city').fill('Anytown');
        await page.locator('#id_zip_code').fill('12345');
        await page.locator('#id_hiring_date').fill('2024-01-24');
        await page.locator('#id_job_title').fill('Developer');
        await page.locator('button:has-text("Add")').click();
    }

    // Add a new test case
    test('should not allow adding a duplicate employee', async ({
        page
    }) => {

        // Add an employee
        await addEmployee(page);

        // Verify that the employee was added
        await expect(page).toHaveURL('https://h.hr.dmerej.info/employees');

        // Add the same employee again
        await addEmployee(page);

        // Verify that the employee was not added
        await expect(page.locator('text=Employee already exists')).toBeVisible();

        // Verify that we are still on the add employee page
        await expect(page).toHaveURL('https://h.hr.dmerej.info/add_employee');

    });

});