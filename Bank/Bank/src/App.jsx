import "./App.css";
import { useState } from "react"; 
import style from "./style";
import Billing from "./components/Billing";
import CardDeal from "./components/CardDeal"
import Business from "./components/Business"
import Clients  from "./components/Clients"
import CTA from "./components/CTA"
import Stats from "./components/Stats"
import Footer from "./components/Footer"
import Testimonials from "./components/Testimonials"
import Hero from "./components/Hero"; 
import Nav from "./components/Nav"
import Getstarted from "./components/Getstarted";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="bg-black overflow-hidden w-full">
        <div className={`${style.paddingX}`}>
          <div className={"${style.boxwidth}"}>
            <Nav/>
          </div>
        </div>
        <div className={`${style.paddingX} ${style.flexCenter}`}>
          <div className={'${style.boxwidth}'}>
            <Hero />
          </div>
        </div>

        <div className={`${style.paddingX} ${style.flexCenter}`}>
          <div className={'${style.boxwidth}'}>
            <Stats />
            <Business />
            <Billing />
            <CardDeal />
            <Testimonials />
            <Clients />
            <CTA />
            <Footer />
            
            <Getstarted/>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
