const router = require('express').Router();
const{
    getAllUsers,
    getUserById,
    postNewUser,
    putNewUser,
    deleteUser
}=require('../../controllers/user-controller');

router
    .route('/')
    .get(getAllUsers)
    .post(postNewUser);

router
    .route('/:id')
    .get(getUserById)
    .put(putNewUser)
    .delete(deleteUser);

module.exports= router;
    