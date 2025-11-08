Milestone 3 - Executive Login

I built out the authentication backend for the DMUN platform, setting up login and registration for three user roles: Lead, Co-Lead, and regular Users. 

For the tech stack, I went with Node.js and Express for the server, and MongoDB Atlas for the database. I used Mongoose to handle the data models, bcrypt to hash passwords (no plaintext passwords stored!), and JWT tokens for session management.

The API has two main endpoints: `/register` and `/login`. When someone registers, their password gets hashed with bcrypt before being saved to the database. On login, the system checks the credentials and returns a JWT token if everything matches.

I ran into a MongoDB Atlas connection issue at first - turns out the database user credentials were wrong. Had to recreate the user in Atlas and update the connection string. Once that was fixed, everything worked smoothly. Tested both endpoints in Postman with different scenarios (valid users, invalid credentials, duplicate registrations) and they all behaved as expected.

With this in place, we've got a solid foundation for role-based access control and the executive dashboard features coming next.
