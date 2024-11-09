class DashBoardPage{
  selectorList(){
    const selectors={
      dashboardGrid: ".orangehrm-dashboard-grid",
    }
    
    return selectors
  }

  checkDashBoardPage(){
    cy.location('pathname').should('equal','/web/index.php/dashboard/index')
    cy.get(this.selectorList().dashboardGrid)
  }
}

export default DashBoardPage