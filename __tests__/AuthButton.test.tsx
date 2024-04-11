import "@testing-library/jest-dom";
import { render, fireEvent } from "@testing-library/react";
import { AuthButton } from "@/modules/auth/components/AuthButton";
import { AppRouterContextProviderMock } from "@/config/mocks/app-router-context-provider-mock";
import { URL } from "@/config/constants";

describe("AuthButton", () => {
  it("should redirect to /auth when clicked", () => {
    const push = jest.fn();
    const { getByText } = render(
      <AppRouterContextProviderMock router={{ push: jest.fn() }}>
        <AuthButton session={null} />
      </AppRouterContextProviderMock>,
    );

    const button = getByText("Login");
    fireEvent.click(button);

    expect(push).toHaveBeenCalledWith(URL.AUTH);
  });

  it("should contain logout if there is a session", () => {
    const { getByText } = render(
      <AppRouterContextProviderMock router={{ push: jest.fn() }}>
        <AuthButton
          session={{
            user: { id: "", name: "", email: "", image: "" },
            expires: "",
          }}
        />
        ,
      </AppRouterContextProviderMock>,
    );

    expect(getByText("Logout")).toBeInTheDocument();
  });
});
