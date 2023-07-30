import { render, screen } from "@testing-library/react";
import Async from "./Async";

describe("Async ", () => {
  test("should render list items", async () => {
    render(<Async />);

    const listitemElements = await screen.findAllByRole("listitem");
    expect(listitemElements).not.toHaveLength(0);
  });
});
