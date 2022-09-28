const express = require("express");
const produtosSchema = require("../models/produtos");

const router = express.Router();

// create producto
router.post("/produtos", (req, res) => {
const produto = produtosSchema(req.body);
produto
.save()
.then((data) => res.json(data))
.catch((error) => res.json({ message: error }));
});

// get all produtos
router.get("/produtos", (req, res) => {
    produtosSchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
    });

// get a produto
router.get("/produtos/:id", (req, res) => {
    const { id } = req.params;
    produtosSchema
    .findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
    });

// update a produto
router.put("/produtos/:id", (req, res) => {
    const { id } = req.params;
    const { nome, preco, stock } = req.body;
    produtosSchema
    .updateOne({ _id: id }, { $set: {nome, preco, stock}})
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
    });

// delete a produt
router.delete("/produtos/:id", (req, res) => {
    const { id } = req.params;
    produtosSchema
    .remove({ _id: id })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
    });
    
module.exports = router;