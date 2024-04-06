import Link from "next/link";
import Image from "next/image";
import staffingimg from "../../../public/assets/staffing-home.png";

const myComponentStyle = {
  padding: '16px 28px',
  width: 'fit-content',
  color: '#fff',
  borderRadius: '8px',
  border: '1px solid #7f56d9',
  background: '#7f56d9',
  boxShadow: '0px 0px 0px 4px #f4ebff, 0px 1px 2px 0px rgba(16, 24, 40, 0.05)',
}

const Services = () => {
  return (
    <>
      <div className="h-full bg-right bg-cover bg-white-300">
        <div className="container pt-8 pb-8 md:pt-12 px-6 mx-auto flex flex-wrap flex-col md:flex-row items-center">
          <div className="flex flex-col w-full xl:w-3/6 justify-center lg:items-start overflow-y-hidden">
            <h1 className="my-4 text-3xl md:text-5xl text-purple-800 font-bold leading-tight text-center md:text-left slide-in-bottom-h1">
            Unlock Your Company's Potential with Our Unrivaled Staffing Services
            </h1>
            <p className="leading-normal text-base mb-5 text-center md:text-left slide-in-bottom-subtitle">
            Elevate your workforce and supercharge your business with Skill Garage – your gateway to unparalleled staffing solutions!
            </p>
            <p className="leading-normal text-base mb-8 text-center md:text-left slide-in-bottom-subtitle">
            When it comes to staffing services, there's no room for compromise. Join the ranks of satisfied clients who trust Skill Garage for their staffing needs. Experience the difference today!
            </p>

            <div style={myComponentStyle}>
                  <Link href="/staffing" >Hire Now</Link>
                </div>
          </div>

          <div className="w-full xl:w-3/6 py-0 overflow-y-hidden">
            <Image
              className="w-5/6 mx-auto lg:mr-0 slide-in-bottom"
              src={staffingimg}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
