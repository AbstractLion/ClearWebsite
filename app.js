const express = require("express");
const path = require("path");
const app = express();

app.get("/", (req, res) => {
	res.render(path.join(__dirname, "index.html"));
});

app.listen(process.env.PORT || 3000);
