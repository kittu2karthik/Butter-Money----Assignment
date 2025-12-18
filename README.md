# Butter Money -- Assignment

This project is a React-based user management dashboard that allows viewing, searching, sorting, and adding users. It interacts with an API for initial data and uses local storage for persisting new users.

## Setup Steps

1.  **Clone the repository** to your local machine.
2.  **Navigate** to the project directory.
3.  **Install dependencies**:

    ```bash
    npm install

    // if there are issues with the installation, run the following command:
    npm install --legacy-peer-deps
    ```

4.  **Environment Setup**:
    - Ensure you have a `.env` file in the root directory.
    - Define `VITE_API_BASE_URL` with the endpoint for the user API (e.g., `https://jsonplaceholder.typicode.com`).

## How to Run the Project

- **Development Mode**:
  Starts the local development server with hot-reloading.

  ```bash
  npm run dev
  ```

- **Production Build**:
  Builds the application for production.

  ```bash
  npm run build
  ```

- **Preview Build**:
  Locally preview the production build.
  ```bash
  npm run preview
  ```

## Features Implemented

- **User Listing**: Fetches and displays a list of users from an external API.
- **Search Functionality**: Real-time filtering of users by name/search term.
- **Sorting**: Ability to sort the user list (e.g., by Name, Email, Phone, etc.).
- **Add User**: A form to add new users with validation.
  - Includes fields for Name, Email, Phone, Address, Company, and Website.
  - Validates inputs (e.g., email format, required fields).
- **Local Storage Persistence**:
  - Newly added users are saved to the browser's Local Storage.
  - Custom users persist across page reloads.
- **Detailed User View**: Click on a user card to view detailed user information on a separate page (`/user/:id`).
- **Responsive Design**: The application, including the Header and User Grid, is fully responsive and optimized for mobile and desktop devices.
- **State Management**: Uses **Redux Toolkit** for efficient global state management (Users, Search Term, Sort Order, Loading/Error states).
- **Error Handling**: Graceful error messages when API requests fail, with fallback to local data.

## Assumptions Made

1.  **Data Persistence strategy**: The external API is treated as read-only for this assignment or specifically for the "Add User" feature. Therefore, new users created via the form are stored in `localStorage` and merged with the API data on the client side.
2.  **API Availability**: The application assumes the API is available at the URL provided in `VITE_API_BASE_URL`. If the API fails, it displays an error but still allows access to locally stored users.
3.  **Uniqueness**: It is assumed that email addresses or IDs should ideally be unique, though strict enforcement depends on the backend/local logic.
4.  **Routing**: The application uses client-side routing. Navigation to `/user/:id` assumes the ID is available in the loaded user list (either from API or Local Storage).
