const { Post } = require("../models");

const postData = [
  {
    title: "Best Practices of Rest API Design",
    post_url: "https://stackoverflow.blog/2020/03/02/best-practices-for-rest-api-design/",
    user_id: "2"
  },
  {
    title: "The strange domain names that developers bought",
    post_url: "https://stackoverflow.blog/2021/08/11/the-strange-domain-names-that-developers-bought/",
    user_id: "3"
  },
  {
    title: "How writing can advance your career as a developer",
    post_url: "https://stackoverflow.blog/2021/08/09/how-writing-can-advance-your-career-as-a-developer/",
    user_id: "1"
  },
  {
    title: "Using collections to make your SQL access easier and more efficient",
    post_url: "https://stackoverflow.blog/2021/06/30/using-collections-to-make-your-sql-access-easier-and-more-efficient/",
    user_id: "4"
  },
  {
    title: "How developers can be their own operations department",
    post_url: "https://stackoverflow.blog/2021/05/24/how-developers-can-be-their-own-operations-department/",
    user_id: "5"
  },
  {
    title: "Building the software that helps build SpaceX",
    post_url: "https://stackoverflow.blog/2021/05/13/building-the-software-that-helps-build-spacex/",
    user_id: "1"
  },
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;
