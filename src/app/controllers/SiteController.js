class SiteController {
    // [GET] new
    index(req, res) {
        return res.render('home');
    }
}

module.exports = new SiteController();
