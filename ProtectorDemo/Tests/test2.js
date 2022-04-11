let variable1 = require('../Variables/variable1');

describe('angularjs homepage', function() {

    
  it('Signup user', function() {
    browser.manage().window().maximize();
    browser.waitForAngularEnabled(false);
    browser.manage().timeouts().implicitlyWait(3000);


    //all class variables

    var eMail ='samuel.samati@yahoo.ca'
    var Name = 'Samuel'
    var url = 'https://www.npmjs.com'
    
    
    variable1.get(url);
    browser.sleep(3000);
       
    variable1.SignUpLink();
    browser.sleep(3000);

    variable1.SignUpName(Name);
    
    variable1.EmailAddress(eMail);
    browser.sleep(3000);

    variable1.PassField('Schirin@1993'); 
    browser.sleep(3000);

    element(by.name('eula-agreement')).click();
    browser.sleep(3000);
    
    variable1.CreatAcccountButton
    browser.sleep(3000);

    
       
  });
});
