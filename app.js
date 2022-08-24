const express = require("express");
const path = require("path");

const checkListRouter = require("./src/routes/checklist");
const rootRouter = require("./src/routes/index");

require("./config/database");

const app = express();
app.use(express.json());

// habilitando o projeto para usar arquvios estáticos:
app.use(express.static(path.join(__dirname, "public")));

// setando o caminho das views, path = biblioteca, join pra juntar duas rotas, __dirname é o diretório do momento, em seguida o local onde deseja que busque as views
app.set("views", path.join(__dirname, "src/views"));
app.set("view engine", "ejs");

app.use("/", rootRouter);
app.use("/checklists", checkListRouter);

app.listen(3000, () => {
  console.log("Servidor iniciado");
});
