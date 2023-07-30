const express = require("express")
const app = express();
const cors = require('cors')
require('dotenv').config()

require('../src/drivers/connect-db')

app.use(express.json())
app.use(cors())


app.set("PORT", process.env.PORT || 4000);
app.listen(app.get("PORT"), () => {
  console.log(`Server deployed on port ${app.get("PORT")}`)
});

const webRoutes = require("./routes/web");
app.use("/", webRoutes);

