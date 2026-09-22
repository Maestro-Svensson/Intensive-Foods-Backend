import express from "express";
import categories from "./routes/categories";
import foods from "./routes/foods";

const app = express();

app.use("/api/categories", categories);
app.use("/api/foods", foods);



const PORT = 5678;

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));