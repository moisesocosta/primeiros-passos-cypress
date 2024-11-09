const Chance = require('chance')

const chance = new Chance()

class myInfoPage{
  selectorList(){
    const selectors={
      firstNameField: "[placeholder='First Name']",
      lastNameField: "[placeholder='Last Name']",
      genericField: ".oxd-input--active",
      dateField: "[placeholder='yyyy-dd-mm']",
      dateCloseButton: ".--close",
      submitButton: "[type='submit']",
      genericCombobox: '.oxd-select-wrapper'
    }

    return selectors
  }

  nameData(){
    cy.get(this.selectorList().fristNameField).clear().type(chance.first())
    cy.get(this.selectorList().lastNameField).clear().type(chance.last())
  }

  idData(){
    cy.get(this.selectorList().genericField).eq(3).clear().type(chance.string({length:5, numeric:true}))
    cy.get(this.selectorList().genericField).eq(4).clear().type(chance.string({length:5, numeric:true}))
    cy.get(this.selectorList().genericField).eq(5).clear().type(chance.string({length:11, numeric:true}))
    cy.get(this.selectorList().genericField).eq(6).clear().type('2014-10-17')
    cy.get(this.selectorList().dateCloseButton).click()
  }

  statusData(){
    cy.get(this.selectorList().genericCombobox).eq(0).click()
    cy.get('.oxd-select-dropdown > :nth-child(1)').click()
    cy.get(this.selectorList().genericCombobox).eq(1).click()
    cy.get('.oxd-select-dropdown > :nth-child(3)').click()
  }

  checkSubmitButton(){
    cy.get(this.selectorList().submitButton).eq(0).click({force:true})
    cy.get('body').should('contain', 'Successfully Updated')
    cy.get('.oxd-toast-close')
  }
}

export default myInfoPage