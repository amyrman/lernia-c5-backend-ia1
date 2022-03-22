import express from "express";
import { engine } from "express-handlebars";
import { marked } from "marked";

const app = express();

// Add markdown support for use in rendering movie info from API
app.engine("handlebars", engine({
  helpers: {
    markdown: md => marked(md),
  },
}));

app.set("view engine", "handlebars");
app.set("views", "./templates");

// Express ROUTES
// app.get('/')

app.use(express.static('public'))

export default app;