# OnboardingProject
 
This project utilizes CodeceptJS and JavaScript for test automation, providing a structured and modular approach based on the Page Object Model (POM) pattern.

## Getting Started

1. **Clone the Repository:**
   ```bash
   git clone [https://github.com/AlexArce1812/OnboardingProject.git]

## Installation
run the command `npm install` to install all the dependencies needed

## Project Structure
this project is based on Page Object Model, so the project follows the next archiquecture 

- Pages: 
    - Contains files representing application pages following the POM pattern.
- Tests: 
    - Contains test files organized into folders and tagged appropriately.
- Helpers: 
    - Provides helper functions for various test scenarios.

## Running Tests
Execute all tests using `npx codeceptjs run`

Execute specific tests using the defined tags. For example:
`npx codeceptjs run --grep @tagName`

**Available Tags**

- **@GuestBook:** Indicates tests related to the Guest Book functionality. This tag is used to organize and identify scenarios specifically testing the Guest Book feature.

- **@onboardingProject:** Refers to scenarios associated with the onboarding project. Test cases tagged with this label are part of the overall onboarding process.

- **@webDriver:** Denotes tests utilizing the WebDriver driver type. Scenarios with this tag involve interactions with the application through a web browser using WebDriver.

- **@productionSafe:** Signifies that the associated test is safe to run in a production environment. These tests have been carefully reviewed to ensure they don't interfere with live data or create undesirable side effects.

- **@REST:** Represents scenarios that interact with the application through REST API calls using codeceptjs REST Helper. This tag categorizes tests focusing on testing the application's backend services.

- **@productionSafe:** Similar to the previous tag, this indicates that the associated test is safe for execution in a production environment. This tag emphasizes the importance of running the test without causing disruptions or issues.

- **@QueryRequest:** Identifies scenarios related to query requests using `JanusPersonRecord_Helper` file from `helpers` folder. Tests with this tag are specifically designed to cover scenarios involving query requests within the application.

Feel free to use these tags when running tests to selectively execute scenarios based on specific features, drivers, or production safety considerations.

## Additional Notes

This framework utilizes a `.env` file; make sure to create it in the project's root. Below is a sample of the required variables:

    LEGACYDB_USER=
    LEGACYDB_PASSWORD=
    LEGACYDB_HOST=
    LEGACYDB_SCHEMA=
    LEGACY_EPIDB_SCHEMA=
    LEGACYDB_PORT=
    LEGACYDB_INSTANCE=
    URL=

Feel free to customize these variables



...