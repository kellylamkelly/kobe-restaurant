import express from "express";
import cors from "cors";
import menuRouter from './routers/menu.router';
import userRouter from './routers/user.router';

const app = express();
app.use(express.json());
app.use(cors({
    credentials:true,
    origin:["http://localhost:4200"]
}));

app.use("/api/menu", menuRouter);

app.use("/api/users", userRouter);

const port = 5000;
app.listen(port, () => {
    console.log("Website served on http://localhost:" + port);
});