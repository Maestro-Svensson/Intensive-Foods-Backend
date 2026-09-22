import express from "express";
import categories from "./routes/categories";

const app = express();

app.use("/api/categories", categories);



const PORT = 5678;

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));