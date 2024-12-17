import "./home.css"
import Hero from '@/components/hero/page';
import Projects from '../project/page';
import Contact from '../contact/page';
import About from "../about/page";
const Home1 = () => {
  return (
   <>
   <Hero />
   <About />
      <Projects/>
      <Contact />
   </>
  )
}

export default Home1
