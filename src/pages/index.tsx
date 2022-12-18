import Link from "next/link";
import { getBasicLayout } from "../layouts/basic";
import { NextPageWithLayout } from "./_app";

const IndexPage: NextPageWithLayout = () => (
    <div className="max-w-lg min-h-screen mx-auto px-24 flex flex-col justify-center items-center">
      <h1 className="mb-16 text-white text-5xl font-bold">Let's Play Quiz.</h1>
      <p className="mb-28 text-white text-sm lg:text-lg">チュートリアルとして作成したクイズアプリです</p>
      <Link href="/questions/1">
        <a className="flex justify-center items-center w-full py-12 rounded-lg text-lg font-bold bg-brand-gradient-cyan hover:opacity-80">
          クイズを始める
        </a>
      </Link>
    </div>
);

IndexPage.getLayout = getBasicLayout;

export default IndexPage;
