const fileOperations = require('./homeworkFileOperations'); // skroz isto kako const { read, write, append } = require('./homeworkFileOperations');


//1 and 4 del od zadacata
const read = async() => {
    try{
        const data = await fileOperations.read("homeworkExample.txt");
        console.log(data);
    }catch{
        console.error(error);
    }
}

// (async () => {
//     try{
//         await fileOperations.write("homeworkExample.txt", "test writing contentEdited");

//         read();
//     }catch(error){
//         console.log(error);
//     }
// })();

// 2 and 4 del od zadacata

(async () => {
    try{
        await fileOperations.append("homeworkExample.txt", "test writing content Appended");

        read();
    }catch(error){
        console.log(error);
    }
})();