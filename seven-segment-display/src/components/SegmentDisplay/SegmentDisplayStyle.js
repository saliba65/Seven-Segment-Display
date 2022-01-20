import css from "@styled-system/css";
import styled from "styled-components";

export const ContainerDisplay = styled("div")(
  css({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "300px",
    maxWidth: "250px",
    maxHeight: "135px",
  })
);
