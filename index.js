const express = require("express");
const { Client } = require("pg");
const server = express();

const client = new Client({
	host: "db",
	user: "postgres",
	password: "8520",
	database: "docker",
	port: 5432
});

client
	.connect()
	.then(() => {
		console.log("Connected to DB");
	})
	.catch(err => {
		console.error("DB Not connected", err);
	});

const PORT = 3000;

server.listen(PORT, () => console.log(`Server running on ${PORT}`));

server.get("/ping", (req, res) => res.status(200).send("pang"));
