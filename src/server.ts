
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import routes from "./routes";
import swaggerUi from "swagger-ui-express";
import swaggerJsdoc from "swagger-jsdoc";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "CRM API",
      version: "1.0.0",
      description: "API para gerenciamento de clientes"
    }
  },
  apis: ["./src/routes/*.ts"]
};

const swaggerSpec = swaggerJsdoc(swaggerOptions);

app.use(
  "/api-docs",
  swaggerUi.serve,
  swaggerUi.setup(swaggerSpec)
);

app.get("/", (req, res) => {
  res.json({
    status: "online",
    docs: "/api-docs"
  });
});

app.use(routes);

app.listen(process.env.PORT || 4000, () => {
  console.log("Servidor rodando");
});

app.get('/', (req, res) => {
    res.send('API do CRM está online e rodando com sucesso!');
});