import About from "./components/About/About";
import CTA from "./components/CTA/CTA";
import FAQ from "./components/FAQ/FAQ";
import Features from "./components/Features/Features";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Properties from "./components/Properties/Properties";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Hero></Hero>
      <Features></Features>
      <Properties></Properties>
      <About></About>
      <CTA></CTA>
      <FAQ></FAQ>
    </>
  );
}

export default App;
