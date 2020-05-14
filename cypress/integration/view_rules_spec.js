import { rulesButton, modal, overlay } from './elements';

describe('View Rules', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('Should open rules', () => {
    cy.get(modal).should('not.be.visible');
    cy.get(overlay).should('not.be.visible');
    cy.get(rulesButton).click();
    cy.get(modal).should('be.visible');
    cy.get(overlay).should('have.class', 'visible');
    // Click outside modal
    cy.get(overlay).click(-20, -20, { force: true });
    cy.get(modal).should('not.be.visible');
    cy.get(overlay).should('not.be.visible');
  });
});
