import Banner from "../components/Banner";
import Skills from "../components/Skills";
import "../../src/index.css";
import Form from "../components/Form";
import Works from "../components/Works";
import { About } from "../components/About";
import { Header } from "../components/Header";


const Home = () => {

  return (
    <div className="poppins-regular">
      <Banner></Banner>
      <Skills></Skills>
      <Works></Works>
      <About></About>
      <Form></Form>
    </div>
  );
};

export default Home;
