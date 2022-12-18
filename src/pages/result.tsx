import classNames from "classnames";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { Card } from "../components/Card";
import { useAnswerState } from "../domains/question/store";
import { getBasicLayout } from "../layouts/basic";
import { NextPageWithLayout } from "./_app";

const IndexPage: NextPageWithLayout = () => {
  const { value: answers } = useAnswerState();
  const [results, setResults] = useState<boolean[] | null>(null);

  const point = useMemo(() => results?.filter(Boolean).length ?? 0, [results]);

  useEffect(() => {
    const fn = async () => {
      const res = await fetch("/api/result", {
        method: "POST",
        body: JSON.stringify({ answers }),
      });
      const json = await res.json();
      setResults(json.results);
    };
    fn();
  }, [answers, setResults]);

  return (
    <div className="max-w-lg min-h-screen mx-auto px-24 flex flex-col justify-center items-center">
      <h1 className="mb-16 text-white text-5xl font-bold">
        結果: {point}点（満点: {answers?.length ?? 0}点）
      </h1>
      <Card>
        {!!results ? (
          <ul className="space-y-16 mb-32">
            {results.map((result, idx) => (
              <li
                key={idx}
                className={classNames("p-8 font-bold border rounded-lg", {
                  "text-expressive-green bg-white-reef": result,
                  "text-expressive-red bg-white-salmon": !result,
                })}
              >
                {idx + 1}問目: {result ? "正解" : "不正解"}
              </li>
            ))}
          </ul>
        ) : (
          <p>結果を取得中です</p>
        )}
        <Link href="/">
          <a className="flex justify-center items-center w-full py-12 rounded-lg text-white text-lg font-bold bg-brand-gradient-cyan hover:opacity-80">
            トップに戻る
          </a>
        </Link>
      </Card>
    </div>
  );
};

IndexPage.getLayout = getBasicLayout;

export default IndexPage;
