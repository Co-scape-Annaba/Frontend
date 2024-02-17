# StartMeUp - Frontend

## Description
This repository contains the frontend implementation for StartMeUp. The frontend is built using React.js and integrates with the backend APIs to provide a user-friendly interface for interacting with the application.

## Folder Structure
- **data:** Temporary data used during development.
- **public:** Contains images, icons, and fonts.
- **src:** Source code directory.
  - **config:** Axios instance configuration with server address prefix.
  - **pages:** Contains different pages of the project.
  - **routes:** Controls user access to various parts of the application.
  - **components:** Organized into subdirectories based on functionality.
    - **LandingPage:** Components for the landing page.
    - **Home:** Components for the main sections of the site, including:
      - **Dashboard:** Simulation and eLearning.
      - **Courses**
      - **Profile**
      - **Chatbot**
      - **UI**

## Dependencies
- @emotion/react: ^11.11.3
- @emotion/styled: ^11.11.0
- @mui/icons-material: ^5.15.10
- @mui/material: ^5.15.10
- axios: ^1.6.7
- formik: ^2.4.5
- framer-motion: ^11.0.5
- react: ^18.2.0
- react-circular-progressbar: ^2.1.0
- react-dom: ^18.2.0
- react-dropdown: ^1.11.0
- react-dropzone-uploader: ^2.11.0
- react-router-dom: ^6.22.0
- react-toastify: ^10.0.4
- yup: ^1.3.3

## Configuration
Configured with Tailwind CSS, including custom colors and fonts:

```js
theme: {
  extend: {
    colors: {
      primary: "#2F4F4E",
      secondary: "#DAA521",
      tertiary: "#FAEBD6",
      blueC: "#70B6C1",
    },
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
    },
  },
},
```

## Functionalities
- Dashboard
- Simulation
- Courses
- Profile
- Chatbot
- UI

## Usage
1. Clone this repository.
2. Install dependencies using `npm install`.
3. Update the configuration files as necessary.
4. Run the development server using `npm start`.

## Contact
For any inquiries or issues, please contact Raouf at abderraouf.abdallah1812@gmail.com.
