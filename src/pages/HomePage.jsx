import NavBar from "../components/Navbar";
import Login from "../components/Login";
import SearchBar from "../components/SearchBar";
import Footer from "../components/Footer";
import { useState } from "react";
export default function HomePage() {
  const [login, setLogin] = useState(false);
  return (
    <>
      <NavBar login={login} setLogin={setLogin}></NavBar>
      <Login login={login} setLogin={setLogin}></Login>
      <h1 className="text-center mt-24 mb-2 text-[40px] font-bold">
        Find your dream job now
      </h1>
      <h1 className="text-center font-medium text-[20px]">
        5 lakh+ jobs for you to explore
      </h1>
      <SearchBar></SearchBar>
      <Footer></Footer>
    </>
  );
}
