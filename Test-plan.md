# Test Plan for HR DB Application

## 1. Test Description: Add Duplicate Employee
- **Objective:** To verify the system's response when attempting to add an employee with duplicate details (same email, name, etc.).
- **Steps:**
  1. Navigate to 'Add new employee'.
  2. Enter the details of an existing employee (same email, name, etc.).
  3. Submit the form.
- **Expected Result:** The system should prevent the addition of duplicate employee details and display an appropriate error message.
- **Status:** Failed. The system allows the addition of an employee with duplicate details.

## 2. Test Description: Zip Code Validation
- **Objective:** To test if there are any length restrictions or validations on the Zip Code field.
- **Steps:**
  1. Go to 'Add new employee' or 'Edit employee'.
  2. Enter a very long or very short zip code.
  3. Submit the form.
- **Expected Result:** The system should have a defined length for the zip code and validate it.
- **Status:** Failed. The system allows zip codes of any length.

## 3. Test Description: City Name Validation
- **Objective:** To check if the City field accepts numerical values.
- **Steps:**
  1. Navigate to 'Add new employee' or 'Edit employee' then 'Edit address'.
  2. Enter a city name with numbers.
  3. Submit the form.
- **Expected Result:** The system should restrict numerical values in the City field.
- **Status:** Failed. The system allows city names containing numbers.

## 4. Test Description: Hiring Date Validation
- **Objective:** To ensure the hiring date cannot be set earlier than the current date.
- **Steps:**
  1. Go to 'Add new employee' or 'Edit employee', then to 'Edit contract'.
  2. Set the hiring date to a date earlier than today.
  3. Submit the form.
- **Expected Result:** The system should restrict setting a hiring date earlier than the current date.
- **Status:** Failed. The system allows any date to be set.

## 5. Test Description: Address Format Validation
- **Objective:** To assess if there is any format validation for the Address field.
- **Steps:**
  1. Navigate to 'Add new employee' or 'Edit employee', then to 'Edit address'.
  2. Enter an address in an informal or incorrect format.
  3. Submit the form.
- **Expected Result:** The system should have a standard format for addresses and validate it.
- **Status:** [Pending Result]

## 6. Test Description: Update Hiring Date in Contract
- **Objective:** To test the ability to update the hiring date in an employee's contract.
- **Steps:**
  1. Choose an existing employee.
  2. Attempt to update the hiring date in their contract.
  3. Save changes.
- **Expected Result:** The system should allow updating the hiring date in the contract.
- **Status:** Failed. Unable to update the hiring date.

## 7. Test Description: Remove Member from Team
- **Objective:** To assess the functionality of removing a member from a team.
- **Steps:**
  1. Navigate to the team management section.
  2. Select a team member to remove.
  3. Attempt to remove the member from the team.
- **Expected Result:** The system should provide a feature to remove a team member.
- **Status:** Feature suggestion. We could implement a feature that simplifies the process of removing a member from a team.

---
