# HomeMaid

HomeMaid is a comprehensive web application designed to connect households with reliable and professional maid services. Our platform offers a wide range of services including cleaning, cooking, babysitting, and more, ensuring that every aspect of household management is taken care of with utmost expertise. The application provides a user-friendly interface, detailed service descriptions, and seamless booking functionality, making it easy for users to find and hire the right service providers for their needs.

## Features

- **User Authentication:** Secure user login and registration using JWT and bcrypt for password hashing.
- **Service Listings:** Detailed descriptions and images of various services like cleaning, cooking, and babysitting.
- **Service Details:** Each service has a dedicated page with more information and a booking option.
- **Responsive Design:** Tailored for optimal viewing on different devices using Tailwind CSS.
- **Feedback and Reviews:** Customers can leave feedback and reviews for services, enhancing trust and reliability.
- **Contact Form:** Allows users to get in touch with customer support for any queries or issues.
- **Admin Panel:** Manage services, view bookings, and handle user inquiries.

## Tech Stack

### Frontend:
- React: A JavaScript library for building user interfaces.
- Tailwind CSS: A utility-first CSS framework for rapidly building custom designs.
- React Router: For routing and navigation.

### Backend:
- Node.js: A JavaScript runtime built on Chrome's V8 JavaScript engine.
- Express: A minimal and flexible Node.js web application framework.
- MongoDB: A NoSQL database for storing user and service data.
- Mongoose: An ODM (Object Data Modeling) library for MongoDB and Node.js.
- JWT: For secure user authentication.
- Bcrypt.js: For password hashing.

## Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/HomeMaid.git
   cd HomeMaid
2.  **Install dependencies for frontend and backend:**
     ```bash
     cd client
     npm install
    cd ../auth-backend
    npm install

3.  **Set up environment variables:**

Create a .env file in the auth-backend directory and add your MongoDB URI and JWT secret key.
   ```bash
   MONGO_URI=mongodb://localhost:27017/homemaid
   JWT_SECRET=your_jwt_secret_key
```
4. **Run the backend server:**

```bash

cd auth-backend
node server.mjs

```
5. **Run the frontend server:**

```bash

cd client
npm run dev
```
6. **Access the application:**

Open your browser and navigate to http://localhost:3000.


## Contributing

We welcome contributions from the community. If you'd like to contribute, please fork the repository and use a feature branch. Pull requests are warmly welcome.

1. **Fork the repository***
2.  **Create your feature branch:**
```bash

git checkout -b feature/YourFeature
```
3. **Commit your changes:**

```bash

git commit -m 'Add some feature'

```
4. **Push to the branch:**
```bash

git push origin feature/YourFeature
```
5. **Create a new Pull Request**
   
## License
This project is licensed under the MIT License - see the LICENSE file for details.



### Some Sample OutPut

![image](https://github.com/mahakPandeyOfficial/HomeMaid/assets/116765334/6f48e4a0-00c3-499b-b83b-b4b666a2ff44)

![image](https://github.com/mahakPandeyOfficial/HomeMaid/assets/116765334/3cb4eade-2f2e-44fb-ab6f-d2bbd7e1dfd2)

![image](https://github.com/mahakPandeyOfficial/HomeMaid/assets/116765334/54c8cdbb-b213-4c44-8e23-eab8e4fc1c96)

![image](https://github.com/mahakPandeyOfficial/HomeMaid/assets/116765334/ef5e9744-2e5e-4e8d-8dcd-73dfa1a7cc7e)

![image](https://github.com/mahakPandeyOfficial/HomeMaid/assets/116765334/16b13022-e31c-4c36-a5be-d8abec394fbf)






