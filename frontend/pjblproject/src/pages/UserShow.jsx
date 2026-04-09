import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getUserById } from "../services/api";

import '../styles/UserShow.css'
import {
    Avatar,
    Box,
    Paper,
    Stack,
    Divider,
    useTheme,
    CircularProgress,
    Container,
    Card,
    CardContent,
    CardActions,
    Button,
    Typography
} from '@mui/material';

import {
    ArrowBack,
    Person, 
    Email, 
    CalendarToday, 
    LocationOn, 
    CreditCard, 
    VerifiedUser
} from '@mui/icons-material';

function UserShow() {

    // definir estados
    const {id} = useParams(); // pegar id dos parametros da URL
    const [loading, setLoading] = useState(false);
    const [user, setUser] = useState(null);

    const theme = useTheme();

    // montar componente
    useEffect(() => {
        console.log("Iniciando busca de usuário por ID");
        loadUser();
    }, [id]);

    // formatar a data de nascimento
    const formatDate = (date) => {
        return date ? date.split('T')[0] : '';
    }

    const loadUser = async () => {
        setLoading(true);

        try {
            const data = await getUserById(id);
            setUser(data);
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

    // se o usuário não for encontrado
    if (!user) return (

        <Container>
            <Typography variant="h5" sx={{marginBottom:10}}>
                Usuário não encontrado
            </Typography>

            <Link to="/">
                <Button variant="contained">Voltar</Button>
            </Link>

        </Container>

    );

     const infoItems = [
        { icon: <Person />, label: 'Nome completo', value: user.nome },
        { icon: <Email />, label: 'E-mail', value: user.email },
        { icon: <CalendarToday />, label: 'Ano de nascimento', value: formatDate(user.anoNascimento) },
        { icon: <LocationOn />, label: 'Endereço', value: user.endereco },
        { icon: <CreditCard />, label: 'CPF', value: user.cpf },
        { icon: <VerifiedUser />, label: 'ID do usuário', value: user.idusuario }
    ];

    return(
        <Container maxWidth="md" sx={{ py: 4 }}>
            <Card elevation={2} sx={{ borderRadius: 3 }}>
                <Paper elevation={0} sx={{ 
                    p: 3, 
                    textAlign: 'center', 
                    bgcolor: theme.palette.primary.main, 
                    color: 'white', 
                    borderRadius: '12px 12px 0 0' 
                }}>
                    <Avatar sx={{ 
                        width: 80, 
                        height: 80, 
                        mx: 'auto', 
                        mb: 2, 
                        bgcolor: 'white', 
                        color: theme.palette.primary.main 
                    }}>
                        <Person sx={{ fontSize: 40 }} />
                    </Avatar>
                    <Typography variant="h5" gutterBottom>
                        {user.nome}
                    </Typography>
                </Paper>

                {/* Conteúdo das informações */}
                <CardContent sx={{ p: 4 }}>
                    <Typography variant="h6" gutterBottom sx={{ mb: 3, fontWeight: 'bold' }}>
                        Informações detalhadas
                    </Typography>
                    
                    <Stack spacing={3}>
                        {infoItems.map((item, index) => (
                            <Box key={index}>
                                <Stack direction="row" spacing={2} alignItems="center">
                                    <Box sx={{ 
                                        color: theme.palette.primary.main,
                                        display: 'flex',
                                        alignItems: 'center',
                                        minWidth: 40
                                    }}>
                                        {item.icon}
                                    </Box>
                                    <Box flex={1}>
                                        <Typography variant="caption" color="textSecondary">
                                            {item.label}
                                        </Typography>
                                        <Typography variant="body1" fontWeight="medium">
                                            {item.value || 'Não informado'}
                                        </Typography>
                                    </Box>
                                </Stack>
                                {index < infoItems.length - 1 && <Divider sx={{ mt: 2 }} />}
                            </Box>
                        ))}
                    </Stack>
                </CardContent>
                
                <Divider />
                
                <CardActions sx={{ p: 3 }}>
                    <Button 
                        variant="contained" 
                        component={Link} 
                        to="/"
                        startIcon={<ArrowBack />}
                    >
                        Voltar
                    </Button>
                </CardActions>
            </Card>
        </Container>
    );
}

export default UserShow;