import { equipment , user  } from '../support/testData';

// Common 
const alertMessage = '.alert'
const saveButton = '.form-actions > .btn-primary'
// User
const addressComplementInput = '#input-complement'
const addressNumberInput= '#input-number'
const cepInput = '#input-cep'
const cityInput = '#input-city'
const documentInput = '#input-document'
const emailInput = '#input-email'
const phoneInput = '#input-phone'
const stateSelector = '.select-wrap'
const streetInput = '#input-street'
const usernameInput = '#input-name'
// Equipment
const equipmentBrandInput = '#input-equipment-brand'
const equipmentMarketValueInput = '#input-equipment-market-value'
const equipmentModelInput = '#input-equipment-model'
const equipmentSerialInput = '#input-equipment-serial'
const equipmentTypeInput = '#input-equipment-type'
const equipmentYearInput = '#input-equipment-year'

class form {
    assertSuccessCreated() {
        cy.get(alertMessage)
            .should('be.visible')
            .should('contain', 'Formulário salvo com sucesso!')
    }

    validEquipmentInformation() {
        cy.get(equipmentTypeInput).type(equipment.type)
        cy.get(equipmentBrandInput).type(equipment.brand)
        cy.get(equipmentModelInput).type(equipment.model)
        cy.get(equipmentYearInput).type(equipment.year)
        cy.get(equipmentSerialInput).type(equipment.serial)
        cy.get(equipmentMarketValueInput).type(equipment.marketValue)
        cy.get(saveButton).click()
    }

    validUserInformation() {
        cy.get(usernameInput).type(user.name)
        cy.get(emailInput).type(user.email)
        cy.get(documentInput).type(user.document)
        cy.get(phoneInput).type(user.phoneNumber)
        cy.get(cepInput).type(user.cepNumber)
        cy.get(stateSelector).first().click()
        cy.get(cityInput).type(user.city)
        cy.get(streetInput).type(user.street)
        cy.get(addressNumberInput).type(user.addressNumber)
        cy.get(addressComplementInput).type(user.addressComplement)
    }  
}

export default form;