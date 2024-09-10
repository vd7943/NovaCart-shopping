import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";

const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const onSubmit = async (data) => {
    const userInfo = {
      fullname: data.fullname,
      email: data.email,
      password: data.password,
    };

    await axios
      .post("https://novacart-backend.onrender.com/user/signup", userInfo)
      .then((res) => {
        if (res.data) {
          toast.success("Signup successfull!");
          setTimeout(() => {
            localStorage.setItem("Users", JSON.stringify(res.data.user));
            navigate("/");
            window.location.reload();
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
    <div className="flex h-screen items-center justify-center">
      <div
        id="my_modal_3"
        className="w-[600px] flex justify-center items-center dark:text-black"
      >
        <div className="modal-box">
          <form method="dialog" onSubmit={handleSubmit(onSubmit)}>
            <Link
              to="/"
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            >
              ✕
            </Link>

            <h3 className="font-extrabold text-xl pb-4">Sign up</h3>
            <div className="">
              <div action="" className="flex flex-col space-y-2">
                <span>Name</span>
                <input
                  type="name"
                  placeholder="Enter your fullname"
                  className="w-80 px-3 py-1 border rounded-md outline-none"
                  {...register("fullname", { required: true })}
                />
                {errors.fullname && (
                  <span className="text-sm text-red-500">
                    This field is required!
                  </span>
                )}
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
                    Sign up
                  </button>
                  <p>
                    Have account?{" "}
                    <Link
                      to="/"
                      className="underline text-blue-500 cursor-pointer"
                    >
                      Login
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
