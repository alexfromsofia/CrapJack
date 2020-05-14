import { mainButton, dealerContainer, card, playerContainer } from './elements';

describe('Game Button', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('Should start game', () => {
    cy.get(mainButton)
      .click()
      .should(($btn) => {
        expect($btn).to.have.class('reveal');
        expect($btn).to.have.text('Reveal Cards');
      });

    cy.get('.game__player--score').should(($score) => {
      expect($score).to.have.length(2);
      expect($score).to.have.class('hidden');
    });

    // TODO: Find a better way to handle delayed render of cards
    cy.wait(0);

    // Dealer's cards should be 3 and not flipped
    cy.get(`${dealerContainer} ${card}`).should(($card) => {
      expect($card).to.have.length(3);
      expect($card).not.to.have.class('is-flipped');
    });

    // Player's cards should be 3 and flipped
    cy.get(`${playerContainer} ${card}`).should(($card) => {
      expect($card).to.have.length(3);
      expect($card).to.have.class('is-flipped');
    });

    describe('Reveal button click', () => {
      cy.get(mainButton)
        .click()
        .should(($btn) => {
          expect($btn).not.to.have.class('reveal');
          expect($btn).to.have.text('New game');
        });

      // Dealer's cards should be 3 and flipped
      cy.get(`${dealerContainer} ${card}`).should(($card) => {
        expect($card).to.have.length(3);
        expect($card).to.have.class('is-flipped');
      });

      // Player's cards should be 3 and flipped
      cy.get(`${playerContainer} ${card}`).should(($card) => {
        expect($card).to.have.length(3);
        expect($card).to.have.class('is-flipped');
      });

      cy.get('.game__player--score').should(($score) => {
        expect($score).to.have.length(2);
        expect($score).not.to.have.class('hidden');
      });
    });
  });
});
