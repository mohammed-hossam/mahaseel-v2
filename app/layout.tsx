import { Roboto_Flex } from "@next/font/google";
import "./globals.css";

//wil tailwind
// const Roboto_Flex = Roboto_Flex({
//   variable: '--font-inter',
//   subsets: ['latin']
// });

const roboto_Flex_font = Roboto_Flex();

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={roboto_Flex_font.className}
      // className={roboto_Flex_font.variable} for tailwind
    >
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>{children}</body>
    </html>
  );
}
