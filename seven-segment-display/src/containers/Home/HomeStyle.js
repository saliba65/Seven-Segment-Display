import css from "@styled-system/css";
import styled from "styled-components";

export const Container = styled("div")(
  css({
    width: "100%",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    // background: `linear-gradient(180deg, #EEEEEE 0%, #FFFFFF 100%)`,
  })
);

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

export const Number = styled("h1")(
  css({
    fontSize: "135px",
    padding: "140px 0px",
  })
);

export const FormContainer = styled("div")(
  css({
    flexDirection: "row",
    paddingBottom: "59px",
  })
);

export const Input = styled("input")(
  css({
    width: "217px",
    height: "42px",
    background: "#FFFFF",
    border: "1px solid #FF6600",
    boxSizing: "border-box",
    borderRadius: "4px",
    padding: "14px 12px",
    fontSize: "12px",
    lineHeight: "14px",
    "::placeholder": {
      color: "#9E9E9E",
    },
  })
);

export const Button = styled("button")(
  css({
    marginLeft: "11px",
    width: "70px",
    height: "42px",
    borderRadius: "4px",
    background: `linear-gradient(180deg, #EF6C00 0%, #C0661C 100%)`,
    outline: "none",
    border: "none",
    fontWeight: "bold",
    fontSize: "12px",
    lineHeight: "14px",
    color: "#FFFF",
    cursor: "pointer",

    ":hover": {
      background: `linear-gradient(90deg, #EF6C00 0%, #C0661C 100%)`,
    },
  })
);
