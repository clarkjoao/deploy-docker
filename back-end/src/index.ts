import cors, { CorsOptions } from "cors";
import dotenv from "dotenv";
import express from "express";
import Routes from "./routes";

dotenv.config();

const corsOptions: CorsOptions = {
  origin: "*", //process.env.WEBAPP_URL || "http://http://127.0.0.1:5173",
  optionsSuccessStatus: 200,
  methods: ["GET", "HEAD", "PUT", "PATCH", "POST", "DELETE"],
};

const app = express();
const port = process.env.PORT || 3333;

app.use(express.json());
app.use(Routes);
app.use(cors(corsOptions));
app.options("*", cors(corsOptions));

//NOTE - Just to test deploy

let count = 0;

app.get("/", (req, res) => {
  return res.json({ count });
});

app.post("/", (req, res) => {
  count = req.body.count || count++;

  return res.json({ count });
});

app.listen(port, () => {
  console.log(`[server]: Server is running at ${port}`);
});
