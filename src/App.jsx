import GlobalStyle from "./styles/GlobalStyles";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UsersPage from "./pages/UsersPage.jsx";
import UserPage from "./pages/UserPage.jsx";
import PageNotFound from "./pages/PageNotFound.jsx";

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route index element={<UsersPage />} />
          <Route path="/user/:id" element={<UserPage />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
