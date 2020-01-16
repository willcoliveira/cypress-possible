# Functional Tests

In the Possible QA Challenge the functional tests are using [Cypress](https://www.cypress.io/) as it's testing tool. The API documentation available [here](https://docs.cypress.io/api/api/table-of-contents.html). 
##### Run functional tests with Cypress Interface

To run the specs with headed GUI and have a way to debug the tests start the app and run:

> ```bash
> # 1) Starting Cypress interface
> yarn cy:open
> ```

With the last command above, Cypress interface will be open and you can select the browser and the exactly file that you want to run. In addition, you are able to select to run all files directly.

##### Running Cypress tests using CLI

> ```bash
> # 1) Starting the tests via CLI
> make test-functional-cypress
> ```

This will run all the specs in headless mode.