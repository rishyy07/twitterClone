import express from "express";
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
const router = express.Router();

router.post("/", async (req, res) => {
    const { firstName, lastName, email, password } = req.body    //destructor
    const response = await prisma.user.create({
        data: {
            firstName, lastName, email, password
        },
    })
    console.log(response);
    res.send({ response })
})
router.get("/", async (req, res) => {
    const allUser = await prisma.user.findMany();
    res.json(allUser);
})
router.get("/:id", async (req, res) => {
    const userId = parseInt(req.params.id);
    const user = await prisma.user.findUnique({
        where: {
            id: userId
        }
    })
    if (!user) {
        return res.status(404).json({ error: 'User not found' });
    }
    res.json(user);
})
router.delete("/:id", async (req, res) => {
    const userId = parseInt(req.params.id);
    const deleteUser = await prisma.user.delete({
        where: {
            id: userId,
        }
    })
    res.json(deleteUser);
})
router.put("/:id", (req, res) => {
    const userId = parseInt(req.params.id);
    // const (firstName,LastName,email,password)=req.body

})







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








export default router;