# Job Management Dashboard Application
## A MERN Stack Web Application


### Set Up Instructions
Node version - v18.17.1
npm version - 10.8.0

#### Backend
- Navigate to backend folder
- Run npm i
- Run npm start
- URL for backend - http://localhost:3000/api/jobs

#### Frontend
- Navigate to frontend folder
- Run npm i
- Run npm start
- URL for frontend : http://localhost:3001

#### API Documentation

#### Backend
- body-parser : body-parser is a middleware used to parse the incoming request bodies before your handlers, making it available under the req.body property. It is particularly useful when dealing with POST requests where you need to extract data sent in the body of the request.
- cookie-parser : cookie-parser is a middleware for Node.js that helps parse cookies attached to client requests. It simplifies handling cookies in your Express applications, making it easier to manage user sessions, authentication, and other stateful interactions.
- cors: In a MERN (MongoDB, Express, React, Node.js) stack application, configuring CORS is essential when the client (React) is hosted on a different domain or port than the server (Node.js with Express).
- dotenv : dotenv is a module that loads environment variables from a .env file into process.env. 
- MongoDB : A NoSQL database that stores data in JSON-like documents
- Mongoose : Mongoose is an ODM library for MongoDB and Node.js. It manages relationships between data, provides schema validation, and is used to translate between objects in code and the representation of those objects in MongoDB.
- Morgan : "Morgan" is a middleware used in the Express.js part of the stack. Morgan is a popular HTTP request logger middleware for Node.js.
- Nodemon: Nodemon is a tool that helps in automatically restarting the server-side application whenever file changes are detected.

#### Frontend
- axios : For handling get, put, post, delete requests with the backend
- react-moment: To manage date time format
- react-router-dom : Manage routes of React application

## Why MERN stack?
Using the MERN (MongoDB, Express.js, React, Node.js) stack offers several advantages for web developers:

Single Language: With MERN, you can use JavaScript throughout your entire application, from the frontend to the backend. This reduces context switching and makes it easier for developers to work on both ends of the stack.

Full Stack JavaScript: Since all components of the MERN stack use JavaScript, developers can share code and expertise across the stack, leading to more efficient development workflows and better collaboration among team members.

React for Dynamic UIs: React's component-based architecture allows for the creation of highly interactive and dynamic user interfaces. With features like virtual DOM and component reusability, React simplifies UI development and enhances the overall user experience.

- Node.js for Scalable Backend: Node.js is known for its non-blocking, event-driven architecture, making it highly scalable and suitable for real-time applications. It allows for handling concurrent connections with ease, making it ideal for building APIs and server-side logic.

- Express.js for Simplified Backend Development: Express.js is a minimalist web application framework for Node.js, providing a robust set of features for building APIs and handling HTTP requests. It simplifies routing, middleware integration, and error handling, speeding up backend development.

- MongoDB for Flexible Data Storage: MongoDB is a NoSQL database that stores data in flexible, JSON-like documents. It offers schema flexibility, allowing developers to iterate quickly and adapt to changing requirements. MongoDB's scalability and performance make it suitable for handling large volumes of data.

- Rapid Development: The combination of these technologies facilitates rapid development cycles. React's component-based architecture, coupled with Node.js and Express.js for the backend, allows for quick prototyping and iteration. Additionally, the ability to reuse code and expertise across the stack further accelerates development.

- Community and Ecosystem: The MERN stack has a vibrant and active community, with a vast ecosystem of libraries, frameworks, and tools available to streamline development tasks. From UI component libraries to backend middleware, developers have access to a rich set of resources to enhance their applications.

- Scalability and Performance: MERN applications can easily scale horizontally and vertically to accommodate growing user bases and increasing data loads. Node.js's non-blocking I/O model and MongoDB's distributed architecture make them well-suited for high-performance applications that require scalability.

- Modern and Future-proof: The MERN stack leverages modern web development technologies and best practices. By using these technologies, developers can build applications that are not only feature-rich and scalable but also well-positioned to adapt to future advancements in web development.

Overall, the MERN stack offers a powerful and flexible platform for building modern web applications, combining the strengths of JavaScript, React, Node.js, Express.js, and MongoDB to deliver efficient development workflows, high-performance applications, and engaging user experiences.
