import { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { getUserById, addUser, updateUser } from "../services/api";

import {
    Box,
    CircularProgress,
    Container,
    TextField,
    Button,
    ButtonGroup,
    Card,
    CardContent,
    Alert,
    Typography
} from '@mui/material';

import {
    Save,
    Delete
} from '@mui/icons-material';

function UserForm() {

    // definir estados
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const navigate = useNavigate();
    const {id} = useParams();
    const isEditing = !!id; // verifica se o id é vazio para verificar se esta adicionando ou editando um 
    
    const [formData, setFormData] = useState({
        nome: '',
        email: '',
        anoNascimento: '',
        endereco: '',
        cpf: ''
    }, []);

    // caso seja uma edição, buscar usuario
    useEffect(() => {
        if (isEditing) {
            console.log("Buscando usuário por id para edição");
            loadUser();
        }
    }, [id]);

    // formatar a data de nascimento
    const formatDate = (date) => {
        return date ? date.split('T')[0] : '';
    }

    // buscar usuário por id
    const loadUser = async() => {
        setLoading(true);

        try {
            const data = await getUserById(id);
            setFormData({
                nome: data.nome,
                email: data.email,
                anoNascimento: formatDate(data.anoNascimento),
                endereco: data.endereco,
                cpf: data.cpf
            });
        }
        catch(error) {
            console.log(error);
            setError(error);
        }
        finally{
            setLoading(false);
        }
    };

    const attInput = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const submitForm = async(e) => {
        setLoading(true);

        try{
            if (isEditing) {
                await updateUser(id, formData);
                navigate('/', {state: {success: 'Usuário atualizado com sucesso!'}}); // voltar para a listagem
            }
            else {
                await addUser(formData);
                navigate('/', {state: {success: 'Usuário cadastrado com sucesso!'}}); // voltar para a listagem
            }

        }
        catch(error) {
            console.log(error);

        }
        finally {
            setLoading(false);
        }
    };

    // verificar se esta carregando
    if (loading) return (
        <Box sx={{ 
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                display: 'flex', 
                justifyContent: 'center', 
                alignItems: 'center'
            }}>
            <CircularProgress/>
        </Box>
    );

    return(
        <>

        {error && (
            <Container>
                <Alert severity="error">error</Alert>
            </Container>
        )}

        <Container>

            <div>
                <Typography variant="h4" sx={{mb:2}}>
                    <strong>{isEditing ? 'Editar Usuário' : 'Criar Usuário'}</strong>
                </Typography>
            </div>

            <Card>
                <CardContent>

                    <form onSubmit={submitForm}>
                        <div>
                            <TextField
                                fullWidth
                                margin="normal"
                                required
                                type="text"
                                name="nome"
                                label="Nome"
                                value={formData.nome}
                                onChange={attInput}
                            />
                        </div>
                        <div>
                            <TextField
                                fullWidth
                                margin="normal"
                                required
                                type="email"
                                name="email"
                                label="E-mail"
                                value={formData.email}
                                onChange={attInput}
                            />
                        </div>
                        <div>
                            <TextField
                                fullWidth
                                margin="normal"
                                required
                                type="text"
                                name="anoNascimento"
                                label="Ano de Nascimento"
                                value={formData.anoNascimento}
                                onChange={attInput}
                            />
                        </div>
                        <div>
                            <TextField
                                fullWidth
                                margin="normal"
                                required
                                type="text"
                                name="endereco"
                                label="Endereço"
                                value={formData.endereco}
                                onChange={attInput}
                            />
                        </div>
                        <div>
                            <TextField
                                fullWidth
                                margin="normal"
                                required
                                type="text"
                                name="cpf"
                                label="CPF"
                                value={formData.cpf}
                                onChange={attInput}
                            />
                        </div>

                        <div>
                            <ButtonGroup sx={{mt:2}}>
                                <Button type="submit" variant="contained" startIcon={<Save/>} disabled={loading}>
                                    Salvar    
                                </Button>
                                <Link to="/">
                                    <Button variant="contained" color="error" startIcon={<Delete/>}>Cancelar</Button>
                                </Link>
                            </ButtonGroup>
                        </div>
                    </form>
                </CardContent>
            </Card>

        </Container>
        </>
    )
}

export default UserForm;