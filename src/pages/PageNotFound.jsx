import naukriLogo from "../assets/markup.svg";
import { useNavigate } from "react-router-dom";

export default function PageNotFound() {
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
      <h1 className=" uppercase text-center mt-20 text-[22px] font-light">
        This is not the{" "}
        <span className="font-medium text-blue-600">webpage</span> you are
        Looking for . <br />
        <button
          onClick={() => {
            navigate(`/`);
          }}
          className="mt-3 py-2 px-5 bg-blue-600 rounded-full text-white font-semibold hover:translate-y-0.5"
        >
          HomePage
        </button>
      </h1>
    </>
  );
}
