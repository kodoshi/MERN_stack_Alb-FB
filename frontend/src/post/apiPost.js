/**
 * create method: make a http request to the server.
 * we send the token and post to the backend
 * take the response object from the server
 * and return json response
 *
 * @param {string} userId id of the user
 * @param {string} tokenkey token that is saved in localStorage
 * @param {string} post, we need to add new post
 * @returns {json} response.json
 */
export const create = (userId, tokenkey, post) => {
  return fetch(`${process.env.REACT_APP_API_URL}/post/new/${userId}`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${tokenkey}`,
    },
    // no need to stringify, we have FormData
    body: post,
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => {
      console.log(err);
    });
};

/**
 * listpost method: get all post from the DB
 * make the http request to the server to get all posts from the db.
 * and then take the server response.
 * the response will be handeled and if there is an error we console log that error.
 *
 * @returns {json} response.json
 */
export const listposts = () => {
  return fetch(`${process.env.REACT_APP_API_URL}/posts/`, {
    method: "GET",
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => {
      console.log(err);
    });
};

/**
 * make the http request to the server to get single post from the db.
 * and then take the server response.
 * the response will be handeled and if there is an error we console log that error.
 *
 * @param {string} postId id of the post
 * @returns {json} response.json
 */
export const singlepost = (postId) => {
  return fetch(`${process.env.REACT_APP_API_URL}/post/${postId}`, {
    method: "GET",
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => {
      console.log(err);
    });
};

/**
 * make the http request to the server to get all posts from a specific user.
 * then take the server response.
 * the response will be handeled and if there is an error we console log that error.
 *
 * @param {string} userId id of the user
 * @param {string} tokenkey token in the local Storage
 * @returns {json} response.json
 */
export const listbyuser = (userId, tokenkey) => {
  return fetch(`${process.env.REACT_APP_API_URL}/post/by/${userId}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${tokenkey}`,
    },
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => {
      console.log(err);
    });
};

/**
 * Delete user Account method: make a http request to the server.
 * we send the token to the backend
 * take the response object from the server
 * and return json response
 *
 * @param {string} postId id of the user in the url
 * @param {string} tokenkey token that is saved in localStorage
 * @returns {json} response.json
 */
export const remove = (postId, tokenkey) => {
  return fetch(`${process.env.REACT_APP_API_URL}/post/${postId}`, {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${tokenkey}`,
    },
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => {
      console.log(err);
    });
};

/**
 * Update information method: make a http request to the server.
 * we send the token and post to the backend
 * take the response object from the server
 * and return json response
 *
 * @param {string} postId id of the post in the url
 * @param {string} tokenkey token that is saved in localStorage
 * @param {string} post data  that is on the State
 * @returns {json} response.json
 */
export const update = (postId, tokenkey, post) => {
  return fetch(`${process.env.REACT_APP_API_URL}/post/${postId}`, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      //no need for Content Type, because this is going to be FormData
      Authorization: `Bearer ${tokenkey}`,
    },
    // no need to stringify, we have FormData
    body: post,
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => {
      console.log(err);
    });
};

/**
 * Like method: make a http request to the server.
 * we send the userId and postId to the backend
 * take the response object from the server
 * and return json response
 *
 * @param {string} userId id of the user who liked the post
 * @param {string} tokenkey token that is saved in localStorage
 * @param {string} postId id of the post which has been liked
 * @returns {json} response.json
 */
export const like = (userId, tokenkey, postId) => {
  return fetch(`${process.env.REACT_APP_API_URL}/post/like`, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${tokenkey}`,
    },
    body: JSON.stringify({ userId, postId }),
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => {
      console.log(err);
    });
};

/**
 * Unlike method: make a http request to the server.
 * we send the userId and postId to the backend
 * take the response object from the server
 * and return json response
 *
 * @param {string} userId id of the user who liked the post
 * @param {string} tokenkey token that is saved in localStorage
 * @param {string} postId id of the post which has been liked
 * @returns {json} response.json
 */
export const unlike = (userId, tokenkey, postId) => {
  return fetch(`${process.env.REACT_APP_API_URL}/post/unlike`, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${tokenkey}`,
    },
    body: JSON.stringify({ userId, postId }),
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => {
      console.log(err);
    });
};

/**
 * comment method: make a http request to the server.
 * we send the userId and postId to the backend
 * take the response object from the server
 * and return json response
 *
 * @param {string} userId id of the user
 * @param {string} tokenkey token that is saved in localStorage
 * @param {string} postId id, to wich post belongs this comment
 * @param {string} comment, the actual comment
 * @returns {json} response.json
 */
export const comment = (userId, tokenkey, postId, comment) => {
  return fetch(`${process.env.REACT_APP_API_URL}/post/comment`, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${tokenkey}`,
    },
    body: JSON.stringify({ userId, postId, comment }),
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => {
      console.log(err);
    });
};

/**
 * comment method: make a http request to the server.
 * we send the userId and postId to the backend
 * take the response object from the server
 * and return json response
 *
 * @param {string} userId id of the user
 * @param {string} tokenkey token that is saved in localStorage
 * @param {string} postId id, to wich post belongs this comment
 * @param {string} comment, the actual comment
 * @returns {json} response.json
 */
export const uncomment = (userId, tokenkey, postId, comment) => {
  return fetch(`${process.env.REACT_APP_API_URL}/post/uncomment`, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${tokenkey}`,
    },
    body: JSON.stringify({ userId, postId, comment }),
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => {
      console.log(err);
    });
};
