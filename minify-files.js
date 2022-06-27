const minify = require('minify');
const fs = require("fs");
//minify("fff.html").then(a=>{fs.writeFileSync("fff.min.html",a)}).catch(console.error);
fs.readdir('styles', (err, files) => {
  files.forEach(file => {
    minify('./styles/' + file)
      .then(data => {
        fs.writeFileSync(`./styles/min-${file}`, data);
      })
      .catch(console.error);
  });
});

