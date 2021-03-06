/**
 * Signout method: Check if we have the window object we will have access to the localStorage .
 * if the token exists in the localStorage remove it.
 * Make request to the server and take the json response of it.
 *
 * @param {object} next, the callback functions that allows the method to go to the next middleware
 * @returns {json} response.json
 */
export const signout = (next) => {
  if (typeof window !== "undefined") localStorage.removeItem("tokenkey");
  next();
  return fetch(`${process.env.REACT_APP_API_URL}/signout`, {
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
 * IsAuthenticated method: check if the user is authenticated.
 * If token does not exists in the localStorage the user is not authenticated so return false.
 * If exists get he token and parse it on JSON format.
 */
export const isAuthenticated = () => {
  if (typeof window == "undefined") {
    return false;
  }
  if (localStorage.getItem("tokenkey")) {
    return JSON.parse(localStorage.getItem("tokenkey"));
  } else {
    return false;
  }
};
