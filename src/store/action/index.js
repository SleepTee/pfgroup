export const addUsers = (firstname , lastname , email, password , admin) => ({
    type: "ADD USER",
    firstName: firstname,
    lastName: lastname,
    email: email,
    password: password,
    isAdmin: admin
})

export const LoginUser = (email, password) => ({
    type: "LOGIN USER",
    email: email,
    password: password,
});