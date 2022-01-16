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

    "@media (max-width: 325px)": {
      marginLeft: "0px",
      marginTop: "15px",
    },
  }),

  ({ isNewGame }) =>
    isNewGame &&
    css({
      width: "130px",
      marginLeft: "0px",
      marginTop: "50px",
      background: `linear-gradient(180deg, #434854 0%, #9E9E9E 100%)`,
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",

      ":hover": {
        background: `linear-gradient(90deg, #434854 0%, #9E9E9E 100%)`,
      },

      svg: {
        marginRight: "7px",
        height: "24px",
      },
    })
);
