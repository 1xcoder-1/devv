# Portfolio Website

A modern, animated portfolio website built with React, TypeScript, and Three.js. This project showcases creative work with smooth animations, 3D graphics, and responsive design.

## 🌟 Features

- **Smooth Animations**: Powered by Framer Motion and Lottie for engaging user experience
- **3D Graphics**: Interactive 3D elements using Three.js and React Three Fiber
- **Responsive Design**: Fully responsive layout that works on all device sizes
- **Modern UI**: Clean, minimalist design with custom cursor interactions
- **Client-Side Routing**: Navigation between different portfolio sections
- **Loading Animations**: Custom loader with progress animation
- **Dark/Light Mode**: Adaptive color schemes for different sections

## 🛠️ Technologies Used

- **Frontend**: React 19, TypeScript
- **Styling**: Tailwind CSS, PostCSS, Autoprefixer
- **Animations**: Framer Motion, Lottie React
- **3D Graphics**: Three.js, React Three Fiber, React Three Drei
- **Routing**: React Router DOM v7
- **Device Detection**: React Device Detect
- **Testing**: Jest, React Testing Library
- **Build Tool**: Create React App (Webpack)

## 📁 Project Structure

```
src/
├── components/
│   ├── About Page/       # About section components
│   ├── ContactPage/      # Contact form and animations
│   ├── Home Page/        # Home page components
│   ├── Projects/         # Individual project pages
│   ├── Work Page/        # Work experience section
│   ├── Cursor.tsx        # Custom cursor component
│   ├── Loader.tsx        # Loading screen component
│   └── Navigation.tsx    # Navigation bar
├── context/
│   └── CursorContext.tsx # Context for cursor interactions
├── hooks/
│   └── useDimension.tsx  # Custom hook for window dimensions
├── routes/
│   ├── About.tsx         # About page route
│   ├── ArtConnection.tsx # ArtConnection project route
│   ├── Contact.tsx       # Contact page route
│   ├── CryptoBase.tsx    # CryptoBase project route
│   ├── Home.tsx          # Home page route
│   ├── NotFound.tsx      # 404 page route
│   ├── Wonder.tsx        # Wonder project route
│   └── Work.tsx          # Work page route
├── App.tsx               # Main application component
└── index.tsx             # Entry point

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```bash
   cd devv-main
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

### Available Scripts

- `npm start` - Runs the app in development mode at http://localhost:3000
- `npm test` - Launches the test runner in interactive watch mode
- `npm run build` - Builds the app for production to the `build` folder
- `npm run eject` - Removes the single build dependency (irreversible)

## 🎨 Key Components

### Custom Cursor
Interactive custom cursor that changes based on user interactions and context.

### Loader
Animated loading screen with progress indicator that appears during initial page load.

### Navigation
Dynamic navigation that adapts based on the current page, with external links to social profiles.

### Animations
All pages feature custom animations using Framer Motion for smooth transitions and engaging interactions.

## 📱 Responsive Design

The website is fully responsive with custom breakpoints:
- sm350: 350px
- sm500: 500px
- sm: 640px
- md: 768px
- lg: 1024px
- xl1100: 1100px
- xl: 1280px
- xxl: 1500px

## 🧪 Testing

The project includes unit tests using React Testing Library and Jest. Run tests with:
```bash
npm test
```

## 📦 Deployment

Build the project for production:
```bash
npm run build
```

The build artifacts will be stored in the `build/` directory, ready for deployment to any static hosting service.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.


## 👤 Author

Created with ❤️ by [1xcoder](https://github.com/1xcoder-1)
