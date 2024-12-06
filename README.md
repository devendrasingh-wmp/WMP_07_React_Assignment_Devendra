# React Component-Based Project

This project is a component-based React application. It includes the following features:

- **Navbar**: A navigation bar to switch between different pages.
- **Post Selector**: Allows users to select and view details of posts.
- **State & City Selector**: Enables users to select a state and a corresponding city from dropdown menus.

## Folder Structure

```
WMP_TR_PROJECT
├── public
├── src
│   ├── components
│   │   ├── navbar
│   │   │   ├── Navbar.jsx
│   │   │   └── Navbar.css
│   │   ├── post_selector
│   │   │   ├── PostDropdown.jsx
│   │   │   ├── PostDetails.jsx
│   │   │   └── PostSelector.jsx
│   │   ├── state_city_selector
│   │   │   ├── StateDropdown.jsx
│   │   │   ├── CityDropdown.jsx
│   │   │   ├── SelectionDisplay.jsx
│   │   │   └── StateCitySelector.jsx
│   ├── services
│   │   ├── api.services.js
│   │   └── apiConstants.js
│   ├── utils
│   │   └── constant.js
│   ├── App.js
│   ├── index.js
├── .gitignore
├── package.json
└── README.md
```

## Getting Started

### Prerequisites

- Node.js (>= 14.x)
- npm (>= 6.x) or yarn

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/devendrasingh-wmp/WMP_07_React_Assignment_Devendra.git
   ```

2. Navigate to the project directory:

   ```bash
   cd WMP_07_React_Assignment_Devendra
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

### Running the Application

To start the development server:

```bash
npm start
```

The application will be accessible at `http://localhost:3000`.

### Building for Production

To build the application for production:

```bash
npm run build
```

The build output will be located in the `build/` directory.

## Features

### Navbar

- File: `src/components/navbar/Navbar.jsx`
- Provides navigation to different parts of the application.

### Post Selector

- Files:
  - `PostDropdown.jsx`: Dropdown for selecting posts.
  - `PostDetails.jsx`: Displays details of the selected post.
  - `PostSelector.jsx`: Manages state and renders dropdown and details.

### State & City Selector

- Files:
  - `StateDropdown.jsx`: Dropdown for selecting states.
  - `CityDropdown.jsx`: Dropdown for selecting cities based on selected state.
  - `SelectionDisplay.jsx`: Displays the selected state and city.
  - `StateCitySelector.jsx`: Manages state and renders dropdowns and display.



## Key Learnings

- Understanding of React component structure and reusability.
- Integration of external APIs for dynamic data rendering.
- Managing application state using props and hooks.
- Styling React components using CSS modules.
- Building and running React applications for both development and production environments.
- Folder structuring for better scalability and maintainability.


