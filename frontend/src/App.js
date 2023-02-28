import { BrowserRouter, Routes, Route } from "react-router-dom";
import Calculator from "./pages/Calculator";
import Header from "./components/Header";
import IndexPosts from "./pages/IndexPosts";
import NewPost from "./pages/NewPost";
import { AuthContextProvider } from "./context/AuthContext.tsx";
import axios from "axios";

axios.defaults.baseURL =
  process.env.REACT_APP_BASE_URL || "http://localhost:3001/api/v1";

function App() {
  return (
    <>
      <div className="min-h-screen bg-blue-50 ... ">
        <BrowserRouter>
          <AuthContextProvider>
            <Header />
            <Routes>
              <Route exact path={`/`} element={<Calculator />} />
              <Route exact path={`/posts/new/`} element={<NewPost />} />
              <Route exact path={`/posts/`} element={<IndexPosts />} />
            </Routes>
          </AuthContextProvider>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
