import React from "react";
import { render } from "@testing-library/react";
import { screen } from "@testing-library/dom";
import "@testing-library/jest-dom/extend-expect";
import Mensage from "../components/Mensage/Mensage";
import Title from "../components/Title/Title";

/*
  Testes unitarios dos componentes de texto
  Mensagens de test e describe estao em ingles por padrao de codigo 
*/

describe("Mensage", () => {
  test("mensage should be a function", () => {
    expect(Mensage).toBeInstanceOf(Function);
  });

  it("mensage should show title and children props", () => {
    render(
      <Mensage
        title="title exemple"
        mensage={"Children Text"}
        state={"correct"}
      />
    );

    const MensageElement = screen.getByTestId("mensage-element");
    expect(MensageElement).toHaveTextContent("Children Text");
    expect(MensageElement).toHaveAttribute("title", "title exemple");
    expect(MensageElement).not.toHaveAttribute("state", "error");
    expect(MensageElement).not.toHaveTextContent("Wrong Mensage");
  });
});

describe("Title", () => {
  test("title should be a function", () => {
    expect(Title).toBeInstanceOf(Function);
  });

  it("title should show title and children props", () => {
    render(<Title title="title exemple" children={"Children Text"} />);

    const TitleElement = screen.getByTestId("title-element");
    expect(TitleElement).toHaveTextContent("Children Text");
    expect(TitleElement).toHaveAttribute("title", "title exemple");
    expect(TitleElement).not.toHaveTextContent("Wrong Mensage");
  });
});
