import Layout from "../components/Home/LayoutTwo/Layout";
import AllCourses from "../components/Home/AllCourses/AllCourses";
import SeoHead from "../components/SeoHead";

export default function Home() {
  return (
    <>
      <SeoHead title="Skill Garage | Our Courses" />

      <Layout>
        <AllCourses />
      </Layout>
    </>
  );
}
