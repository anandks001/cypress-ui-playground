
describe('UI test automation playground', () => {

  beforeEach(() => {
    cy.visit('/');
  });

  it('opens a home page', () => {
    cy.get('a.navbar-brand')
      .should('be.visible')
      .and('have.attr', 'href', '/')
      .contains('UITAP');

    cy.get('#navbarSupportedContent')
      .should('be.visible')
      .within(() => {
        cy.get('ul li')
          .should('have.length', 2)
          .first()
          .and('have.class', 'active')
          .find('a')
          .should('have.attr', 'href', '/home')
          .contains('Home');

        cy.get('ul li')
          .last()
          .and('not.have.class', 'active')
          .find('a')
          .should('have.attr', 'href', '/resources')
          .contains('Resources');
      });

      cy.get('#description')
      .should('be.visible')
      .within(() => {
        cy.get('#title').should('have.text', 'UI Test AutomationPlayground');
        cy.get('#citation').should('be.visible');
      });

      cy.get('.img-fluid')
        .should('be.visible')
        .and('have.attr', 'src', '/static/cube.png')
        .and('have.attr', 'alt', 'Responsive image');
  });

  it.only('has overview section', () => {
    cy.get('#overview').should('be.visible')
      .within(() => {
        cy.get('.container')
          .children()
          .should('have.length', 5)
          .each(($el) => {
            cy.wrap($el).should('be.visible')
            .children()
            .should('have.length', 4)
            .each(($el) => {
              cy.wrap($el).find('a').should('be.visible')
                .and('have.attr', 'href')
            })
          });
      });
  });
});

