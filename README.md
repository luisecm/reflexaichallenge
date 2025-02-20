# Sales Dashboard - Test Automation

## Overview

This repository contains the test automation suite for the **Vristo Sales Dashboard**. The tests ensure the functionality, UI, and performance of the application meet the required standards. The automation is implemented using **Cypress**

## Features

- **End-to-end testing** with Cypress
- **UI validation** against Figma designs
- **Functional and regression testing**

## Installation

Ensure you have **Node.js (20+)** installed, then run:

```bash
npm install
```

## Running Tests

### 1. Run Cypress Tests Locally

```bash
npx cypress open
```

This will launch Cypress Test Runner, allowing you to manually trigger tests.

### 2. Run Cypress Tests Headlessly

```bash
npx cypress run
```

Runs all Cypress tests in headless mode.

## Test Structure

Tests are organized as follows:

```
📂 cypress
 ┣ 📂 e2e
 ┃ ┣ 📜 01-sales-dashboard.cy.js   # Functional tests (menus, buttons, etc.)
 ┣ 📂 fixtures                     # Test data
 ┣ 📂 pages
 ┃ ┣ 📜 mainPage.js                # Main Page Class
 ┃ ┣ 📜 salesPage.js               # Sales Child Page Class
 ┣ 📂 support                      # Custom commands
 ┗ 📜 config.js                    # Cypress configuration
```

## Contributing

- Fork the repository
- Create a feature branch (`git checkout -b feature-name`)
- Commit changes (`git commit -m 'Add feature'`)
- Push the branch (`git push origin feature-name`)
- Open a **Pull Request**

## License

This project is licensed under the **MIT License**.

---

For any issues, create a ticket in the repository's **Issues** section. 🚀
