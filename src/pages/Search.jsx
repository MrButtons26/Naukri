import { useParams } from "react-router-dom";
import { Query, useQuery } from "@tanstack/react-query";
import NavBar from "../components/Navbar";
import Footer from "../components/Footer";
import Checkbox from "@mui/material/Checkbox";
import { useSearchParams } from "react-router-dom";
import axios from "axios";
import { grey } from "@mui/material/colors";
import { useEffect, useRef, useState } from "react";
export default function Search() {
  const [searchParams] = useSearchParams();
  const designation = useParams(`query`).query;
  const paramExperience = searchParams.get("experience");
  const paramLocation = searchParams.get(`location`);
  console.log(designation, paramLocation);
  useEffect(() => {
    (async () => {
      const options = {
        method: "GET",
        url: `https://jsearch.p.rapidapi.com/search`,
        params: {
          query: `${designation} in ${paramLocation}`,
          page: "1",
          num_pages: "1",
          date_posted: "all",
        },
        headers: {
          "x-rapidapi-key":
            "dd7c21b42cmsh0b96720960fb70bp1b14e0jsn7902b4e8dcee",
          "x-rapidapi-host": "jsearch.p.rapidapi.com",
        },
      };

      const response = await axios.request(options);
      console.log(response.data);
      setData({ ...response.data });
      setJobData({ ...response.data });
    })();
  }, []);
  const [data, setData] = useState([]);
  const [bookmark, setBookMark] = useState(-1);
  const [jobData, setJobData] = useState([]);
  const [experienceValue, setExperienceValue] = useState(15);
  const [workCategories, setWorkCatergories] = useState([false, false]);
  useEffect(() => {
    if (
      (workCategories[0] === false && workCategories[1] === false) ||
      (workCategories[0] === true && workCategories[1] === true)
    ) {
      setJobData({ ...data });
      return;
    } else if (workCategories[0] === true) {
      let temp = data.data.filter((el, i) => el.job_is_remote === false);
      setJobData({ ...data, data: temp });
    } else {
      let temp = data.data.filter((el, i) => el.job_is_remote === true);
      setJobData({ ...data, data: temp });
    }
  }, [workCategories]);
  const btnexp = useRef(null);
  useEffect(() => {
    if (Number(experienceValue) === Number(btnexp.current.textContent)) {
      return;
    }
    if (Number(experienceValue) > Number(btnexp.current.textContent)) {
      let left = btnexp.current.offsetLeft;
      btnexp.current.style.left = `${
        left +
        5.49 *
          Math.abs(Number(experienceValue) - Number(btnexp.current.textContent))
      }px`;
      btnexp.current.textContent = Number(experienceValue);
    } else {
      let left = btnexp.current.offsetLeft;
      btnexp.current.style.left = `${
        left -
        5.49 *
          Math.abs(Number(experienceValue) - Number(btnexp.current.textContent))
      }px`;
      btnexp.current.textContent = Number(experienceValue);
    }
  }, [experienceValue]);
  const [workMode, setWorkMode] = useState(true);
  const [experience, setExperience] = useState(true);

  return (
    <>
      <div className="relative z-[4]">
        <NavBar></NavBar>
      </div>
      <div className="flex justify-center mt-12">
        <div className="flex relative z-[2]">
          <div className="flex flex-col input-border shadow-2xl px-8 py-4 rounded-2xl min-w-[300px] h-[288px]">
            <h1
              className="text-[15px] font-medium pb-3 mb-3"
              style={{ "border-bottom": "1px solid #D3D3D3" }}
            >
              All Filters
            </h1>
            <div className="flex flex-col">
              <h1 className=" text-[15px] font-medium w-[full] ">
                Work Mode{" "}
                <span
                  onClick={() => {
                    setWorkMode(!workMode);
                  }}
                  className=" text-gray-600  ml-[114px] cursor-pointer"
                >
                  <ion-icon
                    name={`chevron-${
                      workMode === true ? `up` : `down`
                    }-outline`}
                  ></ion-icon>
                </span>
              </h1>
              <div
                className={`flex flex-col ${
                  workMode === true ? `block` : `hidden`
                }`}
              >
                <span className="text-[14px] text-[#474d6a] font-light">
                  <Checkbox
                    onClick={() => {
                      setWorkCatergories([
                        !workCategories[0],
                        workCategories[1],
                      ]);
                    }}
                    className="inline"
                    size="small"
                    sx={{
                      color: grey[900],
                      "&.Mui-checked": {
                        color: grey[900],
                      },
                    }}
                  />
                  Work from office
                </span>
                <span className="text-[14px] text-[#474d6a] font-light">
                  <Checkbox
                    onClick={() => {
                      setWorkCatergories([
                        workCategories[0],
                        !workCategories[1],
                      ]);
                    }}
                    className="inline"
                    size="small"
                    sx={{
                      color: grey[900],
                      "&.Mui-checked": {
                        color: grey[900],
                      },
                    }}
                  />
                  Remote
                </span>
              </div>
            </div>
            <h1
              className=" text-[15px] font-medium w-[full] mt-3 pt-3 "
              style={{ "border-top": "1px solid  #D3D3D3" }}
            >
              Experience{" "}
              <span
                onClick={() => {
                  setExperience(!experience);
                }}
                className=" text-gray-600 ml-[116px] cursor-pointer"
              >
                <ion-icon
                  name={`chevron-${
                    experience === true ? `up` : `down`
                  }-outline`}
                ></ion-icon>
              </span>
            </h1>
            <div
              className={`range relative mt-4 ${
                experience === true ? `block` : `hidden`
              }`}
            >
              <span ref={btnexp} className="range-span text-center">
                15
              </span>
              <div className="field flex gap-2 mt-2">
                <div className="value left relative bottom-3 text-[14px] text-gray-600">
                  0
                </div>
                <input
                  className="input-slider"
                  type="range"
                  min="0"
                  max="30"
                  defaultValue={15}
                  value={experienceValue[1]}
                  onChange={(e) => {
                    setExperienceValue(Number(e.target.value));
                  }}
                />
                <div className="value right relative bottom-3 text-[14px] text-gray-600">
                  30
                </div>
              </div>
            </div>
          </div>
          <div className="ml-16">
            <h1 className="text-gray-600 text-[13px] ml-2">
              1 of 1 of {jobData?.data?.length}{" "}
              <span className="text-black font-medium">
                {designation[0].toUpperCase() + designation.slice(1)}
              </span>
            </h1>
            {jobData?.data?.map((el, i) => (
              <div
                key={i}
                className="flex flex-col mt-6 w-[540px] px-5 py-3 rounded-3xl border shadow-xl"
              >
                <div className="flex justify-between ">
                  <h1 className="text-[14px] font-semibold">
                    {el?.job_title} <br />
                    <h1 className="mt-1 text-[12px] font-semibold text-gray-600">
                      {el?.employer_name}
                      <span className="ml-1 ">
                        <span className="text-green-600 text-[14px]">
                          <ion-icon name="star-sharp"></ion-icon>
                        </span>
                        <span className="ml-1">
                          {Math.trunc(el.job_apply_quality_score * 10 * 5) / 10}
                        </span>
                      </span>
                    </h1>
                  </h1>
                  <img
                    className="max-w-[50px]"
                    src={`${el.employer_logo}`}
                    alt=""
                  />
                </div>
                <h1 className="text-gray-800 mt-3 flex align-middle h-[18px]">
                  <div className="">
                    <ion-icon name="briefcase-outline"></ion-icon>
                  </div>
                  <span className="text-[13px] ml-2 pr-3 border-r-2">
                    {el.job_required_experience
                      .required_experience_in_months === null
                      ? `Fresher`
                      : `0-${
                          el.job_required_experience
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
                    {el.job_city} , {el.job_country}
                  </span>
                </h1>
                <h1 className="mt-2 flex align-middle">
                  <span>
                    <ion-icon name="clipboard-outline"></ion-icon>
                  </span>
                  <span className="text-[13px] text-gray-700 ml-2">
                    {el.job_description.slice(0, 60)}...
                  </span>
                </h1>
                <h1 className="text-[20px] text-gray-700 mt-3 flex justify-end">
                  <h1
                    className={`bk ${
                      bookmark == i &&
                      !localStorage.getItem("user") &&
                      `bk-active`
                    }`}
                  >
                    Please Register to{" "}
                    <span className="font-semibold">Bookmark</span>
                  </h1>

                  <button
                    className={`${
                      bookmark == i &&
                      !localStorage.getItem("user") &&
                      `text-red-600`
                    } ${
                      JSON.parse(localStorage.getItem("bookmark"))?.some(
                        (element, i) => element === el.job_id
                      ) && `text-green-600`
                    }`}
                    onClick={() => {
                      setBookMark(i);
                      if (localStorage.getItem("user")) {
                        if (!localStorage.getItem("bookmark")) {
                          localStorage.setItem(
                            "bookmark",
                            JSON.stringify([el.job_id])
                          );
                        } else {
                          localStorage.setItem(
                            "bookmark",
                            JSON.stringify([
                              ...JSON.parse(localStorage.getItem("bookmark")),
                              el.job_id,
                            ])
                          );
                        }
                      }
                    }}
                  >
                    <ion-icon name="bookmark-outline"></ion-icon>
                  </button>
                  <span className="text-[14px] ml-1">Save</span>
                </h1>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer></Footer>
    </>
  );
}
