"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const router = express_1.default.Router();
router.post("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { firstName, lastName, email, password } = req.body; //destructor
    const response = yield prisma.user.create({
        data: {
            firstName, lastName, email, password
        },
    });
    console.log(response);
    res.send({ response });
}));
router.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const allUser = yield prisma.user.findMany();
    res.json(allUser);
}));
router.get("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const userId = parseInt(req.params.id);
    const user = yield prisma.user.findUnique({
        where: {
            id: userId
        }
    });
    if (!user) {
        return res.status(404).json({ error: 'User not found' });
    }
    res.json(user);
}));
router.delete("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const userId = parseInt(req.params.id);
    const deleteUser = yield prisma.user.delete({
        where: {
            id: userId,
        }
    });
    res.json(deleteUser);
}));
router.put("/:id", (req, res) => {
    const userId = parseInt(req.params.id);
    // const (firstName,LastName,email,password)=req.body
});
// router.post("/tweet",async (req,res)=>{
//     const {title,content}=req.body    //destuctor
//     const response = await prisma.twitt.create({
//         data: {
//             title,content,userid
//         },
//       })
//       console.log(response);
//       res.send({response})
// })
exports.default = router;
