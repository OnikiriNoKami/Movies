import { Routes, Route } from "react-router";
import Trending from "../pages/Trending";

export default function AppRouter() {
  return (
    <Routes>
      <Route path='trending' element={<Trending/>}/>
      <Route
        path="*"
        element={
          <main style={{ padding: "1rem" }}>
            <p>Error 404, page not found!</p>
          </main>
        }
      />
    </Routes>
  );
}
