"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_1 = __importDefault(require("./routes/user"));
const login_1 = __importDefault(require("./routes/login"));
const tweet_1 = __importDefault(require("./routes/tweet"));
const like_1 = __importDefault(require("./routes/like"));
// import session from "express-session";
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const PORT = 7000;
const app = (0, express_1.default)();
app.use((0, cookie_parser_1.default)());
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.set("view engine", "hbs");
app.get("/", (req, res) => {
    res.render("home");
});
//routes
app.use("/user", user_1.default);
app.use("/login", login_1.default);
app.use("/tweet", tweet_1.default);
app.use("/like", like_1.default);
app.listen(PORT, () => {
    console.log(`http://localho/9st:${PORT}`); //to implement dynamic script, backtick is used
});
