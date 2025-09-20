# SEIT Written Test - Automation (BDD with WebdriverIO)

## 📌 Overview
This project is an automation solution for the **SEIT Written Test**.  
I chose **WebdriverIO with Cucumber (BDD)** to translate the manual test cases into executable scenarios.  

### Approach
- Converted manual steps from the test document into **Gherkin feature files**.
- Implemented **step definitions** in JavaScript using WebdriverIO APIs.
- Used **page object pattern** (optional) for reusability and readability.
- Used **Chai** assertions for validation.
- Managed browser via **Chromedriver service** (kept in sync with local Chrome).

This approach ensures the tests are:
- **Readable** (thanks to BDD style).
- **Maintainable** (using page objects).
- **Executable** across environments (via WebdriverIO config).

---

## ⚙️ Setup & Run

```bash
# 1. Clone Repository
git clone https://github.com/GahriRafli/seit-written-test-bdd.git
cd seit-written-test-bdd/bdd

# 2. Install Dependencies
npm install

# 3. Install Chromedriver (must match your local Chrome version)
npm install chromedriver@latest --save-dev

# 4. Run all scenarios
npm test

# 5. Run scenarios by tag (example: only @debug)
npx wdio wdio.conf.js --cucumberOpts.tags @debug

# 6. Run a specific feature file
npx wdio wdio.conf.js --spec ./features/scenario1.feature
