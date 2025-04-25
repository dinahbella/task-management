import Image from "next/image";
import { Roboto_Slab } from "next/font/google";

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
      <h1 className="text-4xl font-bold">Welcome with Roboto Slab</h1>
      <p className="text-lg text-gray-700">
        This text is styled using the beautiful and professional Roboto Slab
        font.
      </p>
    </div>
  );
}
