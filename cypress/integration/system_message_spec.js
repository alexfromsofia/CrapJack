import { systemMessage, mainButton } from './elements';

describe('System Messages', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('Should have a welcome message', () => {
    cy.get(systemMessage).should('have.text', 'Welcome to Crap Jack!');
  });

  it('Should change based on app state', () => {
    // When we first click New Game
    cy.get(mainButton).click();
    cy.get(systemMessage).should('have.text', 'Dealing cards...');

    // When we first click Reaveal Cards
    cy.get(mainButton).click();
    cy.get(systemMessage).should('have.text', 'And the winner is...');

    // When we click New Game for a second time
    cy.get(mainButton).click();
    cy.get(systemMessage).should('have.text', 'Dealing cards...');
  });
});
