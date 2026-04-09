// Configurar API de usuários

// URL
const URL = 'http://localhost:8800/api';

// handle para tratar as respostar da API
const handleResponse = async(res) => {

    console.log('Response status:', res.status); 

    if(!res.ok) {
        const err = await res.json();
        console.err('Erro da API:', err);
        throw new Error("Erro (" + err.status +") : " + err.message);
    }
    return res.json();
};

// GET para coletar usuários
export const getUser = async() => {
    const res = await fetch(`${URL}/users`)
    return handleResponse(res);
};

// GET para coletar um usuário especifico
export const getUserById = async(id) => {
    const res = await fetch(`${URL}/users/${id}`)
    return handleResponse(res);
};

// POST para criar usuários
export const addUser = async(userData) => {
    const res = await fetch(`${URL}/users`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(userData)
    });
    return handleResponse(res);
};

// PUT para atualizar usuário
export const updateUser = async(id, userData) => {
    const res = await fetch(`${URL}/users/${id}`, {
        method: 'PUT',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(userData)
    });
    return handleResponse(res);
};

// DELETE para deletar usuario
export const delUser = async(id) => {
    const res = await fetch(`${URL}/users/${id}`, {
        method: 'DELETE'
    });
    return handleResponse(res);
};