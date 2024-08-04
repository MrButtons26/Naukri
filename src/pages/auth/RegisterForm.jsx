import React, { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firebase";
import Modal from "react-modal";
import { useNavigate } from "react-router-dom";
Modal.setAppElement("#root");

export default function RegisterForm() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    number: "",
  });
  const [workExp, setWorkExp] = useState([false, false]);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const addUser = async () => {
    try {
      localStorage.setItem(
        "user",
        JSON.stringify({ fullname: formData.fullName, email: formData.email })
      );
      const doc = await addDoc(collection(db, "user"), {
        user: formData,
      });
      setModalIsOpen(true);
    } catch (error) {
      console.error("error while registering the user", error);
    }
  };

  const handleSubmit = (e) => {
    addUser();
    navigate("/");
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <>
      {!JSON.parse(localStorage.getItem(`user`)) && (
        <form className="flex flex-col" onSubmit={(e) => e.preventDefault()}>
          <h1 className="text-[13px] font-semibold mt-8 mb-1">
            Full name <span className="text-red-600">*</span>
          </h1>
          <input
            className="text-[13px] w-[568px] px-3 py-2.5 font-medium input-border rounded-xl border-gray-300"
            type="text"
            placeholder="What is your name?"
            required
            value={formData.fullName}
            onChange={handleInputChange}
            name="fullName"
          />
          <h1 className="text-[13px] font-semibold mt-8 mb-1">
            Email ID <span className="text-red-600">*</span>
          </h1>
          <input
            className="text-[13px] w-[568px] px-3 py-2.5 font-medium input-border rounded-xl border-gray-300"
            type="email"
            placeholder="Tell us your Email ID"
            value={formData.email}
            onChange={handleInputChange}
            name="email"
          />
          <h1 className="text-[11px] text-gray-600 font-medium ml-2">
            We'll send relevant jobs and updates to this email
          </h1>
          <h1 className="text-[13px] font-semibold mt-8 mb-1">
            Password<span className="text-red-600">*</span>
          </h1>
          <input
            className="text-[13px] w-[568px] px-3 py-2.5 font-medium input-border rounded-xl border-gray-300"
            type="password"
            placeholder="(Minimum 6 characters)"
            value={formData.password}
            onChange={handleInputChange}
            name="password"
          />
          <h1 className="text-[11px] text-gray-600 font-medium ml-2">
            This helps your account stay protected
          </h1>
          <h1 className="text-[13px] font-semibold mt-8 mb-1">
            Mobile number<span className="text-red-600">*</span>
          </h1>
          <h1 className="text-[13px] w-[568px] px-3 py-2.5 font-medium input-border rounded-xl border-gray-300">
            +91
            <input
              type="text"
              className="outline-none ml-2 w-[70%]"
              placeholder="Enter your Mobile Number"
              value={formData.number}
              onChange={handleInputChange}
              name="number"
            />
          </h1>
          <h1 className="text-[11px] text-gray-600 font-medium ml-2">
            Recruiters will contact you on this number
          </h1>
          <h1 className="text-[13px] font-semibold mt-8 mb-1">
            Work experience<span className="text-red-600">*</span>
          </h1>
          <div className="flex gap-5">
            <button
              onClick={(e) => {
                e.preventDefault();
                setWorkExp([true, false]);
              }}
              className={`experience-button w-[265px] py-3 pl-7 input-border rounded-3xl ${
                workExp[0] && "border-blue-400"
              }`}
            >
              <div className="flex flex-col">
                <h1 className="text-[13px] font-semibold text-left">
                  I'm experienced
                </h1>
                <h1 className="text-[12px] text-gray-600 text-left">
                  I have work experience (excluding internships)
                </h1>
              </div>
              <img
                className="ml-3"
                src="//static.naukimg.com/s/7/104/assets/images/briefcase.bdc5fadf.svg"
              />
            </button>
            <button
              onClick={(e) => {
                e.preventDefault();
                setWorkExp([false, true]);
              }}
              className={`experience-button w-[265px] py-3 pl-7 input-border rounded-3xl ${
                workExp[1] && "border-blue-400"
              }`}
            >
              <div className="flex flex-col">
                <h1 className="text-[13px] font-semibold text-left">
                  I'm experienced
                </h1>
                <h1 className="text-[12px] text-gray-600 text-left">
                  I have work experience (excluding internships)
                </h1>
              </div>
              <img
                className="ml-3"
                src="//static.naukimg.com/s/7/104/assets/images/schoolbag.a54cbf7a.svg"
              />
            </button>
          </div>
          <h1 className="text-[12px] text-gray-600 mt-4">
            By clicking Register, you agree to the
            <span className="text-blue-600 font-medium">
              {" "}
              Terms and Conditions{" "}
            </span>
            &<span className="text-blue-600 font-medium"> Privacy Policy </span>
            of Naukri.com
          </h1>
          <button
            onClick={() => {
              handleSubmit();
            }}
            className="self-start mt-5 px-3 py-2 bg-blue-500 text-white font-semibold rounded-full hover:bg-blue-800"
          >
            Register Now
          </button>
        </form>
      )}
      {JSON.parse(localStorage.getItem(`user`)) && (
        <div className=" font-thin mt-6 text-[24px] flex flex-col">
          <h1>
            You Have Registered{" "}
            <span className="font-medium">Successfully</span>
          </h1>
        </div>
      )}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Registration Successful"
        className="fixed inset-0 flex items-center justify-center z-50"
        overlayClassName="fixed inset-0 bg-black bg-opacity-50 z-40"
      >
        <div className="bg-white p-6 rounded-lg shadow-lg w-1/3 text-center">
          <h2 className="text-xl font-semibold mb-4">
            User Registered Successfully
          </h2>
          <button
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            onClick={closeModal}
          >
            Close
          </button>
        </div>
      </Modal>
    </>
  );
}
