const router= require('express').Router();
const userRoutes= require('./user-routes');

router.use('/user', userRoutes);

module.exports = router;



// const router = require('express').Router();
// const commentRoutes = require('./comment-routes');
// const pizzaRoutes = require('./pizza-routes');

// router.use('/comments', commentRoutes);
// router.use('/pizzas', pizzaRoutes);

// module.exports = router;
