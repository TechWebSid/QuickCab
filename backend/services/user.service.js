const userModel = require('../models/user.model');
module.exports.createUser = async ({
    firstname, lastname, email, password
}) => {
    console.log('Creating user with email:', email); // Log the email

    if (!firstname || !lastname || !email || !password) {
        throw new Error('All fields are required');
    }

    // Check if the email already exists before creating the user
    const isUserAlready = await userModel.findOne({ email });
  

    if (isUserAlready) {
        throw new Error('Duplicate email address');
    }

    const user = await userModel.create({
        fullname: {
            firstname,
            lastname
        },
        email,
        password
    });

    return user;
}
