import type { Metadata } from "next";
import Home from "./Home";

export const metadata: Metadata = {
  alternates: {
    canonical: "/",
  },
  robots: {
    index: false,
    follow: true,
  },
};

export default function Page() {
  return <Home />;
}
