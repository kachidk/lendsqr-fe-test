import { render } from "@testing-library/react";
import { describe, test } from "vitest";
import { routes } from "../routes";
import { RouterProvider } from "react-router-dom";

describe("EntryPoint", () => {
  test("test", () => {
    render(<RouterProvider router={routes} />);
  });
});
