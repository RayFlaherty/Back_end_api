const router = require('express').Router();
const{addThought,
    putThought,
    removeThought,
    } = require ('../../controllers/thought-controller');

router.route('/:userId').post(addThought);

router.route('/:userId/:thoughtId').delete(removeThought);

router.route('/:thoughtId').put(putThought);

// router
//     .route('/:userId/:thoughtId')
//     .delete(removeThought)

// router.route('/:userId/:thoughtId/:replyId').delete(removeReply)
module.exports = router;