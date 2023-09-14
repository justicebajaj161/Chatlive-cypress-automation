const url =`http://localhost:3000`
describe('App Tests', () => {
  const url =`http://localhost:3000`
  describe('Router Tests', () => {
      

    it('should redirect to login when not authenticated', () => {
      // Assuming user is not authenticated
      cy.visit(`${url}/login`);
      cy.get('input[type="email"]').type('codingninjasuser1@codingninjas.com'); // Assuming this user is already registered
          cy.get('input[type="password"]').type('codingninjasuser1');
          cy.get('button').contains(/sign in/i).click();
          cy.wait(3000)
          cy.contains(/logout/i).click()
          cy.wait(3000)
      cy.visit(`${url}`);
      cy.url().should('include', '/login'); // Adjust to match the expected URL
    });
    
    it('should navigate to home when authenticated', () => {
      cy.visit(`${url}/login`);
      cy.get('input[type="email"]').type('codingninjasuser1@codingninjas.com'); // Assuming this user is already registered
          cy.get('input[type="password"]').type('codingninjasuser1');
         cy.get('button').contains(/sign in/i).click();
         cy.wait(5000); // Wait for possible redirects or actions after login
          cy.url().should('eq', 'http://localhost:3000/');
      // Assuming user is authenticated
      cy.visit(`${url}`);
      cy.url().should('include', '/'); // Adjust to match the expected URL
    });

  

    it('should navigate to login page', () => {
      cy.visit(`${url}/login`);
      cy.url().should('include', 'http://localhost:3000/login'); // Adjust to match the expected URL
    });

    it('should navigate to register page', () => {
      cy.visit(`${url}/register`);
      cy.url().should('include', 'http://localhost:3000/register'); // Adjust to match the expected URL
    });

    // ... Other router tests
  });
  describe('Registration Tests', () => {
    it('should render the registration page correctly', () => {
            cy.visit(`${url}/register`);
      cy.contains('Register'); // Adjust based on the exact text in your Register page
    });
    

    it('should contain input type of name as text', () => {
      cy.visit(`${url}/register`);
cy.contains('Register'); // Adjust based on the exact text in your Register page
cy.get('input[type="text"]').should('be.visible')
});

it('should contain input type of email as email in /register', () => {
  cy.visit(`${url}/register`);
cy.contains('Register'); // Adjust based on the exact text in your Register page
cy.get('input[type="email"]').should('be.visible')
});
it('should contain input type of password as password', () => {
  cy.visit(`${url}/register`);
cy.contains('Register'); // Adjust based on the exact text in your Register page
cy.get('input[type="password"]').should('be.visible')
});
it('should contain input type of file as file', () => {
  cy.visit(`${url}/register`);
cy.contains('Register'); // Adjust based on the exact text in your Register page
cy.get('input[type="file"]').should('exist')
});



    it('should register with valid details', () => {
   
      cy.visit(`${url}/register`);
      cy.wait(5000);
      // Using a unique email to ensure uniqueness during testing.
      const uniqueEmail = `test${Date.now()}@example.com`;
  
      cy.get('input[type="text"]').type('John Doe');
    
      cy.get('input[type="email"]').type(uniqueEmail);
      cy.get('input[type="password"]').type('password123');
      cy.get('input[type="file"]').attachFile('1038746.png');
      cy.get('button').contains(/Sign up/i).click();
      cy.wait(8000);
      cy.url().should('eq', 'http://localhost:3000/');
      cy.wait(3000)
      cy.contains(/logout/i).should('be.visible')
    });

    it('should not register with invalid details', () => {
      cy.visit(`${url}/register`);
      cy.wait(5000);
      cy.get('input[type="text"]').type('testUser');
      cy.get('input[type="email"]').type('invalidEmail@invalid.com');
      cy.get('input[type="password"]').type('1233456678778685');
      cy.get('input[type="file"]').attachFile('1038746.png');
      cy.get('button').contains(/Sign up/i).click();

      cy.url().should('eq', 'http://localhost:3000/register')
    });
  });




     describe('login page testing',()=>{
      it('should contain input type of email as email in /login', () => {
        cy.visit(`${url}/login`);
      cy.contains(/login/i); // Adjust based on the exact text in your Register page
      cy.get('input[type="email"]').should('be.visible')
      });   
    
      it('should contain input type of password as password in /login', () => {
        cy.visit(`${url}/login`);
        cy.contains(/login/i);  // Adjust based on the exact text in your Register page
      cy.get('input[type="password"]').should('be.visible')
      }); 
      it('should not login with correct details',()=>{
        cy.visit(`${url}/login`);
        cy.get('input[type="email"]').type('jewpjdiewdjwejiwjowi@codingninjas.com'); // Assuming this user is already registered
            cy.get('input[type="password"]').type('epkwdwpe');
           cy.get('button').contains(/Sign in/i).click();
           cy.wait(5000); // Wait for possible redirects or actions after login
            cy.url().should('eq', 'http://localhost:3000/login');
      })  
    
      it('should login wigh correct details',()=>{
        cy.visit(`${url}/login`);
        cy.get('input[type="email"]').type('codingninjasuser1@codingninjas.com'); // Assuming this user is already registered
        cy.get('input[type="password"]').type('codingninjasuser1');
           cy.get('button').contains(/Sign in/i).click();
           cy.wait(5000); // Wait for possible redirects or actions after login
            cy.url().should('eq', 'http://localhost:3000/');
      })
      it('should navigate to the register page when the register link is clicked', () => {
        cy.visit(`${url}/login`);
        cy.contains(/Register/i).click();
        cy.url().should('eq', `${url}/register`);
      });
      
    })
  // Test cases for navbar
  describe('Navbar Tests', () => {
    beforeEach(() => {
      // Assuming you have a login endpoint and the user is logged in
      cy.visit(`${url}/login`);
      cy.get('input[type="email"]').type('codingninjasuser1@codingninjas.com'); // Assuming this user is already registered
      cy.get('input[type="password"]').type('codingninjasuser1');
      cy.get('button').contains(/Sign in/i).click();
    });

    it('should render the navbar correctly for authenticated users', () => {
      cy.get('.navbar').should('exist');
      cy.get('.user').should('exist');
      cy.get('.logo').contains('Time Pass').should('be.visible');
    });
  
    it('should logout correctly', () => {
      cy.get('.user button').contains('logout').click();
      cy.url().should('eq', `${url}/login`);
    });
    
    // ... Other Navbar tests
  });

 
 
});



describe('Chat Component', () => {
  it('should display user display name', () => {
    cy.visit(`${url}/login`);
    cy.get('input[type="email"]').type('codingninjasuser1@codingninjas.com'); // Assuming this user is already registered
    cy.get('input[type="password"]').type('codingninjasuser1');
    cy.get('button').contains(/sign in/i).click();
    cy.wait(3000)
    cy.get('.user span').should('contain.text', 'Coding Ninja User1'); // replace with the actual display name
    // cy.get('.chatInfo span').should('contain.text', 'Coding Ninja User1'); // replace with the actual display name
  });
  
 
});

describe('Chats Component', () => {
  beforeEach(() => {
    cy.visit(`${url}/login`);
    cy.get('input[type="email"]').type('codingninjasuser1@codingninjas.com'); // Assuming this user is already registered
    cy.get('input[type="password"]').type('codingninjasuser1');
    cy.get('button').contains(/sign in/i).click();
  });

  
  
  it('should be able to search and find a user', () => {
    cy.get('.searchForm input[type="text"]')
      .type('Coding Ninja User2')
      .type('{enter}');
    cy.get('.userChat span').should('contain.text', 'Coding Ninja User2');
  });

  it('should be able to select a chat', () => {
    cy.get('.userChat').contains('Coding Ninja User2').click().click()
  
  });

  it('should send a message and verify it is sent', () => {
    cy.get('.searchForm input[type="text"]')
    .type('Coding Ninja User2')
    .type('{enter}');
    cy.get('.userChat').contains('Coding Ninja User2').click().click()
 
    const uniquetext = `text${Date.now()}@example`;
    cy.get('.input input[type="text"]').type(uniquetext);
    cy.get('.send button').click();
    cy.wait(4000)
    cy.contains(/logout/i).click()
    cy.visit(`${url}/login`);
    cy.get('input[type="email"]').type('codingninjasuser2@codingninjas.com'); // Assuming this user is already registered
    cy.get('input[type="password"]').type('codingninjasuser2');
    cy.get('button').contains(/sign in/i).click();
    cy.wait(3000)
    cy.get('.user').contains('Coding Ninja User2')
    cy.get('.userChat').contains('Coding Ninja User1').click().click()
    cy.wait(8000)
    cy.contains(uniquetext).should('be.visible')
  });


  it('should send a image and verify it is sent', () => {
    cy.get('.searchForm input[type="text"]')
    .type('Coding Ninja User2')
    .type('{enter}');
    cy.get('.userChat').contains('Coding Ninja User2').click().click()
 
    cy.get('input[type="file"]').attachFile('1038746.png');
    cy.wait(5000)
    cy.get('.send button').click();
    cy.wait(12000)
    cy.contains(/logout/i).click()
    cy.visit(`${url}/login`);
    cy.get('input[type="email"]').type('codingninjasuser2@codingninjas.com'); // Assuming this user is already registered
    cy.get('input[type="password"]').type('codingninjasuser2');
    cy.get('button').contains(/sign in/i).click();
    cy.wait(3000)
    
    cy.get('.userChat').contains('Coding Ninja User1').click().click()
    cy.wait(12000)
    cy.get('.messageContent img') // Adjust the selector to target the correct element in your application
    .should('be.visible') // Asserts that the image is visible
    .and(($img) => {
      // Asserts that the image's src attribute is not empty
      expect($img[0].src).to.not.be.empty;
    });
    
  });

  it('should display list of chats', () => {
    cy.get('.chats .userChat').should('have.length.greaterThan', 0);
  });
  
  it('should display the name of the user in the chatinfo ', () => {
    cy.get('.searchForm input[type="text"]')
    .type('Coding Ninja User2')
    .type('{enter}');
    cy.get('.userChat').contains('Coding Ninja User2').click().click()
    cy.get('.chatInfo span').contains(/Coding Ninja User2/i)
  });

});
