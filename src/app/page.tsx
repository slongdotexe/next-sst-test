import { box, hstack } from "@styled-patterns/*";
import Image from "next/image";

export default function Home() {
  return (
    <div
      className={hstack({
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 4,
      })}
    >
      <div
        className={box({
          display: "flex",
          w: "100px",
          h: "100px",
          bg: "red",
        })}
       >
        asd
       </div>
    </div>
  );
}
