import Index from "@/pages/index";
import { render, screen } from "@testing-library/react";
import { useSession } from "next-auth/react";

jest.mock("next-auth/react");

describe("main home page", () => {
  it("should render login", () => {
    useSession.mockReturnValueOnce([false, false]);
    render(<Index />);
    expect(screen.getByText("لاگین")).toBeInTheDocument();
  });

  it("should render logout", () => {
    useSession.mockReturnValueOnce([false, false]);
    render(<Index />);
    expect(screen.getByText("لاگ اوت")).toBeInTheDocument();
  });
});
