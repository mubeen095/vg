import styles from "./Companies.module.css";
import Image from "next/image";

import Heading from "../../Home/common/Heading/Heading";

import aivolved from "../../../public/assets/companiesx/aivolved.png";
import att from "../../../public/assets/companiesx/att.png";
import capgemini from "../../../public/assets/companiesx/capgemini.png";
import cocubes from "../../../public/assets/companiesx/cocubes.png";
import cosmofeed from "../../../public/assets/companiesx/cosmofeed.jpg";
import daimlertruck from "../../../public/assets/companiesx/daimlertruck.png";
import infosys from "../../../public/assets/companiesx/infosys.webp";
import intel from "../../../public/assets/companiesx/intel.png";
import microsoft from "../../../public/assets/companiesx/microsoft.png";
import musigma from "../../../public/assets/companiesx/musigma.png";
import ola from "../../../public/assets/companiesx/ola.png";
import tcs from "../../../public/assets/companiesx/tcs.png";
import uber from "../../../public/assets/companiesx/uber.png";
import vedantu from "../../../public/assets/companiesx/vedantu.png";

const Companies = () => {
  return (
    <>
      <div className={styles.companies_contianer}>
        <Heading
          heading={"Expert advice. Industry approval."}
        />
        <div className={styles.slider}>
          <div className={styles.slide_track}>
            <div className={styles.slide}>
              <Image src={ola} className={styles.comp_images} />
            </div>
            <div className={styles.slide}>
              <Image src={tcs} className={styles.comp_images} />
            </div>
            <div className={styles.slide}>
              <Image src={cosmofeed} className={styles.comp_images} />
            </div>
            <div className={styles.slide}>
              <Image src={daimlertruck} className={styles.comp_images} />
            </div>
            <div className={styles.slide}>
              <Image src={vedantu} className={styles.comp_images} />
            </div>
            <div className={styles.slide}>
              <Image src={uber} className={styles.comp_images} />
            </div>
            <div className={styles.slide}>
              <Image src={att} className={styles.comp_images} />
            </div>
          
            <div className={styles.slide}>
              <Image src={capgemini} className={styles.comp_images} />
            </div>
            <div className={styles.slide}>
              <Image src={intel} className={styles.comp_images} />
            </div>
            <div className={styles.slide}>
              <Image src={infosys} className={styles.comp_images} />
            </div>
            <div className={styles.slide}>
              <Image src={aivolved} className={styles.comp_images} />
            </div>
            <div className={styles.slide}>
              <Image src={cocubes} className={styles.comp_images} />
            </div>
            <div className={styles.slide}>
              <Image src={musigma} className={styles.comp_images} />
            </div>
            <div className={styles.slide}>
              <Image src={microsoft} className={styles.comp_images} />
            </div>
          </div>
                    <div className={styles.slide_track}>
            <div className={styles.slide}>
              <Image src={ola} className={styles.comp_images} />
            </div>
            <div className={styles.slide}>
              <Image src={tcs} className={styles.comp_images} />
            </div>
            <div className={styles.slide}>
              <Image src={cosmofeed} className={styles.comp_images} />
            </div>
            <div className={styles.slide}>
              <Image src={daimlertruck} className={styles.comp_images} />
            </div>
            <div className={styles.slide}>
              <Image src={vedantu} className={styles.comp_images} />
            </div>
            <div className={styles.slide}>
              <Image src={uber} className={styles.comp_images} />
            </div>
            <div className={styles.slide}>
              <Image src={att} className={styles.comp_images} />
            </div>
         
            <div className={styles.slide}>
              <Image src={capgemini} className={styles.comp_images} />
            </div>
            <div className={styles.slide}>
              <Image src={intel} className={styles.comp_images} />
            </div>
            <div className={styles.slide}>
              <Image src={infosys} className={styles.comp_images} />
            </div>
            <div className={styles.slide}>
              <Image src={aivolved} className={styles.comp_images} />
            </div>
            <div className={styles.slide}>
              <Image src={cocubes} className={styles.comp_images} />
            </div>
            <div className={styles.slide}>
              <Image src={musigma} className={styles.comp_images} />
            </div>
            <div className={styles.slide}>
              <Image src={microsoft} className={styles.comp_images} />
            </div>
          </div>
        </div>
       
        
      </div>
    </>
  );
};

export default Companies;
