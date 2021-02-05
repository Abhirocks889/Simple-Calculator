const puppeteer = require('puppeteer');

test('Should launch the application and perform a multiplication operation correctly', async () => {
    // Launch browser
    const browser = await puppeteer.launch({
        headless: false,
        slowMo: 80,
        args: ['--window-size=1920,1080']
    });

    // Load application
    const page = await browser.newPage();
    await page.goto('http://127.0.0.1:8080/');
    
    // Get input buttons
    const buttons = await page.$$('.input-btn')
    
    // Click on 7
    await page.evaluate(button => button.click(), buttons[0]);
    // Click on 8
    await page.evaluate(button => button.click(), buttons[1]);
    // Click on 6
    await page.evaluate(button => button.click(), buttons[6]);

    // Click on X
    await page.evaluate(button => button.click(), buttons[7]);

    // Click on 3
    await page.evaluate(button => button.click(), buttons[10]);
    // Click on 2
    await page.evaluate(button => button.click(), buttons[9]);
    
    // Click on =
    await page.evaluate(button => button.click(), buttons[14]);
    
    // Check result
    const result = await page.$eval('.result', el => el.textContent);
    expect(result).toEqual(String(786 * 32));
});

test('Should launch the application and perform an addition operation correctly', async () => {
    // Launch browser
    const browser = await puppeteer.launch({
        headless: false,
        slowMo: 80,
        args: ['--window-size=1920,1080']
    });

    // Load application
    const page = await browser.newPage();
    await page.goto('http://127.0.0.1:8080/');
    
    // Get input buttons
    const buttons = await page.$$('.input-btn')
    
    // Click on 7
    await page.evaluate(button => button.click(), buttons[0]);
    // Click on 8
    await page.evaluate(button => button.click(), buttons[1]);
    // Click on 6
    await page.evaluate(button => button.click(), buttons[6]);

    // Click on +
    await page.evaluate(button => button.click(), buttons[15]);

    // Click on 3
    await page.evaluate(button => button.click(), buttons[10]);
    // Click on 2
    await page.evaluate(button => button.click(), buttons[9]);
    
    // Click on =
    await page.evaluate(button => button.click(), buttons[14]);
    
    // Check result
    const result = await page.$eval('.result', el => el.textContent);
    expect(result).toEqual(String(786 + 32));
});