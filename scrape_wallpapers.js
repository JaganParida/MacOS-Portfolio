import puppeteer from 'puppeteer';

(async () => {
  const browser = await puppeteer.launch({ headless: 'new' });
  const page = await browser.newPage();
  
  // Scrape M3 Wallpaper from WallpaperCave
  await page.goto('https://wallpapercave.com/macbook-pro-m3-wallpapers');
  const urlsM3 = await page.evaluate(() => {
    return Array.from(document.querySelectorAll('img.wpimg')).map(img => img.src).slice(0, 3);
  });
  console.log('M3:', urlsM3);

  // Scrape M4 iPad Pro Wallpaper
  await page.goto('https://wallpapercave.com/ipad-pro-m4-wallpapers');
  const urlsM4 = await page.evaluate(() => {
    return Array.from(document.querySelectorAll('img.wpimg')).map(img => img.src).slice(0, 2);
  });
  console.log('M4:', urlsM4);

  await browser.close();
})();
