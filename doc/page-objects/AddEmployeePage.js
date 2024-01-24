// page-objects/AddEmployeePage.js

class AddEmployeePage {
    constructor(page) {
      this.page = page;
      this.nameInput = page.locator('#id_name');
      this.emailInput = page.locator('#id_email');
      this.addressLine1Input = page.locator('#id_address_line1');
      this.addressLine2Input = page.locator('#id_address_line2');
      this.cityInput = page.locator('#id_city');
      this.zipCodeInput = page.locator('#id_zip_code');
      this.hiringDateInput = page.locator('#id_hiring_date');
      this.jobTitleInput = page.locator('#id_job_title');
      this.addButton = page.locator('button:has-text("Add")');
    }
  
    // Add a new test case
    async goto() {
      await this.page.goto('https://h.hr.dmerej.info/add_employee');
    }
  
    async fillName(name) {
      await this.nameInput.fill(name);
    }
  
    async fillEmail(email) {
      await this.emailInput.fill(email);
    }
  
    async fillAddressLine1(addressLine1) {
      await this.addressLine1Input.fill(addressLine1);
    }
  
    async fillAddressLine2(addressLine2) {
      await this.addressLine2Input.fill(addressLine2);
    }
  
    async fillCity(city) {
      await this.cityInput.fill(city);
    }
  
    async fillZipCode(zipCode) {
      await this.zipCodeInput.fill(zipCode);
    }
  
    async fillHiringDate(hiringDate) {
      await this.hiringDateInput.fill(hiringDate);
    }
  
    async fillJobTitle(jobTitle) {
      await this.jobTitleInput.fill(jobTitle);
    }
  
    async submit() {
      await this.addButton.click();
    }
  
    async addEmployee(name, email, addressLine1, addressLine2, city, zipCode, hiringDate, jobTitle) {
      await this.fillName(name);
      await this.fillEmail(email);
      await this.fillAddressLine1(addressLine1);
      await this.fillAddressLine2(addressLine2);
      await this.fillCity(city);
      await this.fillZipCode(zipCode);
      await this.fillHiringDate(hiringDate);
      await this.fillJobTitle(jobTitle);
      await this.submit();
    }
  
    async checkForErrorMessage(message) {
      const errorMessage = this.page.locator(`text=${message}`);
      await errorMessage.waitFor({ state: 'visible' });
      return errorMessage.isVisible();
    }
  }
  
  module.exports = { AddEmployeePage };
  