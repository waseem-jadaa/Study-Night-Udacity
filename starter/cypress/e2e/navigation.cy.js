describe('Navigation Tests', () => {
  beforeEach(() => {
    cy.visit('http://localhost:1234'); 
  });

  it('should navigate to the Card Sets page when clicking "Card Set"', () => {
    cy.get('[data-cy="card-set-link"]').click({ force: true }); 
    cy.get('[data-cy="card-set-page"]').should('be.visible'); 
  });

  it('should navigate to the About page when clicking "About"', () => {
    cy.get('[data-cy="about-link"]').click({ force: true });
    cy.get('[data-cy="about-page-title"]').should('be.visible'); 
  });

  it('should navigate to the Home page when clicking "Home"', () => {
    cy.get('[data-cy="home-link"]').click({ force: true });

    cy.get('[data-cy="home-page-container"]').should('be.visible');
  });
});