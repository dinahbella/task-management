"use client";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { Label } from "./ui/label";
import { Eye, EyeOff } from "lucide-react";
import { CustomInput } from "./CustomInput";
import { useSelector } from "react-redux";

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const router = useRouter();
  const { user } = useSelector((state) => state.auth); // Assuming you have a Redux store set up

  useEffect(() => {
    if (user) {
      router.push("/dashboard");
    }
  }, [user]);

  const [showPassword, setShowPassword] = useState(false);

  const submit = async (data) => {
    console.log("Login data:", data);
  };

  // Motion animation configs
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const circleVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: { type: "spring", stiffness: 100, damping: 10 },
    },
    spinning: {
      rotate: 360,
      transition: { repeat: Infinity, duration: 3, ease: "linear" },
    },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="w-full min-h-screen px-4 py-10 sm:px-6 lg:px-10 flex flex-col lg:flex-row items-center justify-center gap-10 bg-gray-100"
    >
      {/* Left Side - Text and Illustration */}
      <motion.div
        variants={containerVariants}
        className="w-full max-w-xl flex flex-col items-center justify-center text-center gap-6"
      >
        <motion.span
          variants={itemVariants}
          className="inline-block border border-gray-300 bg-white px-4 py-1 text-sm sm:text-base text-gray-600 rounded-full shadow-sm"
        >
          Manage all your tasks in one place!
        </motion.span>

        <motion.p
          variants={itemVariants}
          className="text-4xl sm:text-5xl md:text-6xl 2xl:text-7xl font-black text-primary leading-tight"
        >
          <motion.span
            initial={{ x: -50 }}
            animate={{ x: 0 }}
            transition={{ type: "spring", stiffness: 100 }}
            className="block"
          >
            Cloud-Based
          </motion.span>
          <motion.span
            initial={{ x: 50 }}
            animate={{ x: 0 }}
            transition={{ type: "spring", stiffness: 100, delay: 0.1 }}
            className="block"
          >
            Task Manager
          </motion.span>
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="inline-block text-center"
        >
          <motion.div
            className="inline-block w-[80px] sm:w-[100px] h-[80px] sm:h-[100px] rounded-full bg-gradient-to-tr from-blue-700 via-purple-600 to-rose-500 shadow-lg"
            variants={circleVariants}
            animate={["visible", "spinning"]}
          />
        </motion.div>
      </motion.div>

      {/* Right Side - Login Form */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="w-full max-w-md bg-white rounded-lg p-6 sm:p-8 shadow-lg"
      >
        <div className="mb-5">
          <h2 className="text-2xl font-bold text-center text-primary">
            Welcome back!
          </h2>
          <p className="text-center text-base text-gray-700">
            Keep all your credentials safe.
          </p>
        </div>

        <form className="space-y-4" onSubmit={handleSubmit(submit)}>
          {/* Email */}
          <div>
            <Label className="block text-sm font-medium text-gray-700">
              Email
            </Label>
            <CustomInput
              type="email"
              name="email"
              placeholder="example@gmail.com"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  message: "Invalid email address",
                },
              })}
              error={errors.email?.message}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
            />
          </div>

          {/* Password */}
          <div className="relative">
            <Label className="block text-sm font-medium text-gray-700">
              Password
            </Label>
            <CustomInput
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="********"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters",
                },
              })}
              error={errors.password?.message}
              className="mt-1 block w-full px-3 py-2 pr-10 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
            />
            <button
              type="button"
              onClick={() => setShowPassword((prev) => !prev)}
              className="absolute top-[35px] mb-1 right-3 text-gray-500 hover:text-primary"
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>

          <span className="block text-sm text-gray-500 hover:text-primary hover:underline cursor-pointer">
            Forgot Password?
          </span>

          <Button
            type="submit"
            className="w-full mt-2 py-2 px-4 text-md font-medium text-white bg-primary hover:bg-rose-800"
          >
            Sign in
          </Button>
        </form>
      </motion.div>
    </motion.div>
  );
}
