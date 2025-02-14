require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const apiRouter = require("./server/routes");
const errorHandler = require("./server/middlewares/errorHandler");
const swaggerUI = require("swagger-ui-express");
const swaggerJSON = require("./server/docs/swagger.json");
const PORT = process.env.PORT || 4000;

// middlewares
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

/**
 * @Routes /api
 * entrypoint for all API routes
 */
app.use("/api", apiRouter);

app.use(errorHandler);

app.use("/docs", swaggerUI.serve, swaggerUI.setup(swaggerJSON));

app.listen(PORT, () => {
	console.log(`Listening on http://localhost:${PORT}`);
});
