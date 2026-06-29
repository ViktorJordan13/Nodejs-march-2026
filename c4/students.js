const { read, write} = require("./io");

// CRUD (Create, Read, Update, Delete);

//Read(GET method);
const getAllStudents = async() => {
    return await read();
};

//student is an entry in this case, and each student has its unique id
const getSingleStudent = async(id) => {
    const students = await read();
    return students.find((singleStudent) => singleStudent.id === id);
};

//Create(POST method)
const addNewStudent = async(newStudentData) => {
    //mora prvo da gi zememe tie studenti sto gi imame vo array, za pri dodavanje na nov student da ne ni se izbrisat
    let students = await read(); //students is an array of students that already are in the database(vo ovoj slucaj toa ni e data.json fajlot) 
    students.push(newStudentData); // the new student data is added at the end of the array
    await write(students); // the adjusted students array, with the new student, is overwritten in the file
};

// Delete(DELETE method)
const deleteStudent = async(studentId) => {
    let students = await read();
    //pop(id) - for removing, but not usable in this instance, because it will remove the last entry in the database, not the one we sent id in the body for
    students = students.filter((student) => student.id !== studentId);
    await write(students); 
};

//Update (PUT, PATCH methods)
const editStudent = async(studentId, studentNewData) => {
    let students = await read();
    students = students.map((student) => {
        if(student.id === studentId){
            return {
                ...student,
                ...studentNewData,
            }
        }
        return student; // zatoa sto sekoj student nema da bide ednakov na momentalniot index,
        // bez ovoj return ke ni vrati null za site ostanati sto nivniot id ne odgovara na vlezniot studentId parametar
    });
    await write(students);
}

//Spread operator

const student = {
    name: "trajce",
    age: 23,
    faculty: "FIKT"
};

const studentNewData = {
    gender: "male",
    graduationYear: 2020,
    age: 25
}

const updatedStudent = {
    ...student, //existing data
    ...studentNewData // data that we want to update
}

//console.log(updatedStudent);

module.exports = {
    getAllStudents,
    getSingleStudent,
    addNewStudent,
    deleteStudent,
    editStudent
}