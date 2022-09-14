import type { NextPage } from "next";
import MainLayout from "../../../layouts/main";

const Post: NextPage = () => {
  return (
    <MainLayout>
      <h1 className="text-5xl md:text-[5rem] leading-normal font-extrabold text-gray-700">
        post 1
      </h1>
    </MainLayout>
  );
};

export default Post;
