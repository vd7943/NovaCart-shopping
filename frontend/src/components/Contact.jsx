import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const onSubmit = async (data) => {
    const contactInfo = {
      name: data.name,
      email: data.email,
      message: data.message,
    };

    await axios
      .post("https://novacart-backend.onrender.com/contact/", contactInfo)
      .then((res) => {
        if (res.data) {
          toast.success("Your Message Received!");
          setTimeout(() => {
            navigate("/");
          }, 3000);
        }
      })
      .catch((err) => {
        if (err.response) {
          toast.error("Error: " + err.response.data.message);
        }
      });
  };

  return (
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 pt-28 mb-20">
      <div className="flex justify-center">
        <form
          method="dialog"
          className="bg-white shadow-xl rounded-lg p-8 flex justify-start flex-col md:w-2/3 w-full transform hover:scale-105 transition duration-500 ease-in-out"
          onSubmit={handleSubmit(onSubmit)}
        >
          <h1 className="font-extrabold text-4xl pb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600 animate-text">
            Contact Us
          </h1>
          <div className="flex flex-col space-y-4">
            <label className="text-lg font-semibold text-gray-700">Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full px-4 py-3 border border-gray-300 rounded-md outline-none shadow-sm focus:ring-2 focus:ring-blue-500 transition duration-300"
              {...register("name", { required: true })}
            />
            {errors.name && (
              <span className="text-sm text-red-500">
                This field is required!
              </span>
            )}

            <label className="text-lg font-semibold text-gray-700">Email</label>
            <input
              type="email"
              placeholder="Email address"
              className="w-full px-4 py-3 border border-gray-300 rounded-md outline-none shadow-sm focus:ring-2 focus:ring-blue-500 transition duration-300"
              {...register("email", { required: true })}
            />
            {errors.email && (
              <span className="text-sm text-red-500">
                This field is required!
              </span>
            )}

            <label className="text-lg font-semibold text-gray-700">
              Message
            </label>
            <textarea
              placeholder="Type your message"
              className="w-full px-4 py-3 border border-gray-300 rounded-md outline-none shadow-sm focus:ring-2 focus:ring-blue-500 transition duration-300"
              rows="6"
              {...register("message", { required: true })}
            />
            {errors.message && (
              <span className="text-sm text-red-500">
                This field is required!
              </span>
            )}

            <div className="pt-6 flex justify-center">
              <button
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-8 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 hover:bg-gradient-to-r hover:from-blue-800 hover:to-purple-800 duration-300 cursor-pointer"
                type="submit"
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
