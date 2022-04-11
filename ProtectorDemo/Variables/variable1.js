let variable1 = function(){

 let SignUpLink    = element(by.id('signup'));
 let SignUpName    = element(by.id('signup_name'));
 let EmailAddress  = element(by.id('signup_email'));
 let PassField = element(by.id('signup_password'));
 let CreatAcccountButton= element(by.className('_24a1e9c7 dab9924c br2 pv2 ph3 fw5 f5 tc button button-reset pointer ma2 truncate ml0 no-underline e64d5a00 w-100'));
    
this.get =function(url){
    browser.get(url);
}
 this.SignUpLink = function(){
        SignUpLink.click();
 };


 this.SignUpName = function(Name){
   SignUpName.sendKeys(Name);
 };

  this.EmailAddress =function(eMail){
      EmailAddress.sendKeys(eMail);
  };

  this.PassField = function(){
      PassField.sendKeys('Schirin@1993');
  };

  this.CreatAcccountButton = function(){
      CreatAcccountButton.click();

    
  }
};

module.exports = new variable1();