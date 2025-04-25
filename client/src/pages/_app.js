import UserLayout from "@/components/UserLayout";
import "@/styles/globals.css";
import "react-toastify/dist/ReactToastify.css";
import { Toaster } from "sonner";

export default function App({ Component, pageProps }) {
  return (
    <>
      <UserLayout>
        <Component {...pageProps} />
        <Toaster richColors />
      </UserLayout>
    </>
  );
}
