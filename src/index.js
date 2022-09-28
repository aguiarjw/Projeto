const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const produtosRoutes = require("./routes/produtos");

const app = express();
const port = process.env.PORT || 3000;

//middleware
app.use(express.json());
app.use('/api', produtosRoutes);


//routes
app.get("/", (req, res) => {
    res.send("Benvindo a nossa API Loja de Produtos");
});

//mongodb connection
mongoose
.connect(process.env.MONGODB_URI)
.then(() => console.log("Conectado a MongoDB Atlas"))
.catch((error) => console.error(error));

app.listen(port, () => console.log("Servidor funcionando en la puerta", port));
