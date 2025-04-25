"use client";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { Label } from "./ui/label";
import { Eye, EyeOff } from "lucide-react";
import { CustomInput } from "./CustomInput";

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const router = useRouter();
  const user = "";

  useEffect(() => {
    user && router.push("/dashboard");
  }, [user]);

  // Animation variants
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
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const circleVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
    spinning: {
      rotate: 360,
      transition: {
        repeat: Infinity,
        duration: 3,
        ease: "linear",
      },
    },
  };
  const [showPassword, setShowPassword] = React.useState(false);
  const submit = async (data) => {
    console.log("data", data);
  };
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="w-full min-h-screen flex items-center justify-center flex-col lg:flex-row bg-gray-100"
    >
      <div className="w-full md:w-auto flex gap-0 md:gap-40 md:flex-row items-center justify-center">
        {/* leftSide */}
        <motion.div
          className="h-full w-full lg:w-2/3 flex flex-col items-center justify-center"
          variants={containerVariants}
        >
          <motion.div
            className="w-full md:max-w-lg 2xl:max-w-3xl flex flex-col items-center justify-center gap-5 md:gap-y-10 2xl:mt-20"
            variants={containerVariants}
          >
            <motion.span
              variants={itemVariants}
              className="flex gap-1 py-1 px-3 border rounded-full text-sm md:text-base border-gray-300 text-gray-600 bg-white shadow-sm"
            >
              Manage all your tasks in one place!
            </motion.span>

            <motion.div variants={itemVariants}>
              <motion.p className="flex flex-col gap-4 text-center font-black text-primary text-4xl md:text-6xl 2xl:text-7xl">
                <motion.span
                  initial={{ x: -50 }}
                  animate={{ x: 0 }}
                  transition={{ type: "spring", stiffness: 100 }}
                >
                  Cloud-Based
                </motion.span>
                <motion.span
                  initial={{ x: 50 }}
                  animate={{ x: 0 }}
                  transition={{ type: "spring", stiffness: 100, delay: 0.1 }}
                >
                  Task Manager
                </motion.span>
              </motion.p>
            </motion.div>

            <motion.div
              className="inline-block w-[49%] text-center"
              variants={itemVariants}
            >
              <motion.div
                className="inline-block w-[100px] h-[100px] rounded-full bg-gradient-to-tr from-blue-700 via-purple-600 to-rose-500 shadow-lg"
                variants={circleVariants}
                animate={["visible", "spinning"]}
              />
            </motion.div>
          </motion.div>
        </motion.div>

        {/* rightSide - Login Form */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg"
        >
          <div className="mb-5">
            <h2 className="text-2xl font-bold text-center text-primary ">
              Welcome back!
            </h2>
            <p className="text-center text-base text-gray-700">
              Keep all your credentials safe.
            </p>
          </div>
          <form className="space-y-4 " onSubmit={handleSubmit(submit)}>
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
                className="absolute top-[35px] right-3 hover:text-primary mb-1 text-gray-500 "
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
            <span className="text-sm  text-gray-500 hover:text-primary hover:underline cursor-pointer">
              Forgot Password?
            </span>
            <Button
              type="submit"
              className="w-full mt-2 flex justify-center py-2 px-4  text-md font-medium text-white bg-primary hover:bg-rose-800 "
            >
              Sign in
            </Button>
          </form>
        </motion.div>
      </div>
    </motion.div>
  );
}
