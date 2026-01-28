Cypress.Commands.add('fillMandatoryFieldsAndSubmit', function() {
    cy.get('#firstName') .type('Klaybsom')
    cy.get('#lastName') .type('Noronha')
    cy.get('#email') .type('testecompass@testuser.com')
    cy.get('#open-text-area') .type('testando a aplicação')
    cy.contains('button', 'Enviar') .click()
})

Cypress.Commands.add('fillMandatoryFieldsAndSubmitWithInvalidEmail', function() {
    cy.get('#firstName') .type('Klaybsom')
    cy.get('#lastName') .type('Noronha')
    cy.get('#email') .type('testecompass.testuser.com')
    cy.get('#open-text-area') .type('testando a aplicação')
    cy.contains('button', 'Enviar') .click()
})

Cypress.Commands.add('fillFieldsAndSubmitForm', function() {
    cy.get('#firstName') .type('Klaybsom')
    cy.get('#lastName') .type('Noronha')
    cy.get('#email') .type('testecompass@testuser.com')
})






