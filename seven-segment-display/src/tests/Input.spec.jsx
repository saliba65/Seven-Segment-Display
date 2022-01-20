import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, fireEvent } from "@testing-library/react";
import { screen } from "@testing-library/dom";
import Input from "../components/Input/Input";

const defaultProps = {
  name: "input-name",
  type: "text",
  min: "1",
  max: "3",
  placeholder: "Digite um numero",
  value: "299",
  disabled: false,
};

describe("Input", () => {
  test("should be a function", () => {
    expect(Input).toBeInstanceOf(Function);
  });

  it("should execute Input props correctly", () => {
    const changeHandler = jest.fn();
    render(
      <Input
        name={defaultProps.name}
        type={defaultProps.type}
        min={defaultProps.min}
        max={defaultProps.max}
        placeholder={defaultProps.placeholder}
        value={defaultProps.value}
        disabled={defaultProps.disabled}
        onChange={changeHandler}
      />
    );

    const btnElement = screen.getByTestId("input-element");

    fireEvent.change(btnElement, { target: { value: "a" } });
    expect(changeHandler).toBeCalled();
    expect(changeHandler).toHaveBeenCalledTimes(1);

    expect(btnElement).toHaveAttribute("name", "input-name");
    expect(btnElement).toHaveAttribute("placeholder", "Digite um numero");
    expect(btnElement).toHaveAttribute("type", "text");
    expect(btnElement).toHaveAttribute("min", "1");
    expect(btnElement).toHaveAttribute("max", "3");
    expect(btnElement).toHaveAttribute("value", "299");
    expect(btnElement).toBeEnabled();
  });
});
