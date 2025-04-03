# Wanderlust - Travel Destination Listings

Wanderlust is a web application that allows users to browse, create, edit, and delete travel destination listings. The application is built with Node.js, Express, MongoDB, and EJS.

## Features

- View all travel destination listings
- View detailed information about a specific listing
- Create new listings
- Edit existing listings
- Delete listings

## Tech Stack

- **Frontend**: EJS templates, Bootstrap 5, CSS
- **Backend**: Node.js, Express
- **Database**: MongoDB with Mongoose ODM
- **Other Tools**: method-override for HTTP method overriding

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd Wanderlust
```

2. Install dependencies:
```bash
npm install
```

3. Make sure MongoDB is installed and running on your system.

4. Initialize the database with sample data (optional):
```bash
node init/index.js
```

5. Start the application:
```bash
# Using Node.js
node app.js

# Using Nodemon for development (auto-restart on file changes)
nodemon app.js
```

6. Open your browser and navigate to `http://localhost:8080`

## Development

For development, you can use nodemon to automatically restart the server when files change:

```bash
# Install nodemon globally (if not already installed)
npm install -g nodemon

# Run the application with nodemon
nodemon app.js
```


## Project Structure

- **app.js**: Main application file with Express configuration and routes
- **models/**: Database schemas
  - **listing.js**: Schema for travel listings
- **views/**: EJS templates
  - **includes/**: Reusable components (navbar, footer)
  - **layouts/**: Page layouts
  - **listings/**: Listing-specific pages (index, show, new, edit)
- **public/**: Static assets
  - **css/**: Stylesheets
- **init/**: Database initialization
  - **data.js**: Sample listing data
  - **index.js**: Script to populate database

## API Routes

- **GET /listings**: View all listings
- **GET /listings/new**: Form to create a new listing
- **POST /listings**: Create a new listing
- **GET /listings/:id**: View a specific listing
- **GET /listings/:id/edit**: Form to edit a listing
- **PUT /listings/:id**: Update a listing
- **DELETE /listings/:id**: Delete a listing

## Database

The application uses MongoDB with Mongoose. The main model is `Listing` which includes:
- Title
- Description
- Image (filename and URL)
- Price
- Location
- Country


## License

This project is licensed under the ISC License - see the LICENSE file for details.