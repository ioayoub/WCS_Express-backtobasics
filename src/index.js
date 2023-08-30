const express = require("express");

const gamesRoutes = require("./routes/games.route");
const musicsRoutes = require("./routes/musics.route");

const app = express();

const port = 8000;

app.use("/games", gamesRoutes);
app.use("/musics", musicsRoutes);

app.listen(port, (err) => {
  if (err) console.error("Something is wrong");

  console.log(`Server is listening on port ${port}`);
});
