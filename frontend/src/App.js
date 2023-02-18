import { BrowserRouter, Routes, Route } from "react-router-dom";
import Calculator from './components/Calculator';
import Header from './components/Header';
import NewPost from "./components/NewPost";


function App() {
  return (
    <div className="bg-gradient-to-r from-green-200 to-blue-200 ... ">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path={`/`} element={<Calculator />} />
          <Route path={`/posts/new/`} element={<NewPost />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
