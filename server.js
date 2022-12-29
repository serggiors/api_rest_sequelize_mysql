const express = require("express");
const apiRoutes = require("./routes");
const db = require("./models");
const app = express();

app.use(express.json()); //aceptar recibir y enviar json en nuestra api

app.use("/api", apiRoutes);

app.get("/api", (req, res) => {
	res.send("Bienvenido, Registrate!!");
})

db.sync().then(() => {
	console.log("Conectado a SQLite")
}).catch(() => {
	console.log("Hubo un error al conectarse a SQLite")
})

app.listen(3000, "localhost", () => {
	console.log("Servidor funcionando");
});