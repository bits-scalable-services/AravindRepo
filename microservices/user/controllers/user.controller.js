let userModel = require('../../../models/user.model');

class User {
    constructor() {
    }
    static async userCreation(req, res, next) {
        try {
            let body = req.body;
            let postObj = {
                userName: body.userName,
                userTitle: body.userTitle,
                emailId: body.emailId,
                dateOfBirth: body.dateOfBirth,
                password: body.password
            };
            let createUser = await userModel.create(postObj);
            if (!createUser) {

                return res.status(400).json({ success: false, data: `${createUser}`, message: `User Not created` });
            }

            return res.status(200).json({ success: true, data: `${createUser}`, message: `User created succesfully` });

        }
        catch (err) {
            console.log(err);
            return res.status(500).json({ success: false, data: `${err}`, message: `Internal Server Problem` });
        }
    }

    static async fetchUsers(req, res, next) {
        try {
            let usersList = await userModel.find();
            if (!usersList) {

                return res.status(400).json({ success: false, data: `${usersList}`, message: `User Not Fetched` });
            }

            return res.status(200).json({ success: true, data: `${usersList}`, message: `User Fetched succesfully` });
        }
        catch (err) {
            console.log(err);
            return res.status(500).json({ success: false, data: `${err}`, message: `Internal Server Problem` });
        }
    }
}

module.exports = User;