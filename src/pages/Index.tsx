
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Team from "@/components/Team";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import About from "@/components/about";
import Experience from "@/components/Expérience";
import Chatbot from "@/components/Chatbot";
import Marketing from "@/components/Marketing";
import './style.css';
import ERPPage from "@/components/ERPPage";
import PackLancementPage from "@/components/PackLancementPage";




const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <About/>
      <Experience/>
      <Services />
      <Testimonials />
      <Chatbot/>
      <ERPPage/>
      <PackLancementPage/>
      <Footer />
      
      
      
      
     
      
       {/*
      <Team/>
       <Marketing/>
       <Testimonials />
       <Contact /> 
       
      */}
    </div>
  );
};

export default Index;
