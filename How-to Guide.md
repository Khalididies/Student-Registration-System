# How-to Guide: Student Registration System

## Installation

1. **Clone the Repository:**
    ```bash
    git clone https://github.com/Khalididies/Student-Registration-System.git
    cd Student-Registration-System
    ```

2. **Create a `.env` file:**
    Create a file named `.env` in the project root and set the following environment variables:
    ```dotenv
    PORT=3000
    MONGO_URI=mongodb://localhost/your-database
    ```

3. **Install Dependencies:**
    ```bash
    npm install
    ```

## Running the Application

1. **Start MongoDB:**
    Ensure that MongoDB is running on your machine.

2. **Start the Application:**
    ```bash
    node index.js
    ```

    The server will start running on [http://localhost:3000](http://localhost:3000).

## Using Swagger UI for API Documentation

1. **Access Swagger UI:**
    Open your web browser and go to [http://localhost:3000/api/api-docs](http://localhost:3000/api-docs) to view the Swagger UI documentation.

2. **Explore Endpoints:**
    - Swagger UI provides an interactive interface for exploring and testing the available API endpoints.
    - Click on each endpoint to view details such as request parameters, request body, and response.

3. **Try Adding a Student:**
    - Navigate to the `/api/Student` endpoint.
    - Click on the "Try it out" button.
    - Provide sample data in the request body.
    - Click on the "Execute" button to send the request.
    - View the response to see if the student was added successfully.

## Using the Application

1. **Add a Student:**
    - **Endpoint:** `/api/Student`
    - **Method:** `POST`
    - **Request Body:**
        ```json
        {
          "name": "John Doe",
          "age": 25,
          "paymentStatus": true,
          "residence": "Cityville",
          "cityAccessPermit": true
        }
        ```
    - **Response:**
        ```json
        {
          "message": "Student registered successfully."
        }
        ```

    Example using `curl`:
    ```bash
    curl -X POST -H "Content-Type: application/json" -d '{"name": "John Doe", "age": 25, "paymentStatus": true, "residence": "Cityville", "cityAccessPermit": true}' http://localhost:3000/api/addStudent
    ```

## Dependencies

- Node.js
- Express.js
- Mongoose
- Body Parser
- Swagger JsDoc
- Swagger UI
