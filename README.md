# New York Times Article Search

A modern web application built with React, TypeScript, and Vite that allows users to search and browse articles from The New York Times using their official API.

## 🚀 Features

- **Real-time Search**: Search articles from NYT database with instant results
- **Responsive Design**: Modern UI with Tailwind CSS that works on all devices
- **Article Preview**: View article headlines, abstracts, authors, and publication dates
- **Direct Links**: Click on any article to read the full story on NYT website
- **Clean Interface**: Professional design with hover effects and smooth transitions
- **Error Handling**: Graceful error handling with user-friendly messages

## 🛠️ Tech Stack

- **Frontend**: React 19 + TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS v4
- **HTTP Client**: Axios
- **Testing**: Vitest + Testing Library
- **API**: New York Times Article Search API

## 📋 Prerequisites

Before running this project, make sure you have:

- Node.js (version 16 or higher)
- npm or yarn package manager
- New York Times API key (get it from [NYT Developer Portal](https://developer.nytimes.com/get-started))

## ⚡ Quick Start

### 1. Clone the repository

```bash
git clone https://github.com/arizaakmal/new-york-times-search.git
cd new-york-times-search
```

### 2. Install dependencies

```bash
npm install
```

### 3. Setup environment variables

Create a `.env` file in the root directory:

```env
VITE_NYT_API_KEY=your_api_key_here
```

### 4. Start development server

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

## 📜 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm test` - Run tests with Vitest
- `npm run test:ui` - Run tests with UI
- `npm run test:run` - Run tests once

## 🧪 Testing

The project includes comprehensive functional tests for the NYT API integration:

```bash
# Run all tests
npm test

# Run API functional tests specifically
npm test api.optimized.test.ts
```

## 🌐 API Integration

This application uses the New York Times Article Search API v2. The API provides access to:

- Article headlines and abstracts
- Author information (bylines)
- Publication dates
- Direct links to full articles
- Metadata and keywords

### API Endpoints Used:

- **Search**: `GET /svc/search/v2/articlesearch.json`

## 📁 Project Structure

```
src/
├── components/
│   ├── ArticleList.tsx    # Displays search results
│   └── SearchBar.tsx      # Search input component
├── services/
│   └── api.ts            # NYT API integration
├── types/
│   └── article.ts        # TypeScript interfaces
├── test/
│   └── setup.ts          # Test configuration
└── App.tsx               # Main application component
```

## 🎨 UI Components

### SearchBar

- Real-time search with Enter key or click
- Loading states with spinner
- Input validation
- Responsive design

### ArticleList

- Card-based article display
- Clickable article cards
- Formatted publication dates
- Author information
- Hover effects and transitions

## 🔧 Configuration

### Environment Variables

- `VITE_NYT_API_KEY` - Your NYT API key (required)

### Tailwind CSS

The project uses Tailwind CSS v4 with custom configuration for:

- Custom color scheme (orange accent)
- Typography scales
- Shadow utilities
- Responsive breakpoints

## 🚀 Deployment

### Build for production:

```bash
npm run build
```

The built files will be in the `dist/` directory, ready for deployment to any static hosting service.

### Deploy to Vercel (recommended):

```bash
npx vercel --prod
```

Don't forget to add your `VITE_NYT_API_KEY` environment variable in your deployment platform.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [New York Times API](https://developer.nytimes.com/) for providing access to their article database
- [Vite](https://vitejs.dev/) for the fast build tool
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework
- [React](https://reactjs.org/) team for the amazing framework

## 📞 Support

If you have any questions or run into issues, please:

1. Check the [NYT API Documentation](https://developer.nytimes.com/docs/articlesearch-product/1/overview)
2. Review the test files for API usage examples
3. Open an issue in this repository

---

**Built with ❤️ by [arizaakmal](https://github.com/arizaakmal)**
