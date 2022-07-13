import { render, fireEvent, screen } from "@testing-library/react";
import Counter from "./counter";

test("increment counter", () => {
  render(<Counter />);
  const counter = screen.getByTestId("counter");
  const incrementButton = screen.getByTestId("increment");
  fireEvent.click(incrementButton);

  //assert the expected result
  expect(counter).toHaveTextContent("1");
//   expect(counter).toHaveTextContent("2");

  console.log(counter);

  // console.log('testing is awesome...');
});

test("decrement counter", () => {
  render(<Counter />);
  const counter = screen.getByTestId("counter");
  const decrementButton = screen.getByTestId("decrement");
  fireEvent.click(decrementButton);

  //assert the expected result
  expect(counter).toHaveTextContent("-1");

//   expect(counter).toHaveTextContent("-2");

  // console.log(counter);
});

test("Reset button", () => {
    render(<Counter />);
    const counter = screen.getByTestId("counter");
    const Reset = screen.getByTestId("resetButton");
    fireEvent.click(Reset);
  
    //assert the expected result
    expect(counter).toHaveTextContent("0");
  
  //   expect(counter).toHaveTextContent("-2");
  
    // console.log(counter);
  });