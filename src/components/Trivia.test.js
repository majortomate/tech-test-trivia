import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "../App";

describe("Trivia test", () => {
  it("renders Trivia Component in App component", () => {
    render(<App />);
    expect(screen.getByText("Trivia")).toBeInTheDocument();
  });
});
