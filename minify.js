const minify = require('minify');
const fs = require('fs');
minify('fff.html').then(data => {
  fs.writeFileSync('fff.min.html', data);
}).catch(console.error);
