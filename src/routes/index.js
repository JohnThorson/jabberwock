const express			= require( 'express' );
const router			= express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render( 'index', { sitename: 'onbase' });
});

/* GET plain requests. */
router.get(/^(.+)$/, function(req, res, next) {
	var path = req.path.substr(1);

	res.render(
		path, {
			layout: path
		}
	);
});

module.exports = router;