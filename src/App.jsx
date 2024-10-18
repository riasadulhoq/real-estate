import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import CTA from "./components/CTA/CTA";
import FAQ from "./components/FAQ/FAQ";
import Features from "./components/Features/Features";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Properties from "./components/Properties/Properties";
import Team from "./components/Team/Team";

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
      <Team></Team>
      <Contact></Contact>
      <Footer></Footer>
    </>
  );
}

export default App;
