import GlobalStyle from './styles/GlobalStyles';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import UsersPage from './pages/UsersPage.jsx';
import UserPage from './pages/UserPage.jsx';
import PageNotFound from './pages/PageNotFound.jsx';


function App() {
  console.log(import.meta.env.VITE_API_BASE_URL);
  return (
    <>
    <GlobalStyle />

     <BrowserRouter>
     <Routes>
      <Route index element={<UsersPage/>} />
      <Route path="/user/:id" element={<UserPage/>} />

       <Route path="*" element={<PageNotFound />} />
     </Routes>
     </BrowserRouter>
    </>
  )
}

export default App