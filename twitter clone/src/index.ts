import express from "express";
import userRoute from "./routes/user";
import loginRoute from "./routes/login";
import tweetRoute from "./routes/tweet";
import likeRoute from "./routes/like";
// import session from "express-session";
import cookieParser from "cookie-parser";
const PORT = 7000;
const app = express();
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set("view engine", "hbs");
app.get("/", (req, res) => {
    res.render("home");
})

//routes
app.use("/user", userRoute);
app.use("/login", loginRoute);
app.use("/tweet", tweetRoute);
app.use("/like", likeRoute);
app.listen(PORT, () => {
    console.log(`http://localho/9st:${PORT}`)   //to implement dynamic script, backtick is used
})