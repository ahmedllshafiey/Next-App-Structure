## Next.js App Structure

This repository showcases a basic structure for a Next.js application. The structure includes components for layout, pages, and document setup.

### Components

#### `Main.js`

The `Main` component is a wrapper for the main content of each page. It sets up the basic structure for the HTML document, including metadata, favicon, and the title of the page. It also wraps the content of each page in a `<div>`. This component is reusable across different pages.

#### `Website.js`

The `Website` component acts as a layout for each page. It wraps the `Main` component and passes the `Component` and `pageProps` as children. This layout structure ensures that each page shares a consistent structure and layout.

### Pages

#### `HomePage.js`

The `HomePage` component represents a simple home page for the app. It displays a welcome message and some introductory text. This component is a basic example of a page in the app.

### Document Setup

#### `Document.js`

The `Document` component extends Next.js' `NextDocument` class. It sets up the basic structure of the HTML document for the entire app. It includes the `Main` component within the `<body>` tag. This setup ensures that the `Main` component, and consequently the main content of each page, is rendered within the HTML structure.

### Running the App

To run this app:

1. Clone this repository to your local machine.
2. Navigate to the repository's directory.
3. Install dependencies using `npm install`.
4. Run the development server using `npm run dev`.

Open your browser and go to `http://localhost:3000` to see the home page of the app.

Feel free to expand upon this structure by adding more pages, components, and styles according to your project's requirements.
