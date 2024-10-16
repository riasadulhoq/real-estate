// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";

import Features from "./components/Features/Features";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <>
      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div> */}
      {/* <h1 className="text-red-700 font-bold text-center text-3xl m-7">
        Real Estate
      </h1> */}
      <Navbar></Navbar>
      <Hero></Hero>
      <Features></Features>
    </>
  );
}

export default App;
