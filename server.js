import express from 'express';
import cors from 'cors';
import { GoogleGenAI } from "@google/genai";
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Initialize Gemini AI
const apiKey = process.env.GEMINI_API_KEY;

if (!apiKey) {
  console.error('❌ GEMINI_API_KEY not found in environment variables');
  console.error('Please add GEMINI_API_KEY to your .env file');
  process.exit(1);
}

const ai = new GoogleGenAI({
  apiKey: apiKey
});

// Extract code from response
function extractCode(response) {
  const match = response.match(/```(?:\w+)?\n?([\s\S]*?)```/);
  return match ? match[1].trim() : response.trim();
}

// API endpoint to generate component
app.post('/api/generate', async (req, res) => {
  try {
    const { prompt, framework } = req.body;
    
    if (!prompt || !framework) {
      return res.status(400).json({ 
        error: 'Missing required fields: prompt and framework' 
      });
    }
    
    // Generate component - using exact same logic as original repo
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: `
     You are an experienced programmer with expertise in web development and UI/UX design. You create modern, animated, and fully responsive UI components. You are highly skilled in HTML, CSS, Tailwind CSS, Bootstrap, JavaScript, React, Next.js, Vue.js, Angular, and more.

Now, generate a UI component for: ${prompt}  
Framework to use: ${framework}  

Requirements:  
- The code must be clean, well-structured, and easy to understand.  
- Optimize for SEO where applicable.  
- Focus on creating a modern, animated, and responsive UI design.  
- Include high-quality hover effects, shadows, animations, colors, and typography.  
- Return ONLY the code, formatted properly in **Markdown fenced code blocks**.  
- Do NOT include explanations, text, comments, or anything else besides the code.  
- And give the whole code in a single HTML file.
      `,
    });

    // Extract code - using exact same method as original repo
    const code = extractCode(response.text);
    
    res.json({
      code: code
    });
    
  } catch (error) {
    console.error("Error generating component:", error);
    res.status(500).json({ 
      error: error.message || 'Something went wrong while generating code'
    });
  }
});

// Rate limit endpoint (for compatibility)
app.get('/api/rate-limit', (req, res) => {
  res.json({
    remaining: 999999,
    resetTime: Date.now() + (24 * 60 * 60 * 1000),
    limit: 999999,
    count: 0
  });
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    timestamp: new Date().toISOString()
  });
});

app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
  console.log(`✅ API endpoint: http://localhost:${PORT}/api/generate`);
}).on('error', (err) => {
  if (err.code === 'EADDRINUSE') {
    console.error(`❌ Port ${PORT} is already in use!`);
    console.error(`\nPlease either:`);
    console.error(`1. Kill the process using port ${PORT}:`);
    console.error(`   lsof -ti:${PORT} | xargs kill -9`);
    console.error(`2. Or change the PORT in your .env file`);
    process.exit(1);
  } else {
    console.error('❌ Server error:', err);
    process.exit(1);
  }
});
