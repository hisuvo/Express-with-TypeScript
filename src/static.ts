import express from "express";

const app = express();

app.use(
  express.static("public", {
    dotfiles: "deny",
    extensions: ["html"],
    index: "home.html",
    maxAge: "2d",
    redirect: true,
  })
);

app.listen(5000, () => {
  console.log("Server started");
});
