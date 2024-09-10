import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      email: data.email,
      password: data.password,
    };

    await axios
      .post("https://novacart-backend.onrender.com/user/login", userInfo)
      .then((res) => {
        if (res.data) {
          toast.success("Login Successfull!");
          document.getElementById("my_modal_3").close();
          setTimeout(() => {
            window.location.reload();
            localStorage.setItem("Users", JSON.stringify(res.data.user));
          }, 1000);
        }
      })
      .catch((err) => {
        if (err.response) {
          toast.error("Error: " + err.response.data.message);
        }
      });
  };

  return (
    <div>
      <dialog id="my_modal_3" className="modal dark:text-black">
        <div className="modal-box">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <h3 className="font-extrabold text-xl pb-4">Login</h3>
          <div className="">
            <form
              action=""
              className="flex flex-col space-y-2"
              onSubmit={handleSubmit(onSubmit)}
            >
              <span>Email</span>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-80 px-3 py-1 border rounded-md outline-none"
                {...register("email", { required: true })}
              />
              {errors.email && (
                <span className="text-sm text-red-500">
                  This field is required!
                </span>
              )}

              <span>Password</span>
              <input
                type="password"
                placeholder="Enter your password"
                className="w-80 px-3 py-1 border rounded-md outline-none"
                {...register("password", { required: true })}
              />
              {errors.password && (
                <span className="text-sm text-red-500">
                  This field is required!
                </span>
              )}
              <div className="pt-4 flex justify-around items-center">
                <button
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-8 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 hover:bg-gradient-to-r hover:from-blue-800 hover:to-purple-800 duration-300 cursor-pointer"
                  type="submit"
                >
                  Login
                </button>
                <p>
                  Not registered?{" "}
                  <span className="underline text-blue-500 cursor-pointer">
                    <Link to="/signup">Signup</Link>
                  </span>
                </p>
              </div>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default Login;
