import { Lato, Abril_Fatface } from "next/font/google";

const lato_init = Lato({
  weight: ["100", "300", "400", "700", "900"],
  subsets: ["latin"],
});

const abril_fatface_init = Abril_Fatface({
  weight: "400",
  subsets: ["latin"],
});

export const abril_fatface = abril_fatface_init.className;
export const lato = lato_init.className;
