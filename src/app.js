const express = require("express");
const path = require("path");
const Usuario = require("./models/Usuario");
const app = express();

app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.set("PORT", process.env.PORT || 4000);
app.listen(app.get("PORT"), () => {
  console.log(`Server deployed on port ${app.get("PORT")}`);
});

console.log("eooo" + path.join(__dirname, "views"));

app.use("/", require("./routes/web"));

app.post("/login", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  const usuario = Usuario.validarNombre(username);
  
  if (usuario && Usuario.validarPassword(usuario, password)) {
    
    res.redirect("/admin");
  } else {
    
    res.redirect("/");
  }
});
