import AppRouter from "../router/AppRouter";
import Navbar from "../navbar/Navbar";
import Background from "./background/Background";

export default function Layout() {
  return (
    <>
      <Background />
      <Navbar />
      <AppRouter />

    </>
  );
}
