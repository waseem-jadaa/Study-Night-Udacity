# Study Night

A modern flashcard application built with vanilla JavaScript, designed to help students optimize their study sessions through interactive card-based learning.

## Description

Study Night is a flashcard tool optimization project that provides an efficient way to create, manage, and study flashcards. The application features a clean, responsive interface with support for card sets, shuffling algorithms, and comprehensive testing capabilities.

## Features

- **Interactive Flashcards**: Create and study flashcards with flip animations
- **Card Sets Management**: Organize flashcards into different sets for better categorization
- **Shuffle Functionality**: Optimized shuffling algorithm for randomized study sessions
- **Responsive Design**: Works seamlessly across desktop and mobile devices
- **Navigation System**: Easy navigation between Home, About, and Card Sets pages
- **Form Validation**: Robust form handling for creating new cards and sets
- **End-to-End Testing**: Comprehensive Cypress tests for quality assurance
- **Build System**: Gulp-based build process with linting and formatting

## Technologies Used

- **Frontend**: Vanilla JavaScript (ES6+ modules)
- **Styling**: CSS with responsive design
- **Build Tools**: Gulp, Parcel
- **Testing**: Cypress (E2E), Mocha, Chai
- **Code Quality**: ESLint, Prettier

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/udacity/nd0011-c4-starter.git
   cd nd0011-c4-starter/starter
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

## Usage

### Development

Start the development server:
```bash
npm run gulp
```

This will start the Gulp build process and serve the application.

### Testing

Run end-to-end tests:
```bash
npm run cypress
```

Run unit tests:
```bash
npm run gulp:test
```

### Build

Build the project for production:
```bash
npm run gulp
```

## Project Structure

```
starter/
├── cypress/           # End-to-end tests
│   ├── e2e/          # Test specifications
│   ├── fixtures/     # Test data
│   └── support/      # Test utilities
├── data/             # Application data
├── src/              # Source code
│   ├── images/       # Image assets
│   └── *.js          # JavaScript modules
├── styles/           # CSS stylesheets
├── test/             # Unit tests
├── index.html        # Main HTML file
├── package.json      # Project configuration
├── gulpfile.js       # Build configuration
├── cypress.config.js # Cypress configuration
├── eslint.config.js  # ESLint configuration
└── README.md         # This file
```

## Key Components

- **Home Page**: Welcome screen with navigation
- **About Page**: Information about the application
- **Card Sets Page**: Manage and view flashcard sets
- **Cards Page**: Study individual flashcards
- **Create Card/Set**: Forms for adding new content
- **Shuffle Utility**: Algorithm for randomizing card order

## Testing

The project includes comprehensive testing:

- **Unit Tests**: Test individual functions like shuffling algorithm
- **E2E Tests**: Cypress tests for user workflows (forms, navigation)
- **Code Quality**: ESLint for code standards, Prettier for formatting

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests for new functionality
5. Ensure all tests pass
6. Submit a pull request

## License

This project is licensed under the MIT License - see the [LICENSE.txt](LICENSE.txt) file for details.

## Acknowledgments

- Udacity for the course content and starter project
- Open source community for the tools and libraries used

## Author

**Waseem Jadaa**

---

*This project is part of the Udacity Full Stack JavaScript Developer Nanodegree Program.*
