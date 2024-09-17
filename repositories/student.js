const getAllStudents = async () => {
    console.log('get all students with: ');
}

const insertStudents = async ({
    name, email, language, gender, phoneNumber, address
}) => {
    console.log('insert students with: ', name, email, language, gender, phoneNumber, address);
}

export default {
    getAllStudents,
    insertStudents
}