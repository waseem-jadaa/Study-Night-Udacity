describe('Form Tests (Create Set & Add Card)', () => {
    beforeEach(() => {
       cy.visit('http://localhost:1234'); 
       cy.get('[data-cy="card-set-link"]').click({ force: true }); 
       cy.get('[data-cy="card-set-page"]').should('be.visible');
    });

    it('should successfully create a new card set (Happy Path)', () => {
        cy.get('[data-cy="toggle-create-set-form"]').click();

        cy.get('[data-cy="create-set-title-input"]').type('Test Set Title');
        cy.get('[data-cy="create-set-submit-btn"]').click();

        cy.get('[data-cy="set-list"]').should('contain', 'Test Set Title');
    });

    it('should show an error when submitting the Create Set form with an empty title (Unhappy Path)', () => {
        cy.get('[data-cy="toggle-create-set-form"]').click();

        cy.get('[data-cy="create-set-title-input"]').clear();
        cy.get('[data-cy="create-set-submit-btn"]').click();

        cy.get('[data-cy="create-set-error-message"]')
          .should('be.visible')
          .and('contain', 'TITLE CANNOT BE EMPTY');
    });

    it('should successfully add a new card to a set (Happy Path)', () => {
        cy.get('[data-cy="first-card-set"]').click({ force: true }); 
        
        cy.get('[data-cy="toggle-add-card-form"]').click();

        cy.get('[data-cy="card-term-input"]').type('Cypress Term');
        cy.get('[data-cy="card-definition-input"]').type('Cypress Definition');
        cy.get('[data-cy="add-card-submit-btn"]').click();
        
        cy.wait(100); 

        cy.get('[data-cy="flashcard-term"]').should('contain', 'Cypress Term');
    });

    it('should show an error when submitting the Add Card form with an empty term (Unhappy Path)', () => {
        cy.get('[data-cy="first-card-set"]').click({ force: true }); 
        cy.get('[data-cy="toggle-add-card-form"]').click();

        cy.get('[data-cy="card-term-input"]').clear();
        cy.get('[data-cy="card-definition-input"]').type('Some definition');
        cy.get('[data-cy="add-card-submit-btn"]').click();

        cy.get('[data-cy="create-set-error-message"]') 
          .should('be.visible')
          .and('contain', 'TERM CANNOT BE EMPTY'); 
    });
});