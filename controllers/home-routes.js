const router = require('express').Router();
const sequelize = require('../config/connection');
const { Post, User, Comment } = require("../models");


// this shows all the blog posts on the homepage
router.get("/", (req, res) => {
  Post.findAll({
    attributes: ["id", "post_url", "title", "created_at"],
    include: [
      {
        model: Comment,
        attributes: ["id", "comment_text", "post_id", "user_id", "created_at"],
        include: {
          model: User,
          attributes: ["username"],
        },
      },
      {
        model: User,
        attributes: ["username"],
      },
    ],
  })
    .then((dbPostData) => {
      // pass a single post object into the homepage template
      const posts = dbPostData.map(post => post.get({ plain: true }));
      res.render("homepage", { posts });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// this will take the user to the login and sign up page
router.get('/login', (req, res) => {
    res.render('login');
})

module.exports = router;