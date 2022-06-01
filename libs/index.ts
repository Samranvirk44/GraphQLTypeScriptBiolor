
const lib :any= {};
const fs = require('fs');

let cd;
fs.readdirSync(__dirname).filter((file:any) => (file.indexOf('.') !== 0) && (file !== 'index.js')).forEach((file:any) => {
    cd = file.replace('.ts', '');
    console.log(cd)
    lib[cd]= require(`./${file}`);
});

module.exports = lib;
