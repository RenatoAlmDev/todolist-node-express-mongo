const express = require("express");
const path = require("path");

const checkListRouter = require("./src/routes/checklist");
const taskRouter = require("./src/routes/task");

const rootRouter = require("./src/routes/index");
const methodOverride = require("method-override");

require("./config/database");

const app = express();
app.use(express.json());
//middleware para quando chega requisição via formulário:
app.use(express.urlencoded({ extended: true }));
// passaremos mais um parâmetro pro override, porque ele atua diretamente sobre o POST, com o novo parâmetro ele vai atuar sobre o GET também:
app.use(methodOverride("_method", { methods: ["POST", "GET"] }));

// habilitando o projeto para usar arquvios estáticos:
app.use(express.static(path.join(__dirname, "public")));

// setando o caminho das views, path = biblioteca, join pra juntar duas rotas, __dirname é o diretório do momento, em seguida o local onde deseja que busque as views
app.set("views", path.join(__dirname, "src/views"));
app.set("view engine", "ejs");

app.use("/", rootRouter);
app.use("/checklists", checkListRouter);
app.use("/checklists", taskRouter.checklistDependent);
app.use("/tasks", taskRouter.simple);

app.listen(3000, () => {
  console.log("Servidor iniciado");
});
