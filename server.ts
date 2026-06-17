import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI, Type } from "@google/genai";

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // AI Chatbot endpoint
  app.post("/api/chat", async (req, res) => {
    try {
      const { message, history } = req.body;
      const apiKey = process.env.GEMINI_API_KEY;

      if (!apiKey) {
        return res.status(500).json({ error: "Gemini API Key is missing. Check your settings." });
      }

      const ai = new GoogleGenAI({ apiKey });
      
      const systemInstruction = `You are a helpful, professional AI assistant for Hair4U Unisex Salon located in Sector 35D, Chandigarh. 
      You help customers with queries about services, pricing, hours, and booking.
      
      Business Info:
      Hair4U Unisex Salon
      Location: First Floor, SCO 287, Above Rajesh Sweets, Market 35 D, Sector 35D, Chandigarh – 160035
      Hours: Mon-Fri 9AM-8PM, Sat 9AM-9PM, Sun 10AM-7PM.
      
      Services & starting prices:
      - Haircuts: Women (₹200+), Men (₹100+), Kids (₹100+)
      - Color: Global (₹800+), Highlights (₹1500+)
      - Skin/Face: Facials (₹300+), Cleanup (₹200+), Waxing (₹200+)
      - Bridal: Basic (₹5000+), Premium (₹12000+)
      
      Be concise, polite, and warmly encourage them to book an appointment.
      Do not invent prices or services not listed here. If unsure, tell them to call the salon directly.
      
      IMPORTANT BOOKING INSTRUCTIONS:
      If the user wants to book an appointment, gently ask for exactly 4 details (if they haven't provided them already):
      1. Their Name
      2. The Service they want
      3. Date
      4. Time
      Gather these conversationally. Once you have ALL 4 details, DO NOT ask for anything else. IMMEDIATELY call the 'confirm_booking_via_whatsapp' tool to finalize the booking and send them to WhatsApp.`;

      // Convert history to format expected by the SDK if needed, 
      // but for simplicity in this proxy we'll just send the current message with system instructions.
      // A more robust implementation would use a chat session.
      const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: [
           ...history.map((msg: any) => ({
             role: msg.role === 'user' ? 'user' : 'model',
             parts: [{ text: msg.content }]
           })),
           { role: 'user', parts: [{ text: message }] }
        ],
        config: {
          systemInstruction,
          temperature: 0.7,
          tools: [{
            functionDeclarations: [
              {
                name: "confirm_booking_via_whatsapp",
                description: "Generates a WhatsApp link to confirm the booking. Call this ONLY after gathering customer name, requested service, date, and time.",
                parameters: {
                  type: Type.OBJECT,
                  properties: {
                    customerName: { type: Type.STRING, description: "Customer's full name" },
                    service: { type: Type.STRING, description: "Salon service to book" },
                    date: { type: Type.STRING, description: "Date of appointment" },
                    time: { type: Type.STRING, description: "Time of appointment" }
                  },
                  required: ["customerName", "service", "date", "time"]
                }
              }
            ]
          }]
        }
      });

      const functionCall = response.functionCalls?.[0];
      
      if (functionCall && functionCall.name === "confirm_booking_via_whatsapp") {
        const { customerName, service, date, time } = functionCall.args as any;
        const msg = `Hi Hair4U! I would like to confirm my appointment details:\nName: ${customerName}\nService: ${service}\nDate: ${date}\nTime: ${time}`;
        const waNumber = "919876543210"; // Placeholder salon number
        const waLink = `https://wa.me/${waNumber}?text=${encodeURIComponent(msg)}`;
        
        return res.json({ 
          reply: "Perfect! I have all your details. Please click the button below to send these details to our WhatsApp and confirm your booking.",
          action: {
            type: "whatsapp_redirect",
            url: waLink,
            label: "Confirm on WhatsApp"
          }
        });
      }

      res.json({ reply: response.text });
    } catch (error) {
      console.error("Chat API Error:", error);
      res.status(500).json({ error: "Failed to process chat request." });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
