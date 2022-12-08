import { Router } from 'express';
import { appetizers, combos, nigiri, sushiEntrees, sushiRolls, teppanyaki } from '../data';

const router = Router();

router.get("/", (req, res) => {
    res.send(appetizers.concat(teppanyaki, combos, nigiri, sushiRolls, sushiEntrees));
})

router.get("/appetizers", (req, res) => {
    res.send(appetizers);
})

router.get("/teppanyaki", (req, res) => {
    res.send(teppanyaki);
})

router.get("/combos", (req, res) => {
    res.send(combos);
})

router.get("/nigiri", (req, res) => {
    res.send(nigiri);
})

router.get("/sushirolls", (req, res) => {
    res.send(sushiRolls);
})

router.get("/sushientrees", (req, res) => {
    res.send(sushiEntrees);
})

router.get("/:itemID", (req, res) => {
    const itemID = Number([req.params.itemID]);
    const item = appetizers.concat(teppanyaki, combos, nigiri, sushiRolls, sushiEntrees).find(menu => menu.id == itemID);
    res.send(item);
})

export default router;