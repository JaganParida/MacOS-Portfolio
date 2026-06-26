const https = require('https');
https.get('https://wallpaperaccess.com/macbook-pro-m3', res => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    const matches = [...data.matchAll(/src=\"(\/full\/[^\"]+)\"/g)];
    if (matches.length > 0) {
      console.log(matches.slice(0, 5).map(m => 'https://wallpaperaccess.com' + m[1]));
    } else {
      console.log('No matches');
    }
  });
});
