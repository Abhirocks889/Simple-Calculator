const puppeteer = require('puppeteer');

test('Should launch the application', async () => {
    const browser = await puppeteer.launch({
        headless: false,
        slowMo: 80,
        args: ['--window-size=1920,1080']
    });
    const page = await browser.newPage();
    await page.goto('http://127.0.0.1:8080/');
});