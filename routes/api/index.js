const router= require('express').Router();
const userRoutes= require('./user-routes');
const thoughtRoutes= require('./thought-routes');
const reactionRoutes= require('./reaction-routes');

router.use('/reaction', reactionRoutes);
router.use('/thought', thoughtRoutes);
router.use('/user', userRoutes);

module.exports = router;



// const router = require('express').Router();
// const commentRoutes = require('./comment-routes');
// const pizzaRoutes = require('./pizza-routes');

// router.use('/comments', commentRoutes);
// router.use('/pizzas', pizzaRoutes);

// module.exports = router;
