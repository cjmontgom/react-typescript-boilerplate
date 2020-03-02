import App from "../components/App";
import * as React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

describe("<App />", () => {
  it("should display a page with the header", async () => {

    const appRender = await render(<App />);
    await Promise.resolve();
    expect(appRender.getByText('Loading... please wait!')).toBeInTheDocument()
    expect(appRender.findByText('Welcome back!')).toBeInTheDocument()

  });
});
