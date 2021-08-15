const User = require("./User");
const Post = require("./Post");
const Comment = require('./Comment');

// create user associations
User.hasMany(Post, {
  foreignKey: "user_id",
});

// create post associations
Post.belongsTo(User, {
  foreignKey: "user_id",
});

// create comment associations 
Comment.belongsTo(User, {
  foreignKey: 'user_id'
});

Comment.belongsTo(Post, {
  foreignKey: 'post_id'
});

User.hasMany(Comment, {
  foreignKey: 'user_id'
});

Post.hasMany(Comment, {
  foreignKey: 'post_id'
});


module.exports = { User, Post, Comment };
