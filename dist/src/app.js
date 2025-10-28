import "dotenv/config";
import express from "express";
import globalRouter from "./routes/index.js";
const buildServer = () => {
    const server = express();
    server.use(express.json());
    server.get("/", (req, res) => {
        res.status(202).json({
            success: true
        });
    });
    server.use("/app/v1", globalRouter);
    return server;
};
export default buildServer;
//# sourceMappingURL=app.js.map