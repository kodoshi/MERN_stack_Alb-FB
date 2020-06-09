const express = require("express");
const router = express.Router();
const postController = require("../controllers/post");
const authController = require("../controllers/auth");
const userController = require("../controllers/user");
const validator = require("../validation/helper");

/**
 * routes getting 'filtered' through middlewares
 */
router.get("/posts", postController.getPost);

router.put("/post/like", authController.requireSignin, postController.like);
router.put("/post/unlike", authController.requireSignin, postController.unlike);

router.post(
  "/post/new/:userId",
  authController.requireSignin,
  postController.createPost,
  validator.createPostValidator //needs to run at the end so formidable package doesnt throw "Insert Title" error
);
router.get(
  "/post/by/:userId",
  //authController.requireSignin,  //maybe we dont need auth for this?
  postController.postsByUser
);
router.put(
  "/post/:postId",
  authController.requireSignin,
  postController.isPoster,
  postController.updatePost
);
router.delete(
  "/post/:postId",
  authController.requireSignin,
  postController.isPoster,
  postController.deletePost
);

router.param("userId", userController.userById); //userById() with be executed in routes that have :userId
router.param("postId", postController.postById); //postById() with be executed in routes that have :postId

module.exports = router;
