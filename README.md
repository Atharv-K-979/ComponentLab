# ComponentLab - AI Component Generator

An AI-powered tool that helps developers and designers create beautiful, production-ready UI components in seconds. Simply describe your component, and our AI will generate clean, responsive code for you.

## Features

- 🤖 **AI-Powered Generation** - Leverage cutting-edge AI to generate components that match your exact specifications
- 🎨 **Multiple Frameworks** - Choose from HTML+CSS, Tailwind CSS, Bootstrap, or JavaScript
- 👀 **Live Preview** - See your component in action before copying the code
- 📝 **Code Editor** - Monaco editor with syntax highlighting for a great coding experience
- 📥 **Export & Download** - Copy code or download as HTML file
- 🎯 **Responsive Design** - All generated components are mobile-friendly and responsive

## Tech Stack

- **Frontend**: React, Vite, Tailwind CSS
- **Backend**: Node.js, Express
- **AI**: Google Gemini API
- **Editor**: Monaco Editor

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- A Google Gemini API key ([Get one here](https://ai.google.dev/))

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/ai-component-generator.git
cd ai-component-generator
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory:
```env
GEMINI_API_KEY=your_api_key_here
PORT=3001
```

4. Start the development servers:
```bash
# Start both backend and frontend
npm run dev:all

# Or start them separately:
npm run dev:server  # Backend server (port 3001)
npm run dev         # Frontend (port 5173)
```

5. Open your browser and navigate to `http://localhost:5173`

## Project Structure

```
ai-component-generator/
├── server.js              # Backend Express server
├── src/
│   ├── components/        # Reusable components
│   │   ├── Navbar.jsx
│   │   └── Footer.jsx
│   ├── pages/            # Page components
│   │   ├── Home.jsx
│   │   ├── ComponentMaker.jsx
│   │   ├── About.jsx
│   │   ├── ReadMore.jsx
│   │   └── NoPage.jsx
│   ├── App.jsx           # Main app component
│   └── main.jsx          # Entry point
└── package.json
```

## Usage

1. Navigate to the Component Maker page
2. Select your preferred framework
3. Describe your component in detail
4. Click "Generate" and wait for AI to create your component
5. Preview, copy, or download the generated code

## ⚠️ Usage Limits

### Demo Limitations

**This hosted version is a demo and uses a shared Gemini API key with strict limits.**

- **Daily Limit**: 4 AI generations per user (identified by IP address)
- **Reset**: Limits automatically reset every 24 hours
- **Purpose**: This demo is designed for portfolio/showcase purposes, not production use

### Why Limits Exist

- **Cost Management**: AI API calls have associated costs. Shared demo keys need protection from abuse
- **Fair Usage**: Limits ensure all users can experience the demo without one user consuming all resources
- **Portfolio Purpose**: This demo showcases the technology, not intended for production use

### Getting Unlimited Usage

For unlimited AI generations, clone the repository and run it locally with your own Gemini API key:

1. Clone the repository
2. Install dependencies: `npm install`
3. Create a `.env` file with your `GEMINI_API_KEY`
4. Run `npm run dev:all`
5. Enjoy unlimited usage with your own API key!

**Benefits of Local Setup:**
- ✅ Unlimited generations - No daily limits
- ✅ Full control - Your API key, your usage
- ✅ Privacy - All data stays on your machine
- ✅ Customization - Modify the code to fit your needs

## API Endpoints

### POST `/api/generate`
Generate a component using AI.

**Request Body:**
```json
{
  "prompt": "A modern login form with email and password fields",
  "framework": "html-tailwind"
}
```

**Response:**
```json
{
  "code": "<html>...</html>",
  "remaining": 3,
  "resetTime": 1234567890000
}
```

### GET `/api/rate-limit`
Check current rate limit status.

**Response:**
```json
{
  "remaining": 4,
  "resetTime": 1234567890000,
  "limit": 4
}
```

## Error Handling

The application handles various error scenarios:

- **429 (Quota Exceeded)**: Daily limit reached - shows modal with "Read More" option
- **503 (Resource Exhausted)**: Gemini API quota exceeded - shows friendly error message
- **500 (Server Error)**: General server errors with user-friendly messages

## Building for Production

```bash
npm run build
```

The built files will be in the `dist/` directory.

## Demo Limitations & Local Setup

### Public Demo

The hosted version of ComponentLab has limited usage to manage costs and ensure fair access for all visitors. The demo allows:

- 4 AI component generations per day per IP address
- Automatic reset every 24 hours
- Access to all features with usage restrictions

### Running Locally

To get unlimited usage:

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/ai-component-generator.git
   cd ai-component-generator
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env` file in the root directory:
   ```env
   GEMINI_API_KEY=your_api_key_here
   PORT=3001
   ```
   
   Get your free API key from [Google AI Studio](https://ai.google.dev/)

4. **Start the development servers**
   ```bash
   npm run dev:all
   ```

5. **Access the application**
   Open `http://localhost:5173` in your browser

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

MIT License - feel free to use this project for your own purposes.

## Support

For issues, questions, or contributions, please open an issue on GitHub.

---

**Note**: This project uses a shared API key for the demo. For production use or unlimited access, please set up your own API key as described in the "Getting Started" section.
