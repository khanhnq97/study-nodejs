import { validationResult } from "express-validator"
import { userRepository } from "../repositories/index.js";

///login
const login = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    const { email, password } = req.body;
    await userRepository.login({ email, password });
    res.send('POST login users')
}

//register
const register = async (req, res) => {
    const { name, email, password, phoneNumber, address } = req.body;
    userRepository.register({ name, email, password, phoneNumber, address });
    res.status(201).json({
        "message": "Create new user",
        "data": {
            "name": name,
            "email": email,
            "password": password,
            "phoneNumber": phoneNumber,
            "address": address,
        }
    })
}

const getDetailUser = async (req, res) => {
    res.send('GET detail user')
}

export default {
    getDetailUser,
    login,
    register
}