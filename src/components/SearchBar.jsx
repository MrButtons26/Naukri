import { useState } from "react";
import search from "../assets/search.svg";
import TopCompanies from "./companies/TopCompanies";
import FeaturedCompanies from "./companies/FeaturedCompanies";
import SponsoredCompanies from "./companies/SponsoredCompanies";
import { useNavigate } from "react-router-dom";
export default function SearchBar() {
  const [activeDrop, setActiveDrop] = useState(false);
  const navigate = useNavigate();
  const [designation, setDesignation] = useState("");
  const [experience, setExperience] = useState("");
  const [location, setLocation] = useState("");
  return (
    <>
      <div className="mt-16 flex justify-center">
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
          action=""
          className="searchbar"
        >
          <img src={search} className="inline mr-3" alt="" />
          <input
            value={designation}
            onChange={(e) => {
              setDesignation(e.target.value);
            }}
            className="border-r-2 w-[322px] outline-none pr-3"
            type="text"
            placeholder="Enter skills / designations / companies"
          />
          <input
            value={experience}
            type="text"
            placeholder="Select experience"
            className="ml-3 w-[155px] outline-none"
          />
          <button
            className="text-gray-400 mr-3 relative z-[3]"
            onClick={() => setActiveDrop(!activeDrop)}
          >
            <ion-icon name="chevron-down-outline"></ion-icon>
            <div
              className={` box-content drop-down ${
                activeDrop === true ? `drop-down-active` : ``
              }`}
            >
              <ul className="box-content">
                <li
                  className="py-2 px-2 text-[14px] text-black hover:bg-gray-100 "
                  onClick={() => {
                    setExperience("Fresher");
                  }}
                >
                  Fresher{" "}
                  <span className=" text-[12px] text-gray-600">
                    (less than 1 year)
                  </span>
                </li>
                {Array.from({ length: 30 }, (el, i) => (
                  <li
                    onClick={() => {
                      setExperience(`${i + 1} years`);
                    }}
                    className="py-2 px-[19px] mt-1 text-[14px] text-left text-black hover:bg-gray-100"
                    key={i}
                  >
                    {i + 1} years
                  </li>
                ))}
              </ul>
            </div>
          </button>
          <input
            value={location}
            onChange={(e) => {
              setLocation(e.target.value);
            }}
            type="text"
            placeholder="Enter location"
            className="w-[124px] outline-none pl-3 border-l-2"
          />
          <button
            className="ml-[20px] bg-blue-600 py-1.5 px-6 rounded-3xl font-semibold text-white text-[16px]"
            onClick={() => {
              designation &&
                experience &&
                location &&
                navigate(
                  `src/${designation}?experience=${experience}&location=${location}`
                );
            }}
          >
            Search
          </button>
        </form>
      </div>
      <div className="flex  mt-28 w-[100%] justify-center gap-3 ">
        <Tabs
          name={`Remote`}
          img={`https://static.naukimg.com/s/0/0/i/trending-naukri/remoteonetheme.svg`}
        ></Tabs>
        <Tabs
          name={`MNC`}
          img={`https://static.naukimg.com/s/0/0/i/trending-naukri/mnconetheme.svg`}
        ></Tabs>
        <Tabs
          name={`Sales`}
          img={`https://static.naukimg.com/s/0/0/i/trending-naukri/salesonetheme.svg`}
        ></Tabs>
        <Tabs
          name={`Fresher`}
          img={`https://static.naukimg.com/s/0/0/i/trending-naukri/freshersonetheme.svg`}
        ></Tabs>
        <Tabs
          name={`Analytics`}
          img={`https://static.naukimg.com/s/0/0/i/trending-naukri/analyticsonetheme.svg`}
        ></Tabs>
        <Tabs
          name={`Internship`}
          img={`https://static.naukimg.com/s/0/0/i/trending-naukri/internshiponetheme.svg`}
        ></Tabs>
      </div>
      <div className="flex  mt-8 w-[100%] justify-center gap-3">
        <Tabs
          name={`Supply Ch..`}
          img={`https://static.naukimg.com/s/0/0/i/trending-naukri/supplychainonetheme.svg`}
        ></Tabs>
        <Tabs
          name={`HR`}
          img={`https://static.naukimg.com/s/0/0/i/trending-naukri/hronetheme.svg`}
        ></Tabs>
        <Tabs
          name={`Banking & ...`}
          img={`https://static.naukimg.com/s/0/0/i/trending-naukri/financeonetheme.svg`}
        ></Tabs>
        <Tabs
          name={`Marketing`}
          img={`https://static.naukimg.com/s/0/0/i/trending-naukri/marketingonetheme.svg`}
        ></Tabs>
        <Tabs
          name={`Startup`}
          img={`https://static.naukimg.com/s/0/0/i/trending-naukri/startuponetheme.svg`}
        ></Tabs>
      </div>
      <div>
        <TopCompanies />
        <FeaturedCompanies />
        <SponsoredCompanies />
      </div>
    </>
  );
}

function Tabs({ name, img }) {
  return (
    <>
      <button className="py-4 flex input-border rounded-xl px-2 shadow-lg hover:shadow-2xl min-w-[170px] ">
        <img className="w-[38px]" src={img} alt="" />
        <h1 className="self-center ml-4 font-semibold text-black">{name}</h1>
        <span className="ml-2 pt-1 self-center text-gray-600">
          <ion-icon name="chevron-forward-outline"></ion-icon>
        </span>
      </button>
    </>
  );
}
