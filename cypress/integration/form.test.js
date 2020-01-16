import form from '../page-object/formPage';
import login from '../page-object/loginPage';
const formPage = new form();
const loginPage = new login();

context('Form', () => {
    beforeEach(() => {
        cy.visit("/")
        loginPage.validUserCredentials()
    });

    it('should create a valid register', () => {
        formPage.validUserInformation()
        formPage.validEquipmentInformation()
        formPage.assertSuccessCreated()
    });
});
