import Image from "next/image";
import { Inter } from "next/font/google";
import DashboardWrapper from "@/components/DashboardWrapper";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export default function Home({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className={`${inter.className} `}>
      <DashboardWrapper> {children}</DashboardWrapper>
    </div>
  );
}
