const path = require('path');
const fs = require('fs');
const uuid = require('uuid');
const usersFile = path.join(__dirname, '../data/users.json');
const usersData = JSON.parse(fs.readFileSync(usersFile, 'utf8'));

const getUsers = function (req, res) {
    res.json(usersData)
};

const getUserById = function (req, res) {
    const id = req.params.id;
    const user = usersData.find(user => user.userId === id)

    user ? res.json(user): res.status(200).send('Not found')
};

const updateUser = function (req, res) {
    const id = req.params.id;
    const updatedUser = req.body;

    if(!updatedUser.name || !updatedUser.mail) res.status(400).send('Invalid status value')
    const userIndex = usersData.findIndex(user => user.userId === id)

    if (userIndex === -1)  res.status(400).send('Not found');
    else {
        updatedUser.userId = id;
        usersData[userIndex] = updatedUser;
        fs.writeFileSync(usersFile, JSON.stringify(usersData));

        res.status(200).send('User was updated');
    };
}

const deleteUser = function (req, res) {
    const id = req.params.id;
    const userIndex = usersData.findIndex(user => user.userId === id)

    if (userIndex === -1)  res.status(400).send('Not found');
     usersData.splice(userIndex, 1)
     fs.writeFileSync(usersFile, JSON.stringify(usersData));

     res.status(400).send('User was deleted')
};

module.exports = {
    getUsers,
    getUserById,
    updateUser,
    deleteUser
};