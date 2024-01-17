# Bug Tracker for HR DB Application
# Link : https://github.com/PSock7/H-software-testing/issues

### 1. Duplicate Employee Addition Allowed
- **Description:** The system allows the addition of an employee with identical details to an existing employee.
- **Expected Behavior:** The system should prevent the addition of duplicate details and display an error message.
- **Actual Behavior:** The system permits the addition of a duplicate employee.
- **Impact:** Leads to data integrity issues with duplicate employee records.

### 2. Zip Code Length Unrestricted
- **Description:** The Zip Code field accepts values of any length, without validation.
- **Expected Behavior:** The system should have defined length constraints for zip codes.
- **Actual Behavior:** Allows zip codes of any length.
- **Impact:** Potential for inaccurate or malformed address data.

### 3. Numerical Values in City Name Field
- **Description:** The City field accepts names containing numerical values.
- **Expected Behavior:** The system should not allow numbers in the City field.
- **Actual Behavior:** City names with numbers are accepted.
- **Impact:** Affects the accuracy of address data.

### 4. Hiring Date Validation Absent
- **Description:** The system allows setting a hiring date earlier than the current date.
- **Expected Behavior:** The system should restrict hiring dates to current or future dates.
- **Actual Behavior:** Allows any date to be set as the hiring date.
- **Impact:** Potential for incorrect employee contract data.

### 5. Address Format Not Validated
- **Description:** The Address field does not enforce a standard format.
- **Expected Behavior:** The system should enforce a standard format for addresses.
- **Actual Behavior:** Address format is not validated.
- **Impact:** Potential for inconsistent and incorrect address data.

### 6. Inability to Update Hiring Date in Contract
- **Description:** The system does not allow updating the hiring date in an employee's contract.
- **Expected Behavior:** The system should allow updating the hiring date.
- **Actual Behavior:** The hiring date cannot be updated.
- **Impact:** Affects the accuracy and flexibility of contract management.

### 7. Feature Suggestion: Simplify Removal of Team Member
- **Description:** The current system lacks a straightforward way to remove a team member.
- **Suggested Improvement:** Implement a feature to simplify the process of removing a member from a team.
- **Impact:** Enhances team management capabilities and user experience.
### 8. Delete non-empty team
- **Description:** The system does not delete a team with a member
- **Suggested Improvement:** Implement a feature to resolve this bug

---
