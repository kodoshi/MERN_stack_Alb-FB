End of Training MERN stack application

Backend/cloud/config code was entirely written by me, frontend was handled by the rest of the team.

The goal was to create an application similar to Facebook, where users have relationships with other users, such as Follow/Unfollow and relationships with posts, such as Like/Unlike & Comment/Uncomment.
The CRUD operations for users and posts goes without saying. Picture upload for user profile and specific posts is also available as a feature. Added an admin panel where the content and users of the platform can be moderated.

Node server will run at http://localhost:4242/ and React app will run at http://localhost:3000/
API Documentation can be found at http://localhost:4242/api-docs/
Other Documentation can be found in the out/ folder, in the backend and frontend

Google Cloud implementation of back/frontend was done separately.

commands to start in backend folder:
npm install
npm start

commands to start in frontend folder:
npm install
npm start

commands to start mongodb server, if local:
sudo mongod
