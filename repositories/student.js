const getAllStudents = async ({
    page,
    size,
    searchString
}) => {
    console.log('get all students with: ', page, size, searchString);
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