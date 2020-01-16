import { validUser } from '../support/testData';

// Common
const firstScreenInformation = "Olá, Tester!"
const firstScreenButton = '.modal-nav'
const formScreenInformation = "QA Recruitment"
const loginInput = '.login-form__input'
const nextButton = '.btn'
const secondScreenInformation = "Forma de entrega"

class login {
    validUserCredentials() {
        cy.get(loginInput)
        .first().type(validUser.user)
        .next().type(validUser.password)
        cy.get(nextButton).click()
        cy.contains(firstScreenInformation).should('be.visible')
        cy.get(firstScreenButton).click()
        cy.contains(secondScreenInformation).should('be.visible')
        cy.get(nextButton).click()
        cy.contains(formScreenInformation).should('be.visible')
    }
}

export default login;