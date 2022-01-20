import React from "react";
import "@testing-library/jest-dom";
import { render, fireEvent } from "@testing-library/react";
import { screen } from "@testing-library/dom";
import Button from "../components/Button/Button";

const defaultProps = {
  name: "Testing Button",
};

describe("Button", () => {
  test("should be a function", () => {
    expect(Button).toBeInstanceOf(Function);
  });

  it("should render button and execute onClick", () => {
    const handleClick = jest.fn();

    render(<Button name={defaultProps.name} onClick={handleClick} />);

    const btnElement = screen.getByTestId("button-element");
    fireEvent.click(btnElement);
    expect(handleClick).toBeCalled();
    expect(handleClick).toBeCalledTimes(1);
  });

  it("should render button component with his correct children", () => {
    render(<Button children={defaultProps.name} isLoading />);

    const btnElement = screen.getByTestId("button-element");

    expect(btnElement.textContent).not.toBe("Test Button");
  });
});
