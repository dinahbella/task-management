import Image from "next/image";
import { Poppins } from "next/font/google";
import DashboardWrapper from "@/components/DashboardWrapper";

// Load Poppins font
const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"], // Customize based on usage
});

export default function Home({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className={`${poppins.className}`}>
      <DashboardWrapper>{children}</DashboardWrapper>
    </div>
  );
}
