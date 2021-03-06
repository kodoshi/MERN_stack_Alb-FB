/**
 * 1 more step of validation being done to return json response if conditions aren't met
 */

/**
 * Create Post Validator method, checks 1 more time the minimum requirements needed to create a Post
 *
 * @param {object} req HTTP request from express
 * @param {object} res HTTP response from express
 * @param {object} next allows the method to go to the next middleware
 */
exports.createPostValidator = (req, res, next) => {
  req.check("title", "Insert Title").notEmpty();
  req
    .check("title", "Title length limited between 3 & 100 characters")
    .isLength({
      min: 3,
      max: 100,
    });

  req.check("body", "Insert Content").notEmpty();
  req
    .check("body", "Content length limited between 3 & 1000 characters")
    .isLength({
      min: 3,
      max: 1000,
    });

  //extra error checking
  const errors = req.validationErrors();
  if (errors) {
    const firstError = errors.map((err) => err.msg)[0]; //first error instance gets logged
    return res.status(400).json({ error: firstError });
  }

  next(); //so we dont get stuck
};

/**
 * User Signup Validator method, checks 1 more time the minimum requirements needed to register
 *
 * @param {object} req HTTP request from express
 * @param {object} res HTTP response from express
 * @param {object} next allows the method to go to the next middleware
 */
exports.userSignupValidator = (req, res, next) => {
  req.check("name", "Insert Name").notEmpty();
  req.check("name", "Name length limited between 3 & 50 characters").isLength({
    min: 3,
    max: 50,
  });

  req
    .check("email", "Insert Email between 3 & 150 characters")
    .matches(/.+\@.+\..+/)
    .withMessage("Email should be in the right format")
    .isLength({
      min: 3,
      max: 150,
    });

  req.check("password", "Insert Password").notEmpty();
  req
    .check("password")
    .isLength({ min: 6 })
    .withMessage("Password must contain at least 6 characters and a number")
    .matches(/\d/)
    .withMessage("Password must contain at least 6 characters and a number");

  //extra error checking
  const errors = req.validationErrors();
  if (errors) {
    const firstError = errors.map((err) => err.msg)[0]; //first error instance gets logged
    return res.status(401).json({ error: firstError });
  }

  next(); //so we dont get stuck
};
