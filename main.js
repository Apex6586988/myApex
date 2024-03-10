import * as fs from 'fs'

const d = new Date();
let string = d.toLocaleDateString()+'_'+d.toLocaleTimeString()

fs.appendFile(string+'.txt', 'file created at ' + string, function (err) {
    if (err) throw err;
    console.log('Saved' + string + '!');
});
