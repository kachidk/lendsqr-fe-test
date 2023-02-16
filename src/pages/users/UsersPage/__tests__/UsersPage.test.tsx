import { UsersPage } from "..";
import { render } from "@testing-library/react";
import { describe, test } from "vitest";
import { MemoryRouter } from "react-router-dom";
import { routes } from "../../../../routes";

describe("UsersPage", () => {
  test("test", () => {
    render(
      <MemoryRouter initialEntries={[routes]}>
        <UsersPage />
      </MemoryRouter>
    );
  });
});
