const https = require('https');
const fs = require('fs');

const download = (url, dest) => {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest);
    https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (response) => {
      if (response.statusCode === 301 || response.statusCode === 302) {
        return download(response.headers.location, dest).then(resolve).catch(reject);
      }
      response.pipe(file);
      file.on('finish', () => {
        file.close(resolve);
      });
    }).on('error', (err) => {
      fs.unlink(dest, () => reject(err));
    });
  });
};

(async () => {
  try {
    console.log('Downloading M3 wallpaper...');
    await download('https://media.idownloadblog.com/wp-content/uploads/2023/10/MacBook-Pro-M3-Wallpaper-Space-Black.jpg', 'public/m3-macbook.jpg');
    console.log('Downloading M4 wallpaper...');
    await download('https://media.idownloadblog.com/wp-content/uploads/2024/05/iPad-Pro-M4-Wallpaper-Space-Black.jpg', 'public/m4-ipad.jpg');
    console.log('Downloading Poco M4 wallpaper...');
    await download('https://images.hdqwalls.com/wallpapers/poco-m4-pro-5g-m1.jpg', 'public/poco-m4.jpg');
    console.log('Done!');
  } catch(e) {
    console.error(e);
  }
})();
