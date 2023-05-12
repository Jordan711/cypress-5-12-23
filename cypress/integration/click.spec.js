describe('Test Personal Website', () => {
  before(() => {
    cy.visit('https://jordanfeng.me');
  });

  it('should be able to toggle visibility of sections', () => {
    cy.get('#about-toggle').click();
    cy.get('#about').should('be.visible');

    cy.get('#education-toggle').click();
    cy.get('#education').should('be.visible');

    cy.get('#work-experience-toggle').click();
    cy.get('#work-experience').should('be.visible');

    cy.get('#school-projects-toggle').click();
    cy.get('#school-projects').should('be.visible');

    cy.get('#side-projects-toggle').click();
    cy.get('#side-projects').should('be.visible');


    cy.get('#about-toggle').click();
    cy.get('#about').should('not.be.visible');

    cy.get('#education-toggle').click();
    cy.get('#education').should('not.be.visible');

    cy.get('#work-experience-toggle').click();
    cy.get('#work-experience').should('not.be.visible');

    cy.get('#school-projects-toggle').click();
    cy.get('#school-projects').should('not.be.visible');

    cy.get('#side-projects-toggle').click();
    cy.get('#side-projects').should('not.be.visible');

    cy.get('#about-toggle').click();
    cy.get('#about').should('be.visible');

    cy.get('#education-toggle').click();
    cy.get('#education').should('be.visible');

    cy.get('#work-experience-toggle').click();
    cy.get('#work-experience').should('be.visible');

    cy.get('#school-projects-toggle').click();
    cy.get('#school-projects').should('be.visible');

    cy.get('#side-projects-toggle').click();
    cy.get('#side-projects').should('be.visible');


    cy.get('#about-toggle').click();
    cy.get('#about').should('not.be.visible');

    cy.get('#education-toggle').click();
    cy.get('#education').should('not.be.visible');

    cy.get('#work-experience-toggle').click();
    cy.get('#work-experience').should('not.be.visible');

    cy.get('#school-projects-toggle').click();
    cy.get('#school-projects').should('not.be.visible');

    cy.get('#side-projects-toggle').click();
    cy.get('#side-projects').should('not.be.visible');


    cy.get('#about-toggle').click();
    cy.get('#about').should('be.visible');

    cy.get('#education-toggle').click();
    cy.get('#education').should('be.visible');

    cy.get('#work-experience-toggle').click();
    cy.get('#work-experience').should('be.visible');

    cy.get('#school-projects-toggle').click();
    cy.get('#school-projects').should('be.visible');

    cy.get('#side-projects-toggle').click();
    cy.get('#side-projects').should('be.visible');


    cy.get('#about-toggle').click();
    cy.get('#about').should('not.be.visible');

    cy.get('#education-toggle').click();
    cy.get('#education').should('not.be.visible');

    cy.get('#work-experience-toggle').click();
    cy.get('#work-experience').should('not.be.visible');

    cy.get('#school-projects-toggle').click();
    cy.get('#school-projects').should('not.be.visible');

    cy.get('#side-projects-toggle').click();
    cy.get('#side-projects').should('not.be.visible');

  });
});