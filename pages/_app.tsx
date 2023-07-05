import "@/styles/globals.css";
import { NextIntlClientProvider } from "next-intl";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <NextIntlClientProvider locale="en" messages={{ foo: "bar" }}>
      <Component {...pageProps} />
    </NextIntlClientProvider>
  );
}
