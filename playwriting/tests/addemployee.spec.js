const { test, expect } = require('@playwright/test');

test.describe('Employee management', () => {
  
  test('should allow adding a new employee', async ({ page }) => {
    
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
    await expect(page).toHaveURL('https://h.hr.dmerej.info/employees'); 
    
  });

});
