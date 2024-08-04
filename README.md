# Naukri App

The Naukri App is a robust full-stack application engineered to deliver an extensive and personalized collection of Jobs. By leveraging the Rapid API for comprehensive Job search data retrieval, the app provides users with detailed information and an enriched data consumption experience. This platform integrates user authentication, advanced job exploration, and personalized bookmarking features, ensuring a seamless and engaging user experience.

## Deployment

- **Frontend:** :- https://willowy-melba-ced052.netlify.app

### Frontend Setup

1. **Clone the Repository:** Start by cloning the Naukri repository to your local machine.

   ```sh
   https://github.com/MrButtons26/Naukri.git
   ```
2. **Navigate to the Frontend Directory:** Move into the frontend directory of the project.

   ```sh
   cd vite-project
   ```
   
3. **Install Dependencies:** Install the necessary dependencies using npm.

   ```sh
   npm install
   ```

4. **Start the Application:** Run the frontend application.

   ```sh
   npm run dev
   ```

### Frontend Technologies 

- Vite
- HTML
- CSS
- Tailwind CSS
- React.js
- React Query
- Javascript
- React hook form
- React Router Dom
- axios
- FireBase
- Material UI
  
### Frontend Project Structure

- **public:** Images and SVG.
- **components:** Reusable components for React.
- **Pages:** Pages for different Routes of the website.

<pre>
|-- public
    |-- noImage.jpg
    |-- vite.svg
|-- src
    |-- assets 
       |-- correct.ong
       |-- react.svg
       |-- markup.svg
       |-- search.svg
    |-- Components
        |-- Companies
            |-- FeaturedCompanies
            |-- SponsoredCompanies
            |-- TopCompanies
        |-- Footer.jsx  
        |-- SearchBar.jsx  
        |-- Navbar.jsx  
        |-- Login.jsx 
    |-- Pages
        |-- auth
            |-- LoginForm.jsx
            |-- RegisterForm.jsx
        |-- Bookmark.jsx
        |-- HomePage.jsx
        |-- Register.jsx
        |-- Movies.jsx=
        |-- PageNotFound.jsx
        |-- Search.jsx
    |-- App.css
    |-- App.jsx 
    |-- index.css
    |-- main.jsx 
|-- .eslintrc.cjs
|--.gitignore
|-- index.html
|-- package.json
|-- package-lock.json
|-- postcss.config.js
|-- tailwind.cofig.js
|-- vite.config.js 
</pre>

## Contributing

Contributions are welcome! Please follow these steps to contribute:

1. Fork the repository.
2. Create a new branch for your feature (`git checkout -b feature/AmazingFeature`).
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`).
4. Push to the branch (`git push origin feature/AmazingFeature`).
5. Open a Pull Request.
