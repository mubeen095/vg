import Layout from "../components/Staffing/Layout/Layout";
import Hero from "../components/Staffing/Hero/Hero.js";
import StaffingSolutions from "../components/Staffing/StaffingSolutions/StaffingSolutions.js";
import StaffingDomains from "../components/Staffing/StaffingDomains/StaffingDomains.js";
import OurProcess from "../components/Staffing/OurProcess/OurProcess.js";
import OurPerformance from "../components/Staffing/OurPerformance/Performance.js";
import OurClients from "../components/Staffing/OurClients/Companies.jsx";
import OurTestimonals from "../components/Staffing/OurTestimonals/OurTestimonals.js";
import ShareExperience from "../components/Staffing/ShareExperience/ShareExperience.js";
import SeoHead from "../components/SeoHead";

export default function Home() {
  return (
    <>
      <SeoHead title="Skill Garage | Staffing Solutions" />

      <Layout>
        <Hero />
        <StaffingSolutions />
        <StaffingDomains />
        <OurProcess />
        <OurPerformance />
        <OurClients />
        <OurTestimonals />
        <ShareExperience />
      </Layout>
    </>
  );
}
