import type { NextPage } from "next";
import { useRouter } from "next/router";
import MainLayout from "../../layouts/main";

const Site: NextPage = () => {
  return (
    <MainLayout>
      <h1 className="text-5xl md:text-[5rem] leading-normal font-extrabold text-gray-700">
        Site 1
      </h1>
    </MainLayout>
  );
};

export default Site;
