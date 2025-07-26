import { Layout } from "./components/Layout";
import { AboutUs } from "./components/sections/AboutUs";
import { Brands } from "./components/sections/Brands";
import { CTA } from "./components/sections/CallToAction";
import { Hero } from "./components/sections/Hero";
import { Pricing } from "./components/sections/Pricing";
import { Services } from "./components/sections/Services";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;


function App() {
  return (
    <Layout title="PixelAI">
      <Hero />
      <Brands />
      <Services />
      <AboutUs />
      <Pricing />
      <CTA />
    </Layout>
  );
}

export default App;
