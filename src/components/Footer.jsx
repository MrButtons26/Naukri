import { useNavigate } from "react-router-dom";
import naukri from "../assets/markup.svg";
import { Link } from "react-router-dom";

//footer component to render the homepage

export default function Footer() {
  //useNavigate to navigate between pages without refetch

  const navigate = useNavigate();
  return (
    <>
      <div className="mt-20 flex gap-10 justify-center">
        <div
          className="ml-10 text-gray-400
        "
        >
          <img src={naukri} alt="" />
          <h1 className="text-black text-[14px] font-semibold mt-6 mb-2">
            connect with us
          </h1>
          <div className="flex gap-3">
            <Link to={"https://www.facebook.com/Naukri"} target="_blank">
              <ion-icon size="large" name="logo-facebook"></ion-icon>
            </Link>
            <Link
              to={"https://www.instagram.com/naukridotcom/"}
              target="_blank"
            >
              <ion-icon size="large" name="logo-instagram"></ion-icon>
            </Link>
            <Link to={"https://twitter.com/naukri"} target="_blank">
              <ion-icon size="large" name="logo-twitter"></ion-icon>
            </Link>
            <Link
              to={"https://www.linkedin.com/company/naukri.com"}
              target="_blank"
            >
              <ion-icon size="large" name="logo-linkedin"></ion-icon>
            </Link>
          </div>
        </div>
        <div className="footer-grid ml-8 text-gray-600">
          <div className="flex flex-col">
            <button className="self-start text-[13px] font-medium hover:text-blue-600 my-1">
              About us
            </button>
            <button className="self-start text-[13px] font-medium hover:text-blue-600 my-1">
              Careers
            </button>
            <button className="self-start text-[13px] font-medium hover:text-blue-600 my-1">
              Employer home
            </button>
            <button className="self-start text-[13px] font-medium hover:text-blue-600 my-1">
              Sitemap
            </button>
            <button className="self-start text-[13px] font-medium hover:text-blue-600 my-1">
              Credits
            </button>
          </div>
          <div className="flex flex-col">
            <button className="self-start text-[13px] font-medium hover:text-blue-600 my-1">
              Help center
            </button>
            <button className="self-start text-[13px] font-medium hover:text-blue-600 my-1">
              Summons/Notices
            </button>
            <button className="self-start text-[13px] font-medium hover:text-blue-600 my-1">
              Grievances
            </button>
            <button className="self-start text-[13px] font-medium hover:text-blue-600 my-1">
              Report issue
            </button>
          </div>
          <div className="flex flex-col">
            <button className="self-start text-[13px] font-medium hover:text-blue-600 my-1">
              Privacy policy
            </button>
            <button className="self-start text-[13px] font-medium hover:text-blue-600 my-1">
              Terms & Conditions
            </button>
            <button className="self-start text-[13px] font-medium hover:text-blue-600 my-1">
              Fraud alert
            </button>
            <button className="self-start text-[13px] font-medium hover:text-blue-600 my-1">
              Trust & safety
            </button>
          </div>
        </div>
        <div className="flex flex-col  px-7 input-border rounded-3xl shadow-2xl">
          <h1 className="text-black text-[14px] font-semibold mt-6 mb-0.5">
            Apply on the go
          </h1>
          <h1 className="text-[13px] text-gray-600">
            get real-time job updates on our App
          </h1>
          <div className="flex gap-3 mt-4 mb-5">
            <Link
              to={
                "https://play.google.com/store/apps/details?id=naukriApp.appModules.login&hl=en&utm_source=naukri&utm_medium=footer"
              }
              target="_blank"
            >
              <img
                className="h-[40px] max-w-[125px] cursor-pointer"
                src="https://static.naukimg.com/s/0/0/i/new-homepage/android-app_v1.png"
                alt=""
              />
            </Link>
            <Link
              to={`https://apps.apple.com/in/app/naukri-job-search-careers/id482877505`}
              target="_blank"
            >
              <img
                className="h-[40px] max-w-[125px] cursor-pointer"
                src="https://static.naukimg.com/s/0/0/i/download-app-link/AppstoreOneThemeHd.png"
                alt=""
              />
            </Link>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <div
          className="mt-10 pt-10 flex justify-center mb-20 w-[1100px]"
          style={{ "border-top": "1px solid #e8e6e6" }}
        >
          <h1 className="text-[22px] text-gray-600 font-light mr-5">
            info<span className="font-semibold">edge</span>
          </h1>
          <div className="flex flex-col text-[12px] text-gray-600 mr-20">
            <h1>All trademarks are the property of their respective owners</h1>
            <h1>All rights reserved © 2024 Info Edge (India) Ltd.</h1>
          </div>
          <h1 className="text-[13px] text-gray-600 mr-3 pt-2">
            Our businesses
          </h1>
          <div className="business-bar">
            <div className="flex business-bar-container">
              <Link to={"https://www.99acres.com/"} target="_blank">
                <img
                  className="max-h-[40px] max-w-[145px] cursor-pointer"
                  src="https://static.naukimg.com/s/0/0/i/new-homepage/footer-logos/nnacres.png"
                  alt=""
                />
              </Link>
              <Link to={"https://www.jeevansathi.com"} target="_blank">
                <img
                  className="max-h-[40px] max-w-[145px] cursor-pointer"
                  src="https://static.naukimg.com/s/0/0/i/new-homepage/footer-logos/jeevansathi.png"
                  alt=""
                />
              </Link>
              <Link to={"https://www.naukrigulf.com"} target="_blank">
                <img
                  className="max-h-[40px] max-w-[145px] cursor-pointer"
                  src="https://static.naukimg.com/s/0/0/i/new-homepage/footer-logos/ng.png"
                  alt=""
                />
              </Link>
              <Link to={"https://www.shiksha.com/"} target="_blank">
                <img
                  className="max-h-[40px] max-w-[145px] cursor-pointer"
                  src="https://static.naukimg.com/s/0/0/i/new-homepage/footer-logos/shiksha.png"
                  alt=""
                />
              </Link>
              <Link to={"https://www.iimjobs.com/"} target="_blank">
                {" "}
                <img
                  className="max-h-[40px] max-w-[145px] cursor-pointer"
                  src="https://static.naukimg.com/s/0/0/i/new-homepage/footer-logos/iimjobs.png"
                  alt=""
                />
              </Link>
              <Link to={"https://www.hirist.tech/"} target="_blank">
                {" "}
                <img
                  className="max-h-[40px] max-w-[145px] cursor-pointer"
                  src="https://static.naukimg.com/s/0/0/i/new-homepage/footer-logos/hirist.png"
                  alt=""
                />
              </Link>
              <Link to={"https://www.jobhai.com/"} target="_blank">
                {" "}
                <img
                  className="max-h-[40px] max-w-[145px] cursor-pointer"
                  src="https://static.naukimg.com/s/0/0/i/new-homepage/footer-logos/jobhai.png"
                  alt=""
                />
              </Link>
              <Link to={"https://www.codingninjas.com"} target="_blank">
                {" "}
                <img
                  className="max-h-[40px] max-w-[145px] cursor-pointer"
                  src="https://static.naukimg.com/s/0/0/i/new-homepage/footer-logos/coding_ninjas.png"
                  alt=""
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
