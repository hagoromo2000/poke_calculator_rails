import { BrowserRouter, Routes, Route } from "react-router-dom";
import Calculator from './components/Calculator';
import Header from './components/Header';
import IndexPosts from "./components/IndexPosts";
import NewPost from "./components/NewPost";


function App() {
  return (
    <>
      <div className="min-h-screen bg-blue-100 ... ">
        <BrowserRouter>
          <Header />
          <Routes>
            <Route exact path={`/`} element={<Calculator />} />
            <Route exact path={`/posts/new/`} element={<NewPost />} />
            <Route exact path={`/posts/`} element={<IndexPosts/>} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
