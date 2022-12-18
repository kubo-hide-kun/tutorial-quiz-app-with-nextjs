import React, { ReactElement, ReactNode } from "react";
import { RecoilRoot } from "recoil";
import type { NextPage } from "next";
import { AppProps } from "next/app";

import "../styles/index.css";

// ページ間で共通のレイアウトを適用するための実装
// @see https://nextjs.org/docs/basic-features/layouts#with-typescript
export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout || ((page) => page);
  return getLayout(
    <RecoilRoot>
      <Component {...pageProps} />
    </RecoilRoot>
  );
}

export default MyApp;
