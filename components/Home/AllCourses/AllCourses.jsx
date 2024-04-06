import styles from "./AllCourses.module.css";
import Heading from "../common/Heading/Heading";
import Image from "next/image";
import artificial_intelligence from "../../../public/assets/courseCard/artificial-intelligence.png";
import machine_learning from "../../../public/assets/courseCard/machine-learning.png";
import cyber_security from "../../../public/assets/courseCard/cyber-security.png";
import devops from "../../../public/assets/courseCard/devops.png";
import oracle from "../../../public/assets/courseCard/oracle.png";
import aws from "../../../public/assets/courseCard/aws.png";
import java from "../../../public/assets/courseCard/java.png";
import lessons from "../../../public/assets/courseCard/lessons.png";
import level from "../../../public/assets/courseCard/level.png";
import rating4 from "../../../public/assets/courseCard/rating4.png";
import students from "../../../public/assets/courseCard/students.png";
import Link from "next/link";

const PopularCoursesSection = () => {
  return (
    <>
      <div className={styles.pop_course_section} id="courses">
        <Heading
          para1={"Explore Programs"}
          heading={"Our Courses"}
          para2={
            "Join our famous classes, the knowledge provided will definitely be useful for you."
          }
        />

        <div className={styles.pop_course_container}>

          {/* course card */}
          <div className={styles.course_card}>
            <div className={styles.course_image_container}>
              <Image
                src={artificial_intelligence}
                width={340}
                height={240}
                className={styles.course_image}
              />
            </div>
            <h1 className={styles.heading}>
              Learn Artificial Intelligence
            </h1>
            <div className={styles.stats_contianer}>
              <div className={styles.stats}>
                <Image src={lessons} />
                Lessons: 150+
              </div>
              <div className={styles.stats}>
                <Image src={students} />
                Projects : 4 Mini, 4 Major
              </div>
              <div className={styles.stats}>
                <Image src={level} />
                Basic to Advance Level
              </div>
            </div>
            <div className={styles.btn_rating}>
              <Link href={`/our-courses/artificial-intelligence`}>
                <button className={styles.btn}>Start Course {">"}</button>
              </Link>
              <Image src={rating4} />
            </div>
          </div>
          {/* course card */}

          {/* course card */}
          <div className={styles.course_card}>
            <div className={styles.course_image_container}>
              <Image
                src={machine_learning}
                width={340}
                height={240}
                className={styles.course_image}
              />
            </div>
            <h1 className={styles.heading}>
              Learn Machine Learning
            </h1>
            <div className={styles.stats_contianer}>
              <div className={styles.stats}>
                <Image src={lessons} />
                Lessons: 120
              </div>
              <div className={styles.stats}>
                <Image src={students} />
                Projects: 3 Mini, 4 Major
              </div>
              <div className={styles.stats}>
                <Image src={level} />
                Basic to Advance Level
              </div>
            </div>
            <div className={styles.btn_rating}>
              <Link href={`/our-courses/machine-learning`}>
                <button className={styles.btn}>Start Course {">"}</button>
              </Link>
              <Image src={rating4} />
            </div>
          </div>
          {/* course card */}

          {/* course card */}
          <div className={styles.course_card}>
            <div className={styles.course_image_container}>
              <Image
                src={cyber_security}
                width={340}
                height={240}
                className={styles.course_image}
              />
            </div>
            <h1 className={styles.heading}>
              Learn Cyber Security
            </h1>
            <div className={styles.stats_contianer}>
              <div className={styles.stats}>
                <Image src={lessons} />
                Lessons: 120+
              </div>
              <div className={styles.stats}>
                <Image src={students} />
                Projects: 5 Mini, 3 Major
              </div>
              <div className={styles.stats}>
                <Image src={level} />
                Basic to Advance Level
              </div>
            </div>
            <div className={styles.btn_rating}>
              <Link href={`/our-courses/cyber-security`}>
                <button className={styles.btn}>Start Course {">"}</button>
              </Link>
              <Image src={rating4} />
            </div>
          </div>
          {/* course card */}

          {/* course card */}
          <div className={styles.course_card}>
            <div className={styles.course_image_container}>
              <Image
                src={devops}
                width={340}
                height={240}
                className={styles.course_image}
              />
            </div>
            <h1 className={styles.heading}>
              Learn DevOps
            </h1>
            <div className={styles.stats_contianer}>
              <div className={styles.stats}>
                <Image src={lessons} />
                Lessons: 140+
              </div>
              <div className={styles.stats}>
                <Image src={students} />
                Projects: 3 Mini, 3 Major
              </div>
              <div className={styles.stats}>
                <Image src={level} />
                Basic to Advance Level
              </div>
            </div>
            <div className={styles.btn_rating}>
              <Link href={`/our-courses/learn-devops`}>
                <button className={styles.btn}>Start Course {">"}</button>
              </Link>
              <Image src={rating4} />
            </div>
          </div>
          {/* course card */}

          {/* course card */}
          <div className={styles.course_card}>
            <div className={styles.course_image_container}>
              <Image
                src={oracle}
                width={340}
                height={240}
                className={styles.course_image}
              />
            </div>
            <h1 className={styles.heading}>
              Learn Oracle
            </h1>
            <div className={styles.stats_contianer}>
              <div className={styles.stats}>
                <Image src={lessons} />
                Lessons: 1010+
              </div>
              <div className={styles.stats}>
                <Image src={students} />
                Projects: 4 Major
              </div>
              <div className={styles.stats}>
                <Image src={level} />
                Basic to Advance Level
              </div>
            </div>
            <div className={styles.btn_rating}>
              <Link href={`/our-courses/learn-oracle`}>
                <button className={styles.btn}>Start Course {">"}</button>
              </Link>
              <Image src={rating4} />
            </div>
          </div>
          {/* course card */}


          {/* course card */}
          <div className={styles.course_card}>
            <div className={styles.course_image_container}>
              <Image
                src={aws}
                width={340}
                height={240}
                className={styles.course_image}
              />
            </div>
            <h1 className={styles.heading}>
            Learn AWS
            </h1>
            <div className={styles.stats_contianer}>
              <div className={styles.stats}>
                <Image src={lessons} />
                Lessons: 180
              </div>
              <div className={styles.stats}>
                <Image src={students} />
                Projects: 4 Mini, 4 Major
              </div>
              <div className={styles.stats}>
                <Image src={level} />
                Basic to Advance Level
              </div>
            </div>
            <div className={styles.btn_rating}>
              <Link href={`/our-courses/learn-aws`}>
                <button className={styles.btn}>Start Course {">"}</button>
              </Link>
              <Image src={rating4} />
            </div>
          </div>
          {/* course card */}


          {/* course card */}
          <div className={styles.course_card}>
            <div className={styles.course_image_container}>
              <Image
                src={java}
                width={340}
                height={240}
                className={styles.course_image}
              />
            </div>
            <h1 className={styles.heading}>
            Learn Java
            </h1>
            <div className={styles.stats_contianer}>
              <div className={styles.stats}>
                <Image src={lessons} />
                Lessons: 190
              </div>
              <div className={styles.stats}>
                <Image src={students} />
                Projects: 4 Mini, 4 Major
              </div>
              <div className={styles.stats}>
                <Image src={level} />
                Basic to Advance Level
              </div>
            </div>
            <div className={styles.btn_rating}>
              <Link href={`/our-courses/learn-java`}>
                <button className={styles.btn}>Start Course {">"}</button>
              </Link>
              <Image src={rating4} />
            </div>
          </div>
          {/* course card */}


        </div>

      </div>
    </>
  );
};

export default PopularCoursesSection;
