import { useState } from "react";
import LoginForm from "../pages/auth/LoginForm";

export default function Login({ login, setLogin }) {
  const [r, setR] = useState(false);
  return (
    <div
      className={` pl-14 pr-10 login ${login === true ? `login-active` : ``}`}
    >
      <div className="flex justify-end mt-6">
        <button
          className=""
          onClick={() => {
            setLogin(!login);
          }}
        >
          <ion-icon size="large" name="close-outline"></ion-icon>
        </button>
      </div>
      <div className="flex mt-[50px] justify-between text-black font-medium text-[18px]">
        {!localStorage.getItem("user") && <h1>Login</h1>}
        {!localStorage.getItem("user") && (
          <h1 className="text-blue-600">Register For Free</h1>
        )}
      </div>
      <LoginForm r={r} setR={setR} />
    </div>
  );
}
