const getAllStundets = (req, res) => {
    res.send('GET students')
}

const getAllStundetsById = (req, res) => {
    res.send('GET detail student by id: ' + req.params.id)
}

const insertStudent = (req, res) => {
    res.send('POST insert student')
}

const editStudent = (req, res) => {
    res.send('PUT edit student')
}

const deleteStudent = (req, res) => {
    res.send('DELETE delete student')
}

export default {
    getAllStundets,
    getAllStundetsById,
    insertStudent,
    editStudent,
    deleteStudent
}