# Online Shop Automated Testing

This project contains automated end-to-end tests for the Online Shop MVP using Cypress.

## Getting Started

### Prerequisites

- Node.js (v12 or higher)
- npm (Node Package Manager)

### Installation

1. **Clone this repository:**

   ```bash
   git clone https://github.com/rafaponzio/online-shop-cypress
   ```

2. **Navigate to the project directory:**

   ```bash
   cd online-shop-cypress
   ```

3. **Install dependencies:**

   ```bash
   npm install
   ```

### Running Tests

To run the tests using the Cypress Test Runner:

```bash
npx cypress open
```

This will open the Cypress Test Runner where you can select and run individual test files or all tests.

To run tests in headless mode (suitable for CI/CD):

```bash
npx cypress run
```