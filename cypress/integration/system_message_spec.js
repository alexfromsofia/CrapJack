describe('System Messages', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('Should have a welcome message', () => {
    cy.get('.system-message').should('have.text', 'Welcome to Crap Jack!');
  });

  it('Should change based on app state', () => {
    // When we first click New Game
    cy.get('.button__main').click();
    cy.get('.system-message').should('have.text', 'Dealing cards...');

    // When we first click Reaveal Cards
    cy.get('.button__main').click();
    cy.get('.system-message').should('have.text', 'And the winner is...');

    // When we click New Game for a second time
    cy.get('.button__main').click();
    cy.get('.system-message').should('have.text', 'Dealing cards...');
  });
});
