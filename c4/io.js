//Promises have 3 states
// fullfilled(success), pending (in progress), rejected(faillure)

// resolve (data) - data is an argument from the readFile(function) on success
// reject (error) - error is an argument from the readFIle on fail

// resolve and reject vi se callback argumenti

const fs = require("fs");

const read = async() => {
    //resolve and reject are functions!
    return new Promise((resolve, reject) =>{
        fs.readFile("data.json", "utf-8", (err, data) =>{
            if(err){
                return reject(err);
            }else if(!data){
                return resolve([]);
            }else{
                data = JSON.parse(data); // ni treba za parsiranje(konverzija) na json podatocite
                return resolve(data);
            }
        })
    });
};

const write = async(data) => {
    return new Promise((resolve, reject) => {
        data = JSON.stringify(data);
        fs.writeFile("data.json", data, (err) => {
            if(err){
                return reject(err);
            }else{
                return resolve();
            }
        });
    });
};

module.exports = {
    read,
    write
}