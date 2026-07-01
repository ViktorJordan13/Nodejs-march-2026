const fs = require('fs');

//1 del od domasnata
const read = (filename) => {
    return new Promise((resolve, reject) =>{
        fs.readFile(filename, 'utf-8', (error, data)=> {
            if(error){
                reject(error);
            }else{
                resolve(data);
            }
        });
    });
};

//SOLID
// S - single responsibility
// vo functional programing, toa znaci deka sekoja funkcija treba da pravi samo edno nesto

const write = (filename, data) => {
    return new Promise((resolve, reject) => {
        fs.writeFile(filename, data, (error) =>{
            if(error){
                reject(error);
            }else{
                resolve();
            }
        })
    });
};

//2 del od domasnata
const append = (filename, data) => {
    return new Promise((resolve, reject) => {
        fs.appendFile(filename, data, (error) =>{
            if(error){
                reject(error);
            }else{
                resolve();
            }
        });
    });
};

module.exports = {
    read,
    write,
    append
}