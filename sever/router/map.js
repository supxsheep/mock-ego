const router = require('express').Router();
const axios = require('axios');

// https://api.map.baidu.com/reverse_geocoding/v3/?ak=5p8YKL8ZpKuKFwvMOzU0QM05glUx0sDB&output=json&coordtype=wgs84ll&location=37.009946635600,118.093584610100
router.get('/location', function (req, res) {
	axios
		.get('https://api.map.baidu.com/reverse_geocoding/v3/', {
			params: {
				ak: '5p8YKL8ZpKuKFwvMOzU0QM05glUx0sDB',
				output: 'json',
				coordtype: 'wgs84ll',
				location: req.query.lat+','+req.query.lng,
			},
		})
    .then(function (response) {
      res.json(response.data);
    })
		.catch(function (err) {});
});

module.exports = router;
