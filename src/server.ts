import  express  { type Request, type Response } from "express";
import { router } from "./routes/refrigerante.route.js";

const app = express();
const port = 3000;

app.use(express.json());
app.use('/refrigerantes', refrigeranteRouter);

app.listen(port, () => console.log(`Api rodando em http://localhost:${port}`));