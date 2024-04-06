import Feature from "../../components/Feature";
import Pricing from "../../components/Pricing";
import Hero from "../../components/Hero";
import Layout from "../../components/Layout/Layout";
import SeoHead from "../../components/SeoHead";
import Projects from "../../components/Projects";
import Testimonials from "../../components/Home/Testimonials/Testimonials";

const CoursePage = () => {
  return (
    <>
      <SeoHead title="Skill Garage | Our Courses" />
      <Layout>
        <Hero />
        <Feature />
        <Projects />
        <Pricing />
        <Testimonials />
      </Layout>
    </>
  );
};

export default CoursePage;
