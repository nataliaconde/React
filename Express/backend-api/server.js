import express from "express";
import recipeRoute from "./routes/recipeRoute.js";

const app = express();

app.use(express.json());
app.use("/", recipeRoute);

const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`Api is running on 'http://localhost:${PORT}'`));
