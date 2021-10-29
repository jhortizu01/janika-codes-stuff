describe('Web page user flows', () => {
  beforeEach (() => {
      cy.visit('http://localhost:3000')
  })

  it('Should have a banner that says Janika Codes Stuff, and icons for github, linked in, email as well as projects and about me', () => {
    cy.get('nav').children().should('have.length', 4)
  })

  it('Should take you to the about me page when you click about me and take you back to the main page when you click go back', () => {
    cy.get('.about-nav')
      .click()
      .url().should('include', '/aboutme')
      .get('.arrow')
      .click()
      .url().should('include', '/')
  })

  it('Should take you to the projects page when you click projects, show you 5 projects, and should be able to take you back to the main page', () => {
    cy.intercept('GET', 'https://janika-project-data.herokuapp.com/api/v1/projects', {fixture: 'projects' })
      .get('.projects-nav')
      .click()
      .get('.project-cards')
      .children()
      .should('have.length', 8)
      .get('.back-arrow')
      .click()
      .url().should('include', '/')
  })
})