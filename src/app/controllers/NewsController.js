class NewsController {
  // [GET] new
  index(req, res) {
    res.render("news");
  }

  show(req, res) {
    res.send("Deital News!");
  }
}

module.exports = new NewsController();
