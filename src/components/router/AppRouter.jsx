import { Routes, Route } from "react-router";

export default function AppRouter() {
  return (
    <Routes>
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
