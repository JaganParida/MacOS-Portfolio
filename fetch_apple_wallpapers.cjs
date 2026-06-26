const https = require('https');
https.get('https://basicappleguy.com/basicappleblog/m4-ipad-pro-wallpapers', res => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    const matches = [...data.matchAll(/(https:\/\/images.squarespace-cdn.com[^\s\"']+M4iPadPro[^\s\"']+)/g)];
    if (matches.length > 0) {
      console.log(matches.slice(0, 5).map(m => m[1]));
    } else {
      console.log('No M4 matches');
    }
  });
});
https.get('https://basicappleguy.com/basicappleblog/m3-macbook-pro-wallpapers', res => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    const matches = [...data.matchAll(/(https:\/\/images.squarespace-cdn.com[^\s\"']+MacBookPro_M3[^\s\"']+)/g)];
    if (matches.length > 0) {
      console.log(matches.slice(0, 5).map(m => m[1]));
    } else {
      console.log('No M3 matches');
    }
  });
});
