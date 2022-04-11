describe('Mouse Overe', function() {
    it('Mouse move function', function() {
        browser.manage().window().maximize();
        browser.waitForAngularEnabled(false);
        browser.manage().timeouts().implicitlyWait(3000);
  
      browser.get('https://www.npmjs.com/');
      browser.sleep(3000)
      

      browser.actions().mouseMove(element(by.id('nav-products-link'))).perform();
      browser.sleep(3000)
      browser.actions().mouseMove(element(by.id('nav-pro-link'))).click().perform();
      browser.sleep(3000)

       



    });

});

