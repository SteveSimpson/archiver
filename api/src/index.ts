import express, { Request, Response } from "express";
import fileRoutes from "./routes/fileRoutes";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use("/api", fileRoutes);

app.get("/", (req: Request, res: Response) => {
    console.log(`Request for /`)
    res.send("Welcome to the Node.js + TypeScript API!");
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
