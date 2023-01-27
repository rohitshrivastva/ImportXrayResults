const testCommands = () => {
    cy.log('hello world')
}

Cypress.Commands.add('testCommands', testCommands)