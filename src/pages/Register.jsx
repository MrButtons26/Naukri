import naukriLogo from "../assets/markup.svg";
import { useNavigate } from "react-router-dom";
import correct from "../assets/correct.png";
import RegisterForm from "./auth/RegisterForm";

//register component to render the homepage

export default function Register() {
  //useNavigate to navigate between pages without refetch
  const navigate = useNavigate();
  return (
    <>
      <div className="flex py-4 justify-start bg-[#fff] shadow-lg pl-6">
        <img
          onClick={() => {
            navigate(`/`);
          }}
          src={naukriLogo}
          className="self-center mr-2 cursor-pointer"
          alt=""
        />
      </div>
      <div className="flex  w-[100%] justify-center mt-16">
        <div className="w-[300px] flex flex-col text-gray-600 input-border box-border py-7 rounded-2xl shadow-2xl h-[400px]">
          <img
            className="max-w-[160px] self-center"
            src="//static.naukimg.com/s/7/104/assets/images/white-boy.a0d2814a.png"
            alt=""
          />
          <h1 className="mt-4 font-semibold text-black self-center">
            On registering,you can
          </h1>
          <div className="px-6">
            <div className="mt-2 text-[13px] self-center flex">
              <img src={correct} className="h-[16px] mt-0.5 mr-1" alt="" />
              <h1>Build your profile and let recruiters find you</h1>
            </div>
            <div className="mt-2 text-[13px] self-center flex">
              <img src={correct} className="h-[16px] mt-0.5 mr-1" alt="" />
              <h1>Get job postings delivered right to your email</h1>
            </div>
            <div className="mt-2 text-[13px] self-center flex">
              <img src={correct} className="h-[16px] mt-0.5 mr-1" alt="" />
              <h1>Find a job and grow your career</h1>
            </div>
          </div>
        </div>
        <div className="ml-10 flex flex-col px-10 py-10 w-[850px]  rounded-2xl shadow-2xl">
          <h1 className="text-[16px] font-semibold">
            Create your Naukri profile
          </h1>
          <h3 className="text-[13px] text-gray-600 mt-1">
            Search & apply to jobs from India's No.1 job site
          </h3>
          <RegisterForm />
        </div>
      </div>
      <footer className="mt-14 mb-16">
        <div className="flex justify-center text-blue-600 text-[12px]">
          <button className="px-3">About us</button>
          <button className="px-3 border-l-2">Contact Us</button>
          <button className="px-3 border-l-2">FAQs</button>
          <button className="px-3 border-l-2">Terms and Conditions</button>
          <button className="px-3 border-l-2">Report a Problem</button>
          <button className="px-3 border-l-2">Privacy Policy</button>
        </div>
        <h1 className="text-center text-[12px] mt-1.5 text-gray-600">
          All rights reserved &copy; Info Edge India Ltd.
        </h1>
      </footer>
    </>
  );
}
