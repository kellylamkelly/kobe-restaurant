import { Router } from 'express';
import { menu } from '../data';
import asyncHandler from 'express-async-handler';
import { MenuModel } from '../models/menu.model';

const router = Router();

router.get("/seed", asyncHandler(async (req, res) => {
    const menuCount = await MenuModel.countDocuments();
    if (menuCount > 0) {
        res.send("Seed is already done!");
        return;
    }

    await MenuModel.create(menu);
    res.send("Seed is done!");
}))

router.get("/", asyncHandler(async (req, res) => {
    const menus = await MenuModel.find();
    res.send(menus);
}))

router.get("/appetizers", asyncHandler(async (req, res) => {
    const menus = await MenuModel.find({category: "Appetizers"});
    res.send(menus);
}))

router.get("/teppanyaki", asyncHandler(async (req, res) => {
    const singles = await MenuModel.find({subcategory: "Single Choice"});
    const steaks = await MenuModel.find({subcategory: "Steaks"});
    const sumos = await MenuModel.find({subcategory: "Sumo Choice"});
    const menus = singles.concat(steaks, sumos);
    res.send(menus);
}))

router.get("/combos", asyncHandler(async (req, res) => {
    const doubles = await MenuModel.find({subcategory: "Double Choice"});
    const triples = await MenuModel.find({subcategory: "Triple Choice"});
    const menus = doubles.concat(triples);
    res.send(menus);
}))

router.get("/nigiri", asyncHandler(async (req, res) => {
    const menus = await MenuModel.find({subcategory: "Nigiri"});
    res.send(menus);
}))

router.get("/sushirolls", asyncHandler(async (req, res) => {
    const menus = await MenuModel.find({subcategory: "Sushi Rolls"});
    res.send(menus);
}))

router.get("/sushientrees", asyncHandler(async (req, res) => {
    const menus = await MenuModel.find({subcategory: "Sushi Entrées"});
    res.send(menus);
}))

router.get("/:itemID", asyncHandler(async (req, res) => {
    const item = await MenuModel.findById(req.params.itemID);
    res.send(item);
}))

export default router;