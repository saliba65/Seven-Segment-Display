import css from "@styled-system/css";
import styled from "styled-components";

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
  }),

  //Disable input
  ({ disabled }) =>
    disabled &&
    css({
      cursor: "not-allowed",
      border: "1px solid #DDDDDD",
    })
);
