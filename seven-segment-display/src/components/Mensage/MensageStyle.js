import css from "@styled-system/css";
import styled from "styled-components";

export const Mensage = styled("p")(
  css({
    marginBottom: "15px",
    fontStyle: "normal",
    fontSize: "16px",
    fontWeight: "bold",
    lineHeight: "20 px",
    textAlign: "center",
    letterSpacing: "-1px",
  }),

  ({ state }) =>
    state === "correct"
      ? css({
          color: "#32BF00",
        })
      : state === "erro"
      ? css({
          color: "#CC3300",
        })
      : css({
          color: "#FF6600",
        })
);
