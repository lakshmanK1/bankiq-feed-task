import { screen, render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import App from "../App";


describe("Initial Tests", () => {
  test("App Components is in Document or not", () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
    const AppComponent = screen.getByText(/Available Feeds/i);
    expect(AppComponent).toBeInTheDocument();
  });

  test("Search component is in doucument", () => {
     render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
    const childElement = screen.getByLabelText("Search for your favourite feed");
    expect(childElement).toBeTruthy();
  });

  test("Sorting component is in doucument", () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
    const childElement = screen.getByTestId("sort-component");
    expect(childElement).toBeInTheDocument();
  });

  test("Feed component is in doucument", () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
    const childElement = screen.getByTestId("feed-component");
    expect(childElement).toBeInTheDocument();
  });
});
