  const { test, expect } = require('@playwright/test');

  test.describe('Database management', () => {
    
    test('should reset the database', async ({ page }) => {
      
      await page.goto('https://h.hr.dmerej.info/'); 
      await page.click('text=Reset database');
      await expect(page).toHaveURL('https://h.hr.dmerej.info/reset_db');

      await expect(page.locator('text=You are about to delete all the information from the database.')).toBeVisible();
      await page.click('button.btn-danger[type="submit"]');
      
    });

  });
