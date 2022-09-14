import type { NextPage } from "next";
import { useRouter } from "next/router";
import MainLayout from "../../layouts/main";

const OrgIndex: NextPage = () => {
  return (
    <MainLayout>
      <main className="container mx-auto flex flex-col items-center justify-center min-h-screen p-4">
        <h1 className="text-5xl md:text-[5rem] leading-normal font-extrabold text-gray-700">
          Org Index
        </h1>
        <p>create or join an org</p>
      </main>
    </MainLayout>
  );
};

export default OrgIndex;
