<a HREF="https://drive.google.com/file/d/1bMg8UaJHPmxfRrrBO6LPKCTdsIiTsp58/view?usp=sharing">OUTPUT REPRESENTATION</a>

# Book Store Details

### **Objective:**

Create a full-stack web application titled **"Book Store Details"** using **React.js** for the frontend and **Node.js, Express, MongoDB** for the backend. The application should allow users to perform **CRUD (Create, Read, Update, Delete)** operations on a collection of books.

### **Requirements:**

1. **Frontend (React.js):**
    - Build a user interface that allows the following functionalities:
        - **Create a New Book**: A form to add new books.
        - **View All Books**: Display a list of all books in the store with details like title, author, price, and description.
        - **Update a Book**: A form to update details of an existing book.
        - **Delete a Book**: A button to delete a book from the store.
    - The frontend should be responsive and styled using **CSS** or **Bootstrap**.
2. **Backend (Node.js, Express, MongoDB):**
    - Create an **Express** API to handle the CRUD operations:
        - **GET /books**: Fetch all books from the MongoDB database.
        - **POST /books**: Add a new book to the database.
        - **PUT /books/**: Update an existing book by its ID.
        - **DELETE /books/**: Delete a book by its ID.
    - Use **Mongoose** to define the book schema and interact with MongoDB.
3. **MongoDB**:
    - The **Book** model should have the following fields:
        - Title (String)
        - Author (String)
        - Price (Number)
        - Description (String)
        - ISBN (String)
    - Store the book details in a MongoDB database.
4. **Routing & Communication**:
    - Set up **Axios** or **Fetch API** to communicate between the React frontend and Express backend.
    - Ensure that the frontend correctly handles server responses (e.g., displaying success/error messages).

### **Instructions:**

1. **Backend Setup (Node.js, Express, MongoDB):**
    - Initialize a new Node.js project and install the required dependencies (`express`, `mongoose`, `cors`, `dotenv`, etc.).
    - Create routes and controllers to handle CRUD operations.
    - Set up a MongoDB connection using **Mongoose**.
2. **Frontend Setup (React.js):**
    - Initialize a React app using **Create React App**.
    - Install Axios or use Fetch API for HTTP requests.
    - Create components for:
        - **Book List**: Displays all books.
        - **Book Form**: For adding and updating books.
        - **Book Details**: Displays detailed information about a book.
    - Implement routing using **React Router**.

### **Folder Structure:**

- **Backend:**
    
    ```bash
    bash
    Copy code
    backend/
    ├── controllers/
    │   └── bookController.js
    ├── models/
    │   └── book.js
    ├── routes/
    │   └── bookRoutes.js
    ├── app.js
    └── .env
    
    ```
    
- **Frontend (React):**
    
    ```java
    java
    Copy code
    frontend/
    ├── src/
    │   ├── components/
    │   │   ├── BookList.js
    │   │   ├── BookForm.js
    │   │   └── BookDetails.js
    │   ├── App.js
    │   ├── index.js
    ├── public/
    └── package.json
    
    ```
    

### **Submission:**

- Upload the project to GitHub (both frontend and backend).

### **Evaluation Criteria:**

1. **Functionality (30%)**: Full CRUD functionality is implemented.
2. **Code Structure (25%)**: Proper project structure with clean code.
3. **UI/UX (20%)**: Frontend is responsive and user-friendly.
4. **Database Integration (15%)**: Correct implementation of MongoDB using Mongoose.
