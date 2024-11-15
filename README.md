# Contact Management App - Backend

This is the **backend** of the Contact Management Application, built using **Node.js** with **Express** and **MongoDB**. It provides the API endpoints for managing contacts (add, remove, update, view) and supports CRUD operations. 

### Features:
- **Add Contact**: API endpoint to add a new contact.
- **Remove Contact**: API endpoint to delete a contact by its ID.
- **Update Contact**: API endpoint to modify an existing contact.
- **View All Contacts**: API endpoint to fetch all stored contacts.
- **MongoDB**: Used for persistent storage of contact data.

### Tech Stack:
- **Node.js**: JavaScript runtime for building the backend.
- **Express.js**: Web framework for Node.js for building the API.
- **MongoDB**: NoSQL database to store contact data.
- **Mongoose**: MongoDB object modeling for Node.js.

### Setup and Installation:

1. Clone the repository:
    ```bash
    git clone https://github.com/Karesh9347/Erino-backend.git
    ```

2. Navigate into the project directory:
    ```bash
    cd Erino-backend
    ```

3. Install the dependencies:
    ```bash
    npm install
    ```

4. Configure your environment variables:
    - Create a `.env` file in the root directory of the project and add your MongoDB connection string:
    ```text
    MONGO_URI=your-mongodb-uri
    PORT=5000
    ```

5. Start the server:
    ```bash
    npm start
    ```

    The server will be available at [http://localhost:5000](http://localhost:5000).

### API Endpoints:

- **GET** `/all-contacts`: Fetch all contacts.
- **POST** `/add-ontact`: Add a new contact.
- **PUT** `/update-contact/:email`: Update a contact by email.
- **DELETE** `/remove-contact/:emai`: Delete a contact by email.

### Example API Requests:

#### 1. Add a Contact (POST `/add-contact`):
```json
{
  "name": "John Doe",
  "email": "john.doe@example.com",
  "phone": "1234567890"
"company":"erino",
"job title":"sde"
}
#### 1. data base schemaa :
```json
database schema = {
  firstName: String,
  lastName: String,
  email: String,
  phoneNumber: String,
  company: String,
  jobTitle: String
};```
