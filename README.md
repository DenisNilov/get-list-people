# Get List People

A JavaScript web application that fetches and displays random people data using the RandomUser API. The application follows the MVP (Model-View-Presenter) architectural pattern and allows users to browse through different sets of random people.

## Features

- 🎲 Fetches random people data from RandomUser API
- 👥 Displays 50 random US users at a time
- 🔄 "Next Person" button to load new set of people
- 📱 Responsive design
- 🏗️ Clean MVP architecture
- ⚡ Modern JavaScript (ES6+) with Webpack bundling

## Architecture

The application follows the MVP (Model-View-Presenter) pattern:

- **Model** (`model.js`): Manages data and business logic, implements Observer pattern
- **View** (`view.js`): Handles UI rendering and user interactions
- **Presenter** (`presenter.js`): Coordinates between Model and View
- **API** (`api.js`): Handles external API communication
- **Template** (`template.js`): Manages DOM manipulation and HTML generation

## Project Structure

```
├── main.js              # Application entry point
├── api.js               # API service for RandomUser API
├── model.js             # Data model with Observer pattern
├── presenter.js         # Presenter layer
├── view.js              # View component
├── template.js          # Template and DOM utilities
├── webpack.config.js    # Webpack configuration
├── package.json         # Dependencies and scripts
├── public/
│   ├── index.html       # HTML template
│   └── css/
│       └── style.css    # Styles
└── build/               # Built files (generated)
```

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd Get-list-people
```

2. Install dependencies:
```bash
npm install
```

### Development

Start the development server:
```bash
npm start
```

This will:
- Start webpack dev server
- Open the application in your default browser
- Enable hot reloading for development

The application will be available at `http://localhost:8080`

### Production Build

Create a production build:
```bash
npm run build
```

The built files will be generated in the `build/` directory.

## API Integration

The application uses the [RandomUser API](https://randomuser.me/) to fetch random user data:

- **Endpoint**: `https://api.randomuser.me/`
- **Parameters**: 
  - `nat=US`: Only US nationality users
  - `results=50`: Fetch 50 users per request

## Browser Support

The application supports:
- Last 2 versions of major browsers
- No Internet Explorer 11 or below
- No Opera Mini
- Browsers with >0.25% market share

## Technologies Used

- **JavaScript (ES6+)**: Modern JavaScript features
- **Webpack**: Module bundling and development server
- **Babel**: JavaScript transpilation for browser compatibility
- **HTML5 & CSS3**: Modern web standards
- **RandomUser API**: External data source

## Development Tools

- **ESLint**: Code linting and style checking
- **Webpack Dev Server**: Development server with hot reloading
- **Babel**: ES6+ to ES5 transpilation
- **Copy Webpack Plugin**: Asset copying
- **HTML Webpack Plugin**: HTML template processing

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the ISC License.

## Known Issues

- The application currently has a template rendering issue that needs to be addressed
- Error handling could be improved for network failures

## Future Enhancements

- Add search and filter functionality
- Implement pagination
- Add user details modal
- Improve error handling and loading states
- Add unit tests
- Implement responsive design improvements