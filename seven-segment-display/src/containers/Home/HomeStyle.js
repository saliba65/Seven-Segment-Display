import css from "@styled-system/css";
import styled from "styled-components";

export const Container = styled("div")(
  css({
    width: "100%",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
  })
);

export const ContainerNumber = styled("div")(
  css({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "75px",
  })
);

export const Number = styled("h1")(
  css({
    fontSize: "135px",
  })
);

export const FormContainer = styled("form")(
  css({
    display: "flex",
    flexDirection: "row",
    paddingBottom: "30px",

    "@media (max-width: 325px)": {
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
    },
  })
);
