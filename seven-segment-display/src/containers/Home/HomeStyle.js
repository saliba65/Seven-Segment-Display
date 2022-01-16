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
