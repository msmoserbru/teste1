Feature('login')

Scenario('loginRelatorioLocacao', ({ I }) => {
  I.amOnPage('/'),
    I.click('//*[@id="email"]'),
    I.fillField('//input[@id="email"]', 'email'),
    I.click('//*[@id="senha"]'),
    I.fillField('//input[@id="senha"]', 'senha'),
    I.seeElement('//form/div[3]/button'),
    I.click('//form/div[3]/button'),
    I.waitForElement('//*[@id="app"]//div/aside[1]/section//div[1]/a/img'),
    //I.see(' Boa tarde, Francisco/Fernando '),
    I.click('//*[@id="app"]//div/aside[1]/section/ul/li[13]/a'),
    I.click('//*[@id="app"]//div/aside[1]/section/ul/li[13]/ul/li[6]/a'),
    I.click('//*[@id="app"]//div/aside[2]/div/section[2]//div[1]/a'),
    I.click(
      '//*[@id="app"]//div/aside[2]/div/section[2]//div/div/form/div[2]/button[1]'
    ),
    I.switchToNextTab(),
    I.click('//*[@id="dv"]/caption/button'),
    I.wait('5'),
    console.log('executou o teste')
})

Scenario('loginFinanceiroExtrato', ({ I }) => {
  I.amOnPage('/'),
    I.click('//*[@id="email"]'),
    I.fillField('//input[@id="email"]', 'email'),
    I.click('//*[@id="senha"]'),
    I.fillField('//input[@id="senha"]', 'senha'),
    I.seeElement('//form/div[3]/button'),
    I.click('//form/div[3]/button'),
    I.waitForElement('//*[@id="app"]//div/aside[1]/section//div[1]/a/img'),
    //I.see(' Boa tarde, Francisco/Fernando '),
    I.click('//*[@id="app"]//div/aside[1]/section/ul/li[13]/a'),
    I.click('//*[@id="app"]//div/aside[1]/section/ul/li[13]/ul/li[5]/a'),
    I.click('//*[@id="app"]//div/aside[2]/div/section[2]/div/div[1]'),
    I.checkOption('//*[@id="__BVID__245"]'),
    I.seeCheckboxIsChecked('//*[@id="__BVID__245"]'),
    I.click(
      '//*[@id="app"]//div/aside[2]/div/section[2]//div/div/form/div[2]/button[1]'
    ),
    I.switchToNextTab(),
    I.click('//*[@id="dv"]/caption/button'),
    I.wait('5'),
    console.log('executou o teste')
})
