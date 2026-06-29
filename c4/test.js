const {
    getAllStudents,
    getSingleStudent,
    addNewStudent,
    deleteStudent,
    editStudent,

} = require("./students");

//IIFE
( async () => {
    try{
        //await addNewStudent({name: "Petar", surname: "Petreski", year: 2024, id: 1});
        //await addNewStudent({name: "Trajce", surname: "Trajceski", year: 2020, id: 2});
        //await deleteStudent(1);
        await editStudent(2, {year:2010});
        let students = await getAllStudents();
        console.log(students);



    }catch(err){
        console.log("Error", err);
    }finally{
        console.log("Code has finished executing"); // ova ke se izvrsi bez razlika dali se pominalo pri izvsuvanjeto kako ocekuvano ili imalo greska
    }

})();