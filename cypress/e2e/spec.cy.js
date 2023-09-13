describe('App Tests', () => {
  const url =`http://localhost:3000`
  describe('Router Tests', () => {
      

    it('should redirect to login when not authenticated', () => {
      // Assuming user is not authenticated
      cy.visit(`${url}`);
      cy.url().should('include', '/login'); // Adjust to match the expected URL
    });
    
    it('should navigate to home when authenticated', () => {
      cy.visit(`${url}/login`);
      cy.get('input[type="email"]').type('codingninjasuser1@codingninjas.com'); // Assuming this user is already registered
          cy.get('input[type="password"]').type('codingninjasuser1');
         cy.get('button').contains(/LOGIN/).click();
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
      cy.visit('/register');
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

it('should contain input type of email as email', () => {
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
cy.get('input[type="file"]').should('be.visible')
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
      cy.get('button').contains(/Submit/i).click();
      cy.wait(8000);
      cy.url().should('eq', 'http://localhost:3000/login');
      cy.contains('Logout'); 
    });

    it('should not register with invalid details', () => {
      cy.visit(`${url}/register`);
      cy.get('input[name="username"]').type('testUser');
      cy.get('input[name="email"]').type('invalidEmail');
      cy.get('input[name="password"]').type('1233456678778685');
      y.get('input[type="file"]').attachFile('1038746.png');
      cy.get('button[type="submit"]').click();
      cy.contains(/Something went wrong/i); // Adjust based on the exact error message displayed in your app
    });
  });




     describe('login page testing',()=>{
      it('should contain input type of email as email', () => {
        cy.visit(`${url}/login`);
      cy.contains('login'); // Adjust based on the exact text in your Register page
      cy.get('input[type="email"]').should('be.visible')
      });   
    
      it('should contain input type of password as password', () => {
        cy.visit(`${url}/login`);
      cy.contains('login'); // Adjust based on the exact text in your Register page
      cy.get('input[type="password"]').should('be.visible')
      }); 
      it('should not login with correct details',()=>{
        cy.visit(`${url}/login`);
        cy.get('input[type="email"]').type('jewpjdiewdjwejiwjowi@codingninjas.com'); // Assuming this user is already registered
            cy.get('input[type="password"]').type('epkwdwpe');
           cy.get('button').contains(/LOGIN/).click();
           cy.wait(5000); // Wait for possible redirects or actions after login
            cy.url().should('eq', 'http://localhost:3000/login');
      })  
    
      it('should login wigh correct details',()=>{
        cy.visit(`${url}/login`);
        cy.get('input[type="email"]').type('codingninjasuser1@codingninjas.com'); // Assuming this user is already registered
        cy.get('input[type="password"]').type('codingninjasuser1');
           cy.get('button').contains(/LOGIN/).click();
           cy.wait(5000); // Wait for possible redirects or actions after login
            cy.url().should('eq', 'http://localhost:3000/');
      })
      it('should navigate to the register page when the register link is clicked', () => {
        cy.contains('Register').click();
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
      cy.get('button[type="submit"]').click();
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
    cy.visit('/path-to-your-chat-component'); // replace with the actual path
    cy.login('codingninjasuser1@codingninjas.com', 'codingninjasuser1'); // Assuming you have a login command
    cy.get('.chatInfo span').should('contain.text', 'User Display Name'); // replace with the actual display name
  });
  
  it('should display the chat icons', () => {
    cy.get('.chatIcons img').should('have.length', 3);
  });
});


describe('Chats Component', () => {
  beforeEach(() => {
    cy.visit('/path-to-your-chats-component'); // replace with the actual path
    cy.login('codingninjasuser1@codingninjas.com', 'codingninjasuser1'); // Assuming you have a login command
  });

  it('should display list of chats', () => {
    cy.get('.chats .userChat').should('have.length.greaterThan', 0);
  });
  
  it('should be able to select a chat', () => {
    cy.get('.chats .userChat').first().click();
    // verify something changes when a chat is selected
  });
});


describe('Input Component', () => {
  beforeEach(() => {
    cy.visit('/path-to-your-input-component'); // replace with the actual path
    cy.login('codingninjasuser1@codingninjas.com', 'codingninjasuser1'); // Assuming you have a login command
  });

  it('should send a text message', () => {
    cy.get('.input input[type="text"]').type('Test message');
    cy.get('.send button').click();
    // Verify the message was sent, e.g., check the database or the UI
  });

  it('should send an image message', () => {
    cy.get('.send input[type="file"]').attachFile('path/to/your/image.jpg'); // replace with the actual path to your image
    cy.get('.send button').click();
    // Verify the message was sent, e.g., check the database or the UI
  });
});




describe('Message Component', () => {
  beforeEach(() => {
    cy.visit('/path-to-your-message-component'); // replace with the actual path
    cy.login('codingninjasuser1@codingninjas.com', 'codingninjasuser1'); // Assuming you have a login command
  });

  it('should display the message with the correct styling', () => {
    // Assuming there's a message already - verify it displays correctly
    cy.get('.message').should('exist');
    cy.get('.message.owner').should('exist');
    cy.get('.messageInfo img').should('exist');
  });
});



describe('Messages Component', () => {
  beforeEach(() => {
    cy.visit('/path-to-your-messages-component'); // replace with the actual path
    cy.login('codingninjasuser1@codingninjas.com', 'codingninjasuser1'); // Assuming you have a login command
  });

  it('should display a list of messages', () => {
    cy.get('.messages .message').should('have.length.greaterThan', 0);
  });
});

describe('Search Component', () => {
  beforeEach(() => {
    cy.visit('/path-to-your-search-component'); // replace with the actual path
    cy.login('codingninjasuser1@codingninjas.com', 'codingninjasuser1'); // Assuming you have a login command
  });

  it('should be able to search and find a user', () => {
    cy.get('.searchForm input').type('user2'); // replace with a username that exists
    cy.get('.searchForm input').type('{enter}');
    cy.get('.userChat').should('exist');
  });

  it('should display error message when no user found', () => {
    cy.get('.searchForm input').type('nonexistinguser');
    cy.get('.searchForm input').type('{enter}');
    cy.get('.search span').should('contain.text', 'User not found!');
  });
});
