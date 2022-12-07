import express from "express";
import cors from "cors";
import { appetizers, combos, nigiri, sample_users, sushiEntrees, sushiRolls, teppanyaki } from "./data";
import jwt from "jsonwebtoken";

const app = express();
app.use(express.json());
app.use(cors({
    credentials:true,
    origin:["http://localhost:4200"]
}));

app.get("/api/menu", (req, res) => {
    res.send(appetizers.concat(teppanyaki, combos, nigiri, sushiRolls, sushiEntrees));
})

app.get("/api/menu/appetizers", (req, res) => {
    res.send(appetizers);
})

app.get("/api/menu/teppanyaki", (req, res) => {
    res.send(teppanyaki);
})

app.get("/api/menu/combos", (req, res) => {
    res.send(combos);
})

app.get("/api/menu/nigiri", (req, res) => {
    res.send(nigiri);
})

app.get("/api/menu/sushirolls", (req, res) => {
    res.send(sushiRolls);
})

app.get("/api/menu/sushientrees", (req, res) => {
    res.send(sushiEntrees);
})

app.get("/api/menu/:itemID", (req, res) => {
    const itemID = Number([req.params.itemID]);
    const item = appetizers.concat(teppanyaki, combos, nigiri, sushiRolls, sushiEntrees).find(menu => menu.id == itemID);
    res.send(item);
})

app.post("/api/users/login", (req, res) => {
    const {email, password} = req.body;
    const user = sample_users.find(user => user.email === email && user.password === password);

    if (user) {
        res.send(generateTokenResponse(user))
    }
    else {
        res.status(400).send("Username or password is invalid!");
    }
})

const generateTokenResponse = (user: any) => {
    const token = jwt.sign({
        email: user.email, isAdmin: user.isAdmin
    }, "SomeRandomText", {
        expiresIn: "30d"
    });

    user.token = token;
    return user;
}

const port = 5000;
app.listen(port, () => {
    console.log("Website served on http://localhost:" + port);
})