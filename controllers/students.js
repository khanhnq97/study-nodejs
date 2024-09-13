import { studentRepository } from "../repositories/index.js";

const getAllStundets = async (req, res) => {
    const student = await studentRepository.getAllStudents();
    res.status(200).json(
        {
            "message": "Get all students",
            "data": [
                {
                    "name": "Nguyễn Văn Anh",
                    "email": "nguyenvananh@gmail.com",
                    "age": 21
                },
                {
                    "name": "Trần Bình An",
                    "email": "tranbinhan@gmail.com",
                    "age": 22
                },
                {
                    "name": "Ninh Diêu",
                    "email": "ninhdieu@gmail.com",
                    "age": 23
                },
                {
                    "name": "Trương Tử Phàm",
                    "email": "truongtupham@gmail.com",
                    "age": 24
                },
            ]
        }
    );
}

const getAllStundetsById = async (req, res) => {
    res.send('GET detail student by id: ' + req.params.id)
}

const insertStudent = async (req, res) => {
    res.send('POST insert student')
}

const editStudent = async (req, res) => {
    res.send('PUT edit student')
}

const deleteStudent = async (req, res) => {
    res.send('DELETE delete student')
}

export default {
    getAllStundets,
    getAllStundetsById,
    insertStudent,
    editStudent,
    deleteStudent
}