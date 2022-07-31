/// <reference types= "cypress" />

import { faker } from '@faker-js/faker';


describe('Register', () => {

    it('Registration Scenario-(a)', () => {
    cy.visit("https://www.deinbett.de/")
   
    cy.wait(5000)
    cy.contains('.button','Alle auswählen & bestätigen').click()

    //cy.get('body').rightclick(50, 50, { force: true })
   
    ///// Registeration
    cy.get('.headerBrand__rightPanel')
    .eq(0)
    .find('[href="/login"]').click()

    cy.get('#registerAccount').click()

    //Registeration page
    cy.contains('h1.accountNew__headline', 'Neu registrieren');
    
    //Random name generator
    let FName = faker.random.word()
    let LName = faker.random.word()
    cy.get('#firstName').type(FName)
    cy.get('#lastName').type(LName)
   
    //Random email generator
    
   /* function randomEmail() {
        
        let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz012';
        let charactersLength = characters.length;
        let randomEmailID = ""
        for ( var i = 0; i < length; i++ ) {
           email += characters.charAt(Math.floor(Math.random() * charactersLength));
           randomEmailID = email +"@gmail.com"
        }
        return randomEmailID;
     } */

     let randomEmail = faker.random.word()
     let randomEmailId = randomEmail+"@gmail.com"
/*
     cy.get('[for="email"]')
     .parent()
     .parent()
     .contains('E-Mail-Adresse*', {force: true})
     .type(randomEmailId)
*/
     cy.get('#container_email')
     .contains('E-Mail-Adresse*', {force: true})
     .siblings('[class="formInput__inputContainer formInput__inputContainer--text"]')
     .type(randomEmailId)
     
     let a = faker.random.alphaNumeric(4, { casing: 'upper'}) 
     let b = faker.random.alphaNumeric(5, { casing: 'lower'}) 

     let password = a+b+"$"
     
     cy.get('#password').type(password)
     cy.get('#password2').type(password)

     cy.get('span[class="checkbox__checkbox checkbox__checkbox--alignTop"]')
     .click({ multiple: true })
     
     cy.get('#register-submit').click()

     cy.wait(1000)
    // Assertion to tell if user is registered
    // cy.get('.headerElement__suffix').eq(0).should() "have.text", "Dien konto" )
   //Login with new user
  
  /* cy.get('.headerBrand__rightPanel')
    .eq(0)
    .find('[href="/login"]').click()
   
   cy.contains('Sign out').click
   cy.get('#loginEmail').type(randomEmailId)
   cy.get('#loginPassword').type(password)
   cy.get('#login-submit').click()

   //Forgot Password flow
   //cy.contains('Forgot Password?').click()
   //cy.get('#passwordForgottenEmail').type(randomEmailId)
   //cy.get('#passwordForgottenSubmitId').click()
    */
    // }
     //)
})
})    

it.only('Shopping Scenario-(3-a)', () => {
   cy.visit("https://www.deinbett.de/")
  
   cy.wait(5000)
   cy.contains('.button','Alle auswählen & bestätigen').click()
  
   ///// Login
   cy.get('.headerBrand__rightPanel')
   .eq(0)
   .find('[href="/login"]').click()
    
   cy.get('#loginEmail').type("gshehzadi64@gmail.com")
   cy.get('#loginPassword').type("Bigbang123!@#")
   cy.get('#login-submit').click()

    
   cy.contains('Matratzen').click({force: true})
   cy.contains('Matratzen nach Art').click({force: true})
  
   cy.contains('Kaltschaummatratzen').click({force: true})
   cy.wait(2000)

  cy.get('#filterProducts').find('div').find('div', '.articleTile').then(Products => {
     
  // for (i= 0; i<=5; i++) {
      
   //Get the attribute
     cy.wrap(Products)
    .eq(0)
    .invoke('attr', 'data-article-number')
    .should('eq', '11146545')

    //click on wishlist
    cy.xpath('//div[@id="filterProducts"]//div[@data-wish-list-entry-number]')
    .invoke('attr', 'data-wish-list-entry-number')
    .should('eq', '11146545')
    .click()
    

  // }
      
     // cy.log(a)

   })

/*
 var myMap = new Map();
      // setting the values
      myMap.set("1", 'value1');
      myMap.set("2", 'value2');
      myMap.set("3", 'value3');     

      //console.log(`Map size: ${myMap.size}`); // 3

      // getting the values
      //console.log(`Key: "1", Value: ${myMap.get("1")}`);

      //Get the price
      Products
      .Cy.xpath('div[@class="articleTile__prices"]').
      find('font')
      .eq(2)
      //div[@id="filterProducts"]//div[@data-wish-list-entry-number]

      

      */

   

 

   
})