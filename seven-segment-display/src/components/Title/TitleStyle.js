import css from "@styled-system/css";
import styled from "styled-components";

export const TextContainer = styled("div")(
  css({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    paddingTop: "50px",

    h1: {
      fontStyle: "normal",
      fontSize: "36px",
      fontWeight: "700",
      lineHeight: "44px",
      textAlign: "center",
      letterSpacing: "-1px",
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
