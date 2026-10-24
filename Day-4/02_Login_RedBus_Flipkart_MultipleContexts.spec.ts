

import{chromium,firefox,test} from '@playwright/test'


test ('02_Login_RedBus_Flipkart_MultipleContexts',
    
    async()=>{
        
    const browser1= await chromium.launch({channel: 'msedge',  headless: false});
    const browser2= await firefox.launch();
    const context1= await browser1.newContext();
    const context2= await browser2.newContext();

    const page1 = await context1.newPage();
    const page2 = await context2.newPage();

    await page1.goto('https://www.redbus.in');
    await page2.goto('https://www.flipkart.com');

    console.log(await page1.title());
    console.log(page1.url());
    console.log(await page2.title());
    console.log(page2.url());
} )

