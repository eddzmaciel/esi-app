const express = require("express");
const app = express();

app.use(express.static("../vdm-panel/build"));

app.listen(3000, () => console.log("ESI-App running on port 3000...."));
