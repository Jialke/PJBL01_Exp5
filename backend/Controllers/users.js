import { db } from "../db.js";

// GET para buscar todos os usuarios
export const getUsers = (_, res) => { // não recebe o primeiro parâmetro pois é um get
    const query = "SELECT * FROM usuarios"; // comando sql para a coleta de dados
    db.query(query, (err, data) => {
        if (err) return res.json(err); // caso de erro, retornar o json com o erro
        return res.status(200).json(data); // caso seja um sucesso, retorne o status 200 e os dados
    })
};

// GET para buscar um usuário especifico
export const getUserById = (req, res) => {
    const {id} = req.params;
    const query = "SELECT * FROM usuarios WHERE idusuario = ?";
    
    db.query(query, [id], (err, data) => {
        if (err) return res.json(err);
        return res.status(200).json(data[0]);
    });
};

// POST para adicionar usuarios
export const addUser = (req, res) => {
    const {nome, email, anoNascimento, endereco, cpf} = req.body;
    const query = "INSERT INTO usuarios (nome, email, anoNascimento, endereco, cpf) VALUES (?, ?, ?, ?, ?)";

    db.query(query, [nome, email, anoNascimento, endereco, cpf], (err, data) => {
        if (err) return res.json(err);
        return res.status(200).json({mensagem: "Usuário adicionado"});
    });
};

// PUT para editar usuarios
export const updateUser = (req, res) => {
    const {id} = req.params;
    const {nome, email, anoNascimento, endereco, cpf} = req.body;
    const query = "UPDATE usuarios SET nome=?, email=?, anoNascimento=?, endereco=?, cpf=? WHERE idusuario=?";

    db.query(query, [nome, email, anoNascimento, endereco, cpf, id], (err, data) => {
        if (err) return res.json(err);
        return res.status(200).json({mensagem: "Usuário atualizado"});
    })
};

// DELETE para deletar usuarios
export const delUser = (req, res) => {
    const {id} = req.params;
    const query = "DELETE FROM usuarios WHERE idusuario=?";

    db.query(query, [id], (err, data) => {
        if (err) return res.json(err);
        return res.status(200).json({mensagem: "Usuários deletado"})
    })
};