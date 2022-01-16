import css from "@styled-system/css";
import styled from "styled-components";

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
