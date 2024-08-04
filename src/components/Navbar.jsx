import { useNavigate } from "react-router-dom";
import naukriLogo from "../assets/markup.svg";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

//login component to render the homepage

export default function NavBar({ login, setLogin }) {
  //usestate to access the lifecycle of the component and to store values to the state

  const [modalNumber, setModalNumber] = useState(-1);

  //useNavigate to navigate between pages without refetch

  let navigate = useNavigate();

  //useeffect to access the lifecycle of the component

  useEffect(() => {
    function setmyModal() {
      setModalNumber(-1);
    }
    document.addEventListener(`click`, () => {
      setmyModal();
    });
    return () => {
      document.removeEventListener(`click`, setmyModal);
    };
  }, []);
  return (
    <>
      <div className="flex py-4 justify-evenly bg-[#fff] shadow-lg">
        <div className="self-center flex w-[550px] justify-evenly text-[#474d6a] text-[15px]">
          <img
            onClick={() => {
              navigate(`/`);
            }}
            src={naukriLogo}
            className="self-center mr-2 cursor-pointer"
            alt=""
          />
          <div className="self-center relative">
            <button
              className="nav-buttons-border"
              onMouseEnter={() => setModalNumber(1)}
            >
              Jobs
            </button>
            <div
              className={`modal-closed box-content top-[55px] left-[-100px] absolute  nav-hover bg-white rounded-2xl shadow-xl  pt-4  pl-5 text-[14px] pb-4 ${
                modalNumber === 1 ? `open grid` : ``
              }`}
            >
              <div className="border-r-2">
                <ul>
                  <li className="font-semibold text-black">
                    Popular categories
                  </li>
                  <li className="mt-1.5 text-[13px] cursor-pointer hover:text-blue-600">
                    IT jobs
                  </li>
                  <li className="mt-1.5 text-[13px] cursor-pointer hover:text-blue-600">
                    Sales jobs
                  </li>
                  <li className="mt-1.5 text-[13px]  cursor-pointer hover:text-blue-600">
                    Marketing jobs
                  </li>
                  <li className="mt-1.5 text-[13px]  cursor-pointer hover:text-blue-600">
                    Data Science jobs
                  </li>
                  <li className="mt-1.5 text-[13px] cursor-pointer hover:text-blue-600">
                    Hr jobs
                  </li>
                  <li className="mt-1.5 text-[13px]  cursor-pointer hover:text-blue-600">
                    Engineering jobs
                  </li>
                </ul>
              </div>
              <div className="border-r-2">
                <ul>
                  <li className="font-semibold text-black">Jobs in demand</li>
                  <li className="mt-1.5 text-[13px] cursor-pointer hover:text-blue-600 ">
                    Fresher jobs
                  </li>
                  <li className="mt-1.5 text-[13px] cursor-pointer hover:text-blue-600">
                    MNC jobs
                  </li>
                  <li className="mt-1.5 text-[13px] cursor-pointer hover:text-blue-600">
                    Remote jobs
                  </li>
                  <li className="mt-1.5 text-[13px] cursor-pointer hover:text-blue-600">
                    Work from Home jobs
                  </li>
                  <li className="mt-1.5 text-[13px]  cursor-pointer hover:text-blue-600">
                    Walk-in jobs
                  </li>
                  <li className="mt-1.5 text-[13px] cursor-pointerhover:text-blue-600">
                    Part-time jobs
                  </li>
                </ul>
              </div>
              <div>
                <ul>
                  <li className="font-semibold text-black">Jobs by location</li>
                  <li className="mt-1.5 text-[13px] cursor-pointer hover:text-blue-600">
                    Jobs in Delhi
                  </li>
                  <li className="mt-1.5 text-[13px]  cursor-pointer hover:text-blue-600">
                    Jobs in Mumbai
                  </li>
                  <li className="mt-1.5 text-[13px] cursor-pointer hover:text-blue-600">
                    Jobs in Hyderabad
                  </li>
                  <li className="mt-1.5 text-[13px] cursor-pointer hover:text-blue-600">
                    Jobs in Chennai
                  </li>
                  <li className="mt-1.5 text-[13px] cursor-pointer hover:text-blue-600">
                    Jobs in Bangalore
                  </li>
                  <li className="mt-1.5 text-[13px] cursor-pointer hover:text-blue-600">
                    Jobs in Pune
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="self-center relative">
            <button
              className="nav-buttons-border"
              onMouseEnter={() => setModalNumber(2)}
            >
              Companies
            </button>
            <div
              className={`modal-closed box-content top-[55px] left-[-100px] absolute  nav-hover bg-white rounded-2xl shadow-xl  pt-4  pl-5 text-[14px] pb-4 ${
                modalNumber === 2 ? `open grid` : ``
              }`}
            >
              <div className="border-r-2">
                <ul>
                  <li className="font-semibold text-black ">
                    Explore categories
                  </li>
                  <li className="mt-1.5 text-[13px] cursor-pointer  hover:text-blue-600">
                    Unicorn
                  </li>
                  <li className="mt-1.5 text-[13px]  cursor-pointer hover:text-blue-600">
                    MNC
                  </li>
                  <li className="mt-1.5 text-[13px] cursor-pointer  hover:text-blue-600">
                    Product Based
                  </li>
                  <li className="mt-1.5 text-[13px] cursor-pointer hover:text-blue-600">
                    Startup
                  </li>
                  <li className="mt-1.5 text-[13px]  cursor-pointer hover:text-blue-600">
                    Internet
                  </li>
                </ul>
              </div>
              <div className="border-r-2">
                <ul>
                  <li className="font-semibold text-black ">
                    Explore Collections
                  </li>
                  <li className="mt-1.5 text-[13px] cursor-pointer hover:text-blue-600">
                    Top companies
                  </li>
                  <li className="mt-1.5 text-[13px] cursor-pointer hover:text-blue-600">
                    IT companies
                  </li>
                  <li className="mt-1.5 text-[13px]  cursor-pointer hover:text-blue-600">
                    Fintech companies
                  </li>
                  <li className="mt-1.5 text-[13px] cursor-pointer hover:text-blue-600">
                    Sponsored companies
                  </li>
                  <li className="mt-1.5 text-[13px]  cursor-pointer hover:text-blue-600">
                    Featured Companies
                  </li>
                </ul>
              </div>
              <div>
                <ul>
                  <li className="font-semibold text-black">Research Jobs</li>
                  <li className="mt-1.5 text-[13px] cursor-pointer  hover:text-blue-600">
                    Interview Questions
                  </li>
                  <li className="mt-1.5 text-[13px] cursor-pointer hover:text-blue-600">
                    Company salaries
                  </li>
                  <li className="mt-1.5 text-[13px] cursor-pointer  hover:text-blue-600">
                    Company reviews
                  </li>
                  <li className="mt-1.5 text-[13px] cursor-pointer hover:text-blue-600">
                    Salary calculator
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="self-center relative">
            <button
              className="nav-buttons-border"
              onMouseEnter={() => {
                setModalNumber(3);
              }}
            >
              Services
            </button>
            <div
              className={`modal-closed box-content top-[55px] left-[-100px] absolute  nav-hover bg-white rounded-2xl shadow-xl  pt-4  pl-5 text-[14px] pb-4 ${
                modalNumber === 3 ? `open grid` : ``
              }`}
            >
              <div className="border-r-2">
                <ul>
                  <li className="font-semibold text-black">Resume writing</li>
                  <li className="mt-1.5 text-[13px] cursor-pointer hover:text-blue-600">
                    Text resume
                  </li>
                  <li className="mt-1.5 text-[13px] cursor-pointer hover:text-blue-600">
                    Visual resume
                  </li>
                  <li className="mt-1.5 text-[13px] cursor-pointer hover:text-blue-600">
                    Resume critique
                  </li>
                  <li className="mt-5 text-[14px] font-semibold text-black">
                    Find jobs
                  </li>
                  <li className="mt-1.5 text-[13px] cursor-pointer hover:text-blue-600">
                    Internet
                  </li>
                  <li className="mt-1.5 text-[13px]  cursor-pointer hover:text-blue-600">
                    Jobs4u
                  </li>
                  <li className="mt-1.5 text-[13px] cursor-pointer hover:text-blue-600">
                    Priority applicant
                  </li>
                  <li className="mt-1.5 text-[13px] cursor-pointer  hover:text-blue-600">
                    Contact us
                  </li>
                </ul>
              </div>
              <div className="border-r-2">
                <ul>
                  <li className="font-semibold text-black">
                    Get recruiter's attention
                  </li>
                  <li className="mt-1.5 text-[13px] cursor-pointer hover:text-blue-600">
                    Resume display{" "}
                  </li>
                  <li className="mt-1.5 text-[13px] cursor-pointer hover:text-blue-600">
                    Job search booster
                  </li>
                  <li className="mt-5 text-[14px] font-semibold text-black">
                    Monthly subscription
                  </li>
                  <li className="mt-1.5 text-[13px] cursor-pointer hover:text-blue-600">
                    Basic and premium plans
                  </li>
                </ul>
              </div>
              <div>
                <ul>
                  <li className="font-semibold text-black">
                    Free resume resources
                  </li>
                  <li className="mt-1.5 text-[13px] cursor-pointer hover:text-blue-600">
                    Resume quality score
                  </li>
                  <li className="mt-1.5 text-[13px] cursor-pointer  hover:text-blue-600">
                    Resume samples
                  </li>
                  <li className="mt-1.5 text-[13px] cursor-pointer hover:text-blue-600">
                    Job letter samples
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="self-center text-[#474d6a] text-[14px] min-w-[180px] flex">
          <button
            className="button-navbar mr-2 text-[#275df5] border-[#275df5] hover:bg-slate-100"
            onClick={() => {
              setLogin(!login);
            }}
          >
            Login
          </button>
          <button
            className="button-navbar bg-[#f05537] border-[#f05537] text-white hover:opacity-60"
            onClick={() => navigate("/register")}
          >
            Register
          </button>
          <div
            className="self-center flex flex-col relative min-w-[150px] 
          "
          >
            <button
              className="text-[#474d6a] text-[15px] pl-4 ml-2 border-l-2"
              onMouseEnter={() => setModalNumber(4)}
              onMouseLeave={() => mouseleave()}
            >
              <span className="nav-buttons-border pb-1">For Employers</span>
              <span className="ml-2 relative top-0.5">
                <ion-icon name="chevron-down-outline"></ion-icon>
              </span>
            </button>
            <div
              className={`modal-closed h-[120px] pt-2  pl-4 box-content absolute  top-[55px] left-[20px] bg-[#fff] w-[150px]  text-left rounded-2xl shadow-xl  opacity-0 ${
                modalNumber === 4 ? `open` : ``
              }`}
              onMouseEnter={() => setModalNumber(4)}
            >
              <ul className="">
                <li className="mt-2.5 cursor-pointer hover:text-blue-600">
                  Buy online
                </li>
                <li className="mt-2.5 cursor-pointer hover:text-blue-600">
                  Naukri hiring suite
                </li>
                <li className="mt-2.5 cursor-pointer hover:text-blue-600">
                  Employer login
                </li>
              </ul>
            </div>
          </div>
          <Link
            to={"/bookmark"}
            className="self-center text-[15px] px-3 py-2 bg-blue-600 rounded-full text-white font-semibold ml-8"
          >
            Bookmarks
          </Link>
        </div>
      </div>
    </>
  );
}
