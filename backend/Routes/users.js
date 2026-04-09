import express from "express";
import { getUsers, getUserById, addUser, updateUser, delUser } from "../Controllers/users.js";

const router = express.Router(); // criar constante router

router.get("/users", getUsers); // rota /users com GET para buscar todos os usuarios
router.get("/users/:id", getUserById); // rota /users/:id com GET para buscar um usuario especifico por seu id
router.post("/users", addUser) // rota /users com POST para adicionar um usuario
router.put("/users/:id", updateUser) // rota /users/:id com PUT para atualizar um usuario por seu id
router.delete("/users/:id", delUser) // rota /users/:id com DELETE para deletar um usuario por seu id

export default router;