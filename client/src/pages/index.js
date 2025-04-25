import Image from "next/image";
import { Roboto_Slab } from "next/font/google";
import Dashboard from "@/components/Dashboard";

// Load Roboto Slab
const robotoSlab = Roboto_Slab({
  subsets: ["latin"],
  variable: "--font-roboto-slab",
  weight: ["400", "500", "700"], // Optional: define weights
});

export default function Home() {
  return (
    <div
      className={`${robotoSlab.variable} font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20`}
      style={{ fontFamily: "var(--font-roboto-slab)" }}
    >
      <Dashboard />
    </div>
  );
}
