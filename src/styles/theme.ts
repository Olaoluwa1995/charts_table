import { extendTheme } from "@chakra-ui/react";
import { Styles } from "@chakra-ui/theme-tools";

export const COLORS = {
  PRIMARY_COLOR: "#F90000",
  BACKGROUND_COLOR: "whitesmoke",
};

export const BOXSHADOW = "0 4px 6px 0 lightGrey";
export const BORDER_RADIUS = "10px";
export const TABLESTYLE = {
  size: "sm",
  fontSize: "0.9rem",
  w: "unset",
};

const STYLES: Styles = {
  global: {
    "*": {
      boxSizing: "border-box",
    },

    html: {
      minH: "100%",
      overflowX: "hidden",
    },

    body: {
      display: "flex",
      flexDir: "column",
      overflowX: "hidden",
      color: "black",

      "#root": {
        "* .roboto": {
          fontFamily: "'Poppins', sans-serif",
        },
      },
    },

    "#root": {
      minH: "100vh",
      display: "flex",
      flexDirection: "column",
      width: "100%",
      pos: "relative",

      "*": {
        fontFamily: "'Poppins'",
      },
    },
  },
};

export const customTheme = extendTheme({
  styles: STYLES,
  colors: COLORS,
});
