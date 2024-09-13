const login = async ({ email, password }) => {
    console.log(`login user with: ${email}, ${password}`);
}

const register = async (name, email, password, phoneNumber, address) => {
    console.log(`register user with: ${name}, ${email}, ${password}, ${phoneNumber}, ${address}`);
}

export default {
    login,
    register
}