
//get user
const getUsers = (req, res) => {
    res.send('GET users')
}
//login
const login = async (req, res) => {
    const { username, password } = req.body;
    res.send('POST users: ' + username + ' ' + password)
}
//register
const register = async (req, res) => {
    res.send('POST register users')
}

export default {
    getUsers,
    login,
    register
}