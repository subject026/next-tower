import type { NextPage } from "next";
import { useRouter } from "next/router";
import MainLayout from "../../layouts/main";

const Org: NextPage = () => {
  const router = useRouter();
  const { orgId } = router.query;

  // get org meta info

  // get theme

  // initialize theme app  and return

  return (
    <MainLayout>
      <main className="container mx-auto flex flex-col items-center justify-center min-h-screen p-4">
        <h1 className="text-5xl md:text-[5rem] leading-normal font-extrabold text-gray-700">
          {orgId} Org Site
        </h1>
      </main>
    </MainLayout>
  );
};

export default Org;
