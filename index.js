import express from "express";
import router from "./routes/start.js";
import cors from "cors";

const app = express();
const port = 3333;

app.use(cors());
app.use(express.json());
app.use("/", router);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
