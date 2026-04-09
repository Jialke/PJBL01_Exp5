import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { getUser, delUser } from "../services/api";
import Card from "../components/Card";

import '../styles/UserList.css'
import { 
    Box,
    Container,
    Paper,
    CircularProgress,
    Table,
    TableContainer,
    TableCell,
    TableHead,
    TableBody,
    TableRow,
    Button,
    Alert,
    Typography
} from '@mui/material';

import {
    Add
} from '@mui/icons-material';

function UserList() {

    // definir estados
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);
    
    const location = useLocation();
    const [alertMessage, setAlertMessage] = useState(null);
    const [alertSeverity, setAlertSeverity] = useState('success');

    // montar componente
    useEffect(() => {
        console.log("Coletando dados dos usuários...");
        loadUser();
    }, []);

    // capturar mensagem de alerta (cadastro e edição)
    useEffect(() => {
        if (location.state?.success) {
            setAlertMessage(location.state.success);
            setAlertSeverity('success');

            // limpar o state
            setTimeout(() => {
                setAlertMessage(null);
            }, 3000);
        }
    }, [location]);

    // carregar usuários da API
    const loadUser = async() => {
        setLoading(true); // setar o loading para iniciar carregamento

        try {
            const data = await getUser();
            setUsers(data);
        } 
        catch (error) {
            console.log(error);
            setAlertMessage("Erro ao carregar os usuários");
            setAlertSeverity('error');
            setTimeout(() => {
                setAlertMessage(null);
            }, 3000);
        } 
        finally {
            setLoading(false); // fim do carregamento
        }
    };

    // deletar usuario
    const deleteUser = async(id) => {
        try {
            console.log("Deletando usuário")
            await delUser(id); // deleta o usuario
            loadUser(); // recarrega os usuários

            setAlertMessage("Usuário deletado com sucesso!")
            setAlertSeverity('success');
            setTimeout(() => {
                setAlertMessage(null);
            }, 3000);
        }
        catch (error) {
            console.log("Erro ao deletar usuário");

            setAlertMessage("Erro ao deletar usuário");
            setAlertSeverity('error');
            setTimeout(() => {
                setAlertMessage(null);
            }, 3000);
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

    // caso carregue, exibir na tela
    return(
        <>

            {alertMessage && (
                <Container sx={{mb:2}}>
                    <Alert severity={alertSeverity}>{alertMessage}</Alert>
                </Container>   
            )}
            
            <Container sx={{mb: 2}}>
                <div className="PageTitle">
                    <div className="TableTitle">
                        <Typography variant="h4">Usuários</Typography>
                    </div>
                    <div>
                        <Link to="/cadastrar">
                            <Button variant="outlined" startIcon={<Add/>}>Cadastrar</Button>
                        </Link>
                    </div>
                </div>

                <TableContainer component={Paper}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell><strong>ID</strong></TableCell>
                                <TableCell><strong>Nome</strong></TableCell>
                                <TableCell><strong>E-mail</strong></TableCell>
                                <TableCell><strong>Ações</strong></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {users.map(userData => <Card user={userData} onClickButton={deleteUser}></Card>)}
                        </TableBody>

                    </Table>
                </TableContainer>

            </Container>

            {users.length === 0 && (
                <Container>
                    <Typography variant="h5">
                        Nenhum usuário cadastrado
                    </Typography>
                </Container>
            )}
        </>
    )
}

export default UserList;