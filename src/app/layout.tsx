import "./globals.css";
import {  box } from "@styled-patterns/*";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "../styles/index.css";

const inter = Inter({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata: Metadata = {
  title: "Canteen",
  description: "Fuud",
};

type StyledBgProps = JSX.IntrinsicElements["div"] & {
  sx?: Parameters<typeof box>[0];
};

const StyledBg = ({ sx = {}, ...props }: StyledBgProps) => (
  <div
    className={box({
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      minHeight: "100vh",
      bgColor: "#EBC30E",
      backgroundImage: "url(/grid.svg)",
      ...sx,
    })}
    {...props}
  />
);

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <StyledBg>
          <div
            className={box({
              position: "relative",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "100%",
              height: "100%",
            })}
          >
            {children}
          </div>
        </StyledBg>
      </body>
    </html>
  );
}
