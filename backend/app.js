import express from "express";
import cors from "cors";
import userRoutes from "./Routes/users.js"

const app = express();

app.use(express.json()); // usar padrão json
app.use(cors()); // usar o cors

app.use("/api", userRoutes); // chama as rotas de usuario da api

app.listen(8800);  // ouvir a porta 8800