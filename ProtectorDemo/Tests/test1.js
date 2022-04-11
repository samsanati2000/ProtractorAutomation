describe('freelancer website automation', function() {

    it('landing page', function() {
      browser.manage().window().maximize();

      browser.waitForAngularEnabled(false);

      browser.get('https://www.tommybahama.com/');

      browser.sleep(3000)
      browser.wait(EC.titleContains('Men'), 5000);
      element(by.partialLinkText('Men')).click();
      browser.sleep(3000);
      element(by.className('New Arrivals')).click();

      browser.sleep(3000)




      
     
      
      
      




          


    
    });

});