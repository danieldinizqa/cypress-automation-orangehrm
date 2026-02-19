describe('OrangeHRM - Testes de Login', () => {
  
  beforeEach(() => {
    // Visita a página de login antes de cada teste
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
  })

  it('Deve realizar login com sucesso', () => {
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin')
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
    cy.get('.oxd-button').click()

    // Validação: Verificar se entrou no Dashboard
    cy.url().should('include', '/dashboard/index')
    cy.get('.oxd-topbar-header-title').should('contain', 'Dashboard')
  })

  it('Deve exibir mensagem de erro com credenciais inválidas', () => {
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('UsuarioErrado')
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('senha123')
    cy.get('.oxd-button').click()

    // Validação: Verificar se a mensagem de alerta apareceu
    cy.get('.oxd-alert').should('be.visible')
    cy.get('.oxd-alert').should('contain', 'Invalid credentials')
  })
})