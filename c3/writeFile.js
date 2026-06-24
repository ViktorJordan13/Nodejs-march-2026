const fs = require("fs");

// tuka samo kazuvame vo koj fajl(imeto na fajlot) koi podatoci (data) gi zapisuvame
// tuka nemame nikakvi izlezni podatoci koi bi ni trebale

function writeFile(filename, data){
    fs.writeFile(filename, data, (err) => {
        if(err){
            console.log("An error has occcured while writing the file", err);
        }else{
            console.log("File succesfully written");
        }
    })
}

module.exports = {
    writeFile
}