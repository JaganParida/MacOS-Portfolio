const https = require('https');
https.get('https://html.duckduckgo.com/html/?q=macbook+pro+m3+wallpaper+4k', {headers:{'User-Agent':'Mozilla/5.0'}}, res => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    const matches = [...data.matchAll(/img class=\"result__image\" src=\"([^\"]+)\"/g)];
    if(matches.length > 0) {
        console.log(matches.slice(0, 5).map(m => {
            const url = m[1];
            if(url.includes('u=')) {
                return decodeURIComponent(url.split('u=')[1].split('&')[0]);
            }
            return url;
        }));
    } else {
        console.log('No matches found');
    }
  });
});
