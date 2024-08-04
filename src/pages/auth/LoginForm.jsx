import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { collection, onSnapshot, query } from "firebase/firestore";
import { db } from "../../firebase";
import Modal from "react-modal";

Modal.setAppElement("#root");

export default function LoginForm({ r, setR }) {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [user, setUsers] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await getAllUsers();
    user.length !== 0 && checkUserCredentials();
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const getAllUsers = async () => {
    const q = query(collection(db, "user"));
    return new Promise((resolve, reject) => {
      const users = onSnapshot(
        q,
        (querySnapshot) => {
          let userArray = [];
          querySnapshot.forEach((doc) => {
            userArray.push({ ...doc.data(), id: doc.id });
          });
          setUsers([...userArray]);
          resolve();
        },
        reject
      );
    });
  };

  const checkUserCredentials = () => {
    let userFound = false;
    for (let i = 0; i < user.length; i++) {
      if (
        user[i].user.email === formData.email &&
        user[i].user.password === formData.password
      ) {
        // setModalMessage("User logged in successfully");
        // setModalIsOpen(true);
        localStorage.setItem(
          "user",
          JSON.stringify({
            fullName: user[i].user.fullName,
            email: user[i].user.email,
          })
        );
        userFound = true;
        // setTimeout(() => {
        //   setModalIsOpen(false);
        // }, 2000);
        break;
      }
    }
    if (!userFound) {
      setModalMessage("Invalid Credentials");
      setModalIsOpen(true);
      setTimeout(() => {
        setModalIsOpen(false);
      }, 2000);
    }
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <>
      {!JSON.parse(localStorage.getItem("user")) && (
        <div>
          <form className="pt-8" onSubmit={handleSubmit}>
            <h1 className="text-[13px] font-semibold text-blue-600">
              Email ID / Username
            </h1>
            <input
              placeholder="Enter your active Email ID / Username"
              className="text-[13px] font-light w-[100%] my-2 px-3 py-3 rounded-2xl bg-transparent input-border"
              type="email"
              name="email"
              onChange={handleInputChange}
              value={formData.email}
            />
            <h1 className="mt-5 text-[13px] font-semibold text-blue-600">
              Password
            </h1>
            <input
              placeholder="Enter your password"
              className="text-[13px] font-light w-[100%] my-2 px-3 py-3 rounded-2xl bg-transparent input-border"
              type="password"
              name="password"
              onChange={handleInputChange}
              value={formData.password}
            />
            <button className="text-[13px] font-medium text-right w-[100%] text-blue-600">
              Forgot Password?
            </button>
            <button className="text-white mt-6 bg-blue-600 w-[100%] py-2 rounded-full">
              Login
            </button>
          </form>

          <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            contentLabel="Authentication Message"
            className="fixed inset-0 flex items-center justify-center z-50"
            overlayClassName="fixed inset-0 bg-black bg-opacity-50 z-40"
          >
            <div className="bg-white p-6 rounded-lg shadow-lg w-1/3 text-center">
              <h2 className="text-xl font-semibold mb-4">{modalMessage}</h2>
              <button
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                onClick={closeModal}
              >
                Close
              </button>
            </div>
          </Modal>
        </div>
      )}
      {JSON.parse(localStorage.getItem("user")) && (
        <div className="flex flex-col">
          <h1 className="mt-10 flex justify-center text-[20px] font-light">
            You Have{" "}
            <span className="text-blue-600 font-semibold mx-1">Logged </span> in{" "}
            <span className="text-blue-600 font-semibold mx-1">
              {" "}
              Successfully{" "}
            </span>
          </h1>
          <button
            onClick={() => {
              localStorage.removeItem("user");
              localStorage.removeItem("bookmark");

              setR(!r);
            }}
            className="self-center block w-fit px-5  text-[18px] py-1 mt-4  rounded-2xl bg-blue-600 text-white hover:opacity-75 active:translate-y-1"
          >
            Logout
          </button>
        </div>
      )}
    </>
  );
}
