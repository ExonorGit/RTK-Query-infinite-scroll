import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "@/pages/Home";
import { PostPage } from "@/pages/PostPage";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<HomePage />}></Route>
        <Route path="post/:postId" element={<PostPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
