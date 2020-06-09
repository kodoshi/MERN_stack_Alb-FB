/**
 * GetUser information method: make a http request to the server.
 * take the response object from the server
 * and return json response
*/
export const readuserdata = (userId, tokenkey) => {
  return fetch(`${process.env.REACT_APP_API_URL}/user/${userId}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${tokenkey}`
      }
  })
  .then(response => {
    return response.json()
  })
};


/**
 * Delete user Account method: make a http request to the server.
 * take the response object from the server
 * and return json response
*/
export const remove = (userId, tokenkey) => {
  return fetch(`${process.env.REACT_APP_API_URL}/user/${userId}`, {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${tokenkey}`
      }
  })
  .then(response => {
    return response.json()
  })
}

/**
* make the http request to the server to get all users from the db.
* and then take the server response.
* the response will be handeled and if there is an error we console log that error.
* else we will set State with the user data on the users emty array.
*/

export const listusers= ()=>{
	return fetch(`${process.env.REACT_APP_API_URL}/users/`, {
    method: "GET",
  })
  .then(response => {
    return response.json()
  })
}