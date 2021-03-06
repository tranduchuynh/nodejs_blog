const { multipleMongooseToObject } = require('../../util/mongoose');
const Course = require('../models/Course');
class SiteController {
    // [GET] new
    index(req, res, next) {
        Course.find({})
            .then((courses) =>
                res.render('home', {
                    courses: multipleMongooseToObject(courses),
                }),
            )
            .catch(next);
    }
}

module.exports = new SiteController();
