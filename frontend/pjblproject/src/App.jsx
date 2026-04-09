import './styles/App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import UserList from './pages/UsersList';
import UserShow from './pages/UserShow';
import UserForm from './pages/UserForm';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import { Box } from '@mui/material';

function App() {
  return (
    <>
    <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh'}}>
      {/* BrowserRouter para permitir criação de páginas multiplas */}
      <BrowserRouter>
          {/* menu cabeçalho */}
          <Header></Header>

          {/* definir e carregar rotas para as páginas */}
          <Routes>
             <Route path="/" element={<UserList />} />
             <Route path="/detalhes/:id" element={<UserShow />} />
             <Route path="/editar/:id" element={<UserForm />} />
             <Route path="/cadastrar" element={<UserForm />} />
          </Routes>

          {/* menu rodapé */}
          <Footer></Footer>
      </BrowserRouter>

    </Box>
    </>
  );
}

export default App;
