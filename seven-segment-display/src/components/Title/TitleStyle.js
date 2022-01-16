import css from "@styled-system/css";
import styled from "styled-components";

export const TextContainer = styled("div")(
  css({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    paddingTop: "44px",

    h1: {
      fontStyle: "normal",
      fontSize: "36px",
      fontWeight: "bold",
      lineHeight: "44px",
      textAlign: "center",
      letterSpacing: "-1px",
      // Revisar depois, aplicar gradinete no titulo
      //`linear-gradient(174.92deg, #EF6C00 18.47%, #DB6300 36.57%)`,
      color: "#DB6300",

      "@media (max-width: 430px)": {
        fontSize: "24px",
        lineHeight: "29px",
      },
    },
  })
);

export const Line = styled("div")(
  css({
    width: "255px",
    height: "1px",
    background: "#CFCFCF",
    transform: `matrix(1, 0, 0, -1, 0, 0)`,
    marginTop: "10px",
  })
);
