import {minify} from 'minify';
const fs=require("fs");
minify("fff.html").then(a=>{fs.writeFileSync("fff.min.html",a)}).catch(console.error);
