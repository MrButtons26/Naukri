import { useEffect, useState } from "react";
import naukriLogo from "../assets/markup.svg";
import { useNavigate } from "react-router-dom";
import { RiH1 } from "react-icons/ri";
import { Link } from "react-router-dom";
import axios from "axios";
export default function BookMark() {
  const [bookmarks, setBookMarks] = useState([]);
  useEffect(() => {
    (async () => {
      if (localStorage.getItem("bookmark") === null) {
        setBookMarks([]);
        return;
      } else {
        let bm = new Set([...JSON.parse(localStorage.getItem("bookmark"))]);
        let tempArray = [...bm];
        const pro = tempArray.map(async (el, i) => {
          const options = {
            method: "GET",
            url: "https://jsearch.p.rapidapi.com/job-details",
            params: {
              job_id: `${el}`,
              extended_publisher_details: "false",
            },
            headers: {
              "x-rapidapi-key":
                "dd7c21b42cmsh0b96720960fb70bp1b14e0jsn7902b4e8dcee",
              "x-rapidapi-host": "jsearch.p.rapidapi.com",
            },
          };
          const res = await axios.request(options);
          return res.data;
        });
        const data = await Promise.all(pro);
        setBookMarks([...data]);
      }
    })();
  }, []);
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
      {!localStorage.getItem("user") && (
        <h1 className="mt-8 text-center text-[22px] font-light">
          Please <span className="text-blue-600 font-semibold">Login </span>
          or <span className="text-blue-600 font-semibold">Register</span> to
          see all the Bookmarked Jobs
        </h1>
      )}
      {localStorage.getItem("user") && bookmarks.length !== 0 && (
        <div className="flex flex-col items-center pt-16 pb-16">
          <h1 className="text-[20px] font-light">
            BOOKMARKED{" "}
            <span className="text-[22px] font-semibold text-blue-600">
              JOBS
            </span>
          </h1>
          {bookmarks?.map((el, i) => (
            <div
              key={i}
              className="flex flex-col mt-6 w-[540px] px-5 py-3 rounded-3xl border shadow-xl"
            >
              <div className="flex justify-between  ">
                <h1 className="text-[14px] font-semibold">
                  {el.data[0].job_title} <br />
                  <h1 className="mt-1 text-[12px] font-semibold text-gray-600">
                    {el.data[0].employer_name}
                    <span className="ml-1 ">
                      <span className="text-green-600 text-[14px]">
                        <ion-icon name="star-sharp"></ion-icon>
                      </span>
                      <span className="ml-1">
                        {Math.trunc(
                          el.data[0].job_apply_quality_score * 10 * 5
                        ) / 10}
                      </span>
                    </span>
                  </h1>
                </h1>
                <img
                  className="max-w-[50px]"
                  src={`${el.data[0].employer_logo}`}
                  alt=""
                />
              </div>
              <h1 className="text-gray-800 mt-3 flex align-middle h-[18px]">
                <div className="">
                  <ion-icon name="briefcase-outline"></ion-icon>
                </div>
                <span className="text-[13px] ml-2 pr-3 border-r-2">
                  {el.data[0].job_required_experience
                    .required_experience_in_months === null
                    ? `Fresher`
                    : `0-${
                        el.data[0].job_required_experience
                          .required_experience_in_months / 12
                      }`}
                </span>
                <span className="text-[13px] ml-2">&#36;</span>{" "}
                <span className="text-[13px] ml-2 text-gray-800 pr-3 border-r-2">
                  Not Disclosed
                </span>
                <span className="ml-2">
                  <ion-icon name="location-outline"></ion-icon>
                </span>
                <span className="text-[13px] ml-2 text-gray-800 pr-3">
                  {el.data[0].job_city} , {el.data[0].job_country}
                </span>
              </h1>
              <h1 className="mt-2 flex align-middle">
                <span>
                  <ion-icon name="clipboard-outline"></ion-icon>
                </span>
                <span className="text-[13px] text-gray-700 ml-2">
                  {el.data[0].job_description.slice(0, 420)}...
                </span>
              </h1>
              <h1 className="ml-12 text-[13px] mt-2 font-medium text-green-600">
                Link For Application
              </h1>
              <Link
                className="text-[12px] ml-6 flex"
                to={el.data[0].job_apply_link}
                target="_blank"
              >
                <span className="mr-2 text-[18px] text-green-600">
                  <ion-icon name="logo-web-component"></ion-icon>
                </span>
                <span className="mt-1">
                  {el.data[0].job_apply_link.slice(0, 60)}...
                </span>
              </Link>
            </div>
          ))}
        </div>
      )}
    </>
  );
}
