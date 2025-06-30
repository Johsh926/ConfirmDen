require("dotenv").config();
const express = require("express");
const { connectToMongoDB } = require("./database");
const http = require("http");
const {Server} = require("socket.io")
const { GoogleGenerativeAI } = require("@google/generative-ai");

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY); 
const model = genAI.getGenerativeModel({ model: "gemini-2.5-pro-exp-03-25" });

const app = express();
app.use(express.json());

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  }
})

io.on("connection", (socket) => {
    console.log(`User Connected`)

    socket.on("send_message", async (data) => {
        try {
            // Extract message text whether it's an object or string
            const messageText = data?.message || String(data);
            
            const prompt = `Verify the legitimacy of "${messageText}" and provide major points`;
            const result = await model.generateContent(prompt);
            const AIresponse = await result.response.text();
            
            socket.emit("receive_message", AIresponse);
        } catch (error) {
            socket.emit("error", "Analysis failed");
        }
    });
    
}); 

const router = require("./routes")
app.use("/api", router)

const port = process.env.PORT || 5000;

const startServer = async () => {
    await connectToMongoDB();
    server.listen(3001, () => {
        console.log("Server is running at 3001")
      })
    app.listen(port, () => {
        console.log(`Server is listening on http://localhost:${port}`);
    });
};
startServer();