import login from '../page-object/loginPage';
const loginPage = new login();

context('Login', () => {
    it('should login with a valid user credentials', () => {
        cy.visit('/')
        loginPage.validUserCredentials()
    });
});