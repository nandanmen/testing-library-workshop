import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { Counter } from "./Counter";

describe("Counter", () => {
  it("should start with a count of 0", () => {
    render(<Counter />);
    screen.getByText("Count: 0");
  });

  it.todo("should increment the value when increment is pressed");

  it.todo("should decrement the value when decrement is pressed");
});
