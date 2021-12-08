import AppRouter from "../router/AppRouter";
import Navbar from "../navbar/Navbar";
import Background from "./background/Background";
import NavbarDiv from "../navbar/NavbarDiv";

export default function Layout() {
  return (
    <>
      <Background />
      <Navbar />
      <NavbarDiv />
      <AppRouter />

    </>
  );
}
