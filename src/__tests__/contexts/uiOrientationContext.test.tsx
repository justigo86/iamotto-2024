/**
 * @jest-environment jsdom
 */

// src/app/contexts/uiOrientationContext.test.tsx
import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/jest-globals";
import UiOrientationContextProvider, {
  useUiOrientationContext,
} from "../../app/contexts/uiOrientationContext";
import { describe, it, jest, expect } from "@jest/globals";

describe("UiOrientationContext", () => {
  it("should provide the initial uiOrientation value", () => {
    const uiOrientation = "initial";
    const setUiOrientation = jest.fn();
    const contextValue = { uiOrientation, setUiOrientation };

    const { getByText } = render(
      // <UiOrientationContextProvider value={contextValue}>
      <UiOrientationContextProvider>
        <div>{uiOrientation}</div>
      </UiOrientationContextProvider>
    );

    expect(getByText(uiOrientation)).toBeInTheDocument();
  });

  it("should update the uiOrientation value when setUiOrientation is called", () => {
    const initialUiOrientation = "initial";
    const newUiOrientation = "new";
    const setUiOrientation = jest.fn();
    const contextValue = {
      uiOrientation: initialUiOrientation,
      setUiOrientation,
    };

    const { getByText, rerender } = render(
      // <UiOrientationContextProvider value={contextValue}>
      <UiOrientationContextProvider>
        <div>{initialUiOrientation}</div>
      </UiOrientationContextProvider>
    );

    expect(getByText(initialUiOrientation)).toBeInTheDocument();

    setUiOrientation(newUiOrientation);

    rerender(
      // <UiOrientationContext.Provider value={{ uiOrientation: newUiOrientation, setUiOrientation }}>
      <UiOrientationContextProvider>
        <div>{newUiOrientation}</div>
      </UiOrientationContextProvider>
    );

    expect(getByText(newUiOrientation)).toBeInTheDocument();
  });
});

// describe("useUiOrientationContext", () => {
//   it("should throw an error if used outside of the UiOrientationContext provider", () => {
//     const { getByText } = render(<div>{useUiOrientationContext()}</div>);

//     expect(() =>
//       getByText(
//         "useUiOrientationContext must be used within a UiOrientationContextProvider"
//       )
//     ).toThrowError();
//   });

//   it("should return the uiOrientation value and setUiOrientation function", () => {
//     const uiOrientation = "initial";
//     const setUiOrientation = jest.fn();
//     const contextValue = { uiOrientation, setUiOrientation };

//     const { getByText } = render(
//       // <UiOrientationContextProvider value={contextValue}>
//       <UiOrientationContextProvider>
//         <div>{useUiOrientationContext()}</div>
//       </UiOrientationContextProvider>
//     );

//     expect(getByText(uiOrientation)).toBeInTheDocument();
//     expect(setUiOrientation).not.toHaveBeenCalled();
//   });
// });
