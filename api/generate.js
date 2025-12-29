import { GoogleGenAI } from "@google/genai";

// Extract code from response
function extractCode(response) {
  const match = response.match(/```(?:\w+)?\n?([\s\S]*?)```/);
  return match ? match[1].trim() : response.trim();
}

export default async function handler(req, res) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const apiKey = process.env.GEMINI_API_KEY;

    if (!apiKey) {
      return res.status(500).json({ 
        error: 'API_KEY_MISSING: GEMINI_API_KEY not configured' 
      });
    }

    const { prompt, framework } = req.body;
    
    if (!prompt || !framework) {
      return res.status(400).json({ 
        error: 'Missing required fields: prompt and framework' 
      });
    }

    const ai = new GoogleGenAI({
      apiKey: apiKey
    });
    
    // Generate component
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

    // Extract code
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
}

