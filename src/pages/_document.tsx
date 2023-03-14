import theme from "@/config/theme";
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body
        style={{
          backgroundColor: theme.palette.grey[100],
        }}
      >
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
