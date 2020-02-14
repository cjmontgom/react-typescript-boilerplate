import App from "../components/App";
import * as React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

describe("<App />", () => {
  it("should display a page with the header", () => {
    const appRender = render(<App />);
    
    expect(appRender.getByText("Hello, the boilerplate")).toBeInTheDocument();
  });
});
