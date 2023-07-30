import Greeting from "./Greeting";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("should render greeting component", () => {
  test("should present text in greeting component", () => {
    render(<Greeting />);
    const content = screen.getByText(/Greeting from Greeting component/i);
    expect(content).toBeInTheDocument();
  });

  test("render correct text when button clicked", () => {
    //Arrange
    render(<Greeting />);

    //Act
    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);

    //Assert
    const outputElement = screen.getByText("text changed", { exact: false });
    expect(outputElement).toBeInTheDocument();
  });

  test("when user click on button previous text should not be there", () => {
    //Arrange
    render(<Greeting />);

    //Act
    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);

    //Assert
    expect(() => getByText(/Greeting from Greeting component/i)).toThrow();
  });
});
